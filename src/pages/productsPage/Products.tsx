import { useState } from "react";
import Categorybox from "../../components/Categorybox";
import ClearFilter from "../../components/ClearFilter";
import PriceRange from "../../components/PriceRange";
import ProductCard from "../../components/ProductCard";
import SearchBox from "../../components/SearchBox";
import ShortPrice from "../../components/ShortPrice";
import { useGetAllProductsQuery } from "../../redux/features/products/productsApi";
import { Flex, Spin } from "antd";
import { useLocation } from "react-router-dom";
import { TProduct } from "../../types";

export type TSort = 'asc' | 'desc' | '';

const Products = () => {
    // for query
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [sortOrder, setSortOrder] = useState<TSort>('');
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
    const location = useLocation();
    const categoryId = location?.state?.categoryId || "";
    const [selectedCategories, setSelectedCategories] = useState<string[]>([categoryId]);

    const query = {
        searchTerm,
        sort: sortOrder,
        priceRange,
        selectedCategories,
    }
    // console.log(query);

    const handleFilter = () => {
        setSearchTerm("");
        setSortOrder("");
        setPriceRange([0, 1000]);
        setSelectedCategories([]);
    }

    const { data: products } = useGetAllProductsQuery(query);
    // console.log(products, "products");


    return (
        <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1 p-4 space-y-7">
                <SearchBox setSearchTerm={setSearchTerm} />

                <Categorybox selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />

                <PriceRange priceRange={priceRange} setPriceRange={setPriceRange} />

                <ShortPrice sortOrder={sortOrder} setSortOrder={setSortOrder} />

                <ClearFilter handleFilter={handleFilter} />
            </div>
            <div className="grid col-span-3 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
                {
                    products ?
                        products?.map((product: TProduct) => (
                            <ProductCard
                                isPrice={true}
                                key={product?._id}
                                product={product}
                                col={3}
                            />
                        )) :
                        <div className="flex items-center justify-center">
                            <Flex align="center" gap="middle" >
                                <Spin size="large" />
                            </Flex>
                        </div>
                }
            </div>
        </div>
    );
};

export default Products; 