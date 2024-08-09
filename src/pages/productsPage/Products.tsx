import { useState } from "react";
import Categorybox from "../../components/Categorybox";
import ClearFilter from "../../components/ClearFilter";
import PriceRange from "../../components/PriceRange";
import ProductCard from "../../components/ProductCard";
import SearchBox from "../../components/SearchBox";
import ShortPrice from "../../components/ShortPrice";
import { useGetAllProductsQuery } from "../../redux/features/products/productsApi";
import { Flex, Spin } from "antd";

export type TSort = 'asc' | 'desc' | '';

const Products = () => {
    // for query
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [sortOrder, setSortOrder] = useState<TSort>('');
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);


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
    console.log(products, "products");


    return (
        <div className="grid grid-cols-4 gap-8">
            <div className="col-span-1 p-4 space-y-7">
                <SearchBox setSearchTerm={setSearchTerm} />

                <Categorybox selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />

                <PriceRange priceRange={priceRange} setPriceRange={setPriceRange} />

                <ShortPrice sortOrder={sortOrder} setSortOrder={setSortOrder} />

                <ClearFilter handleFilter={handleFilter} />
            </div>
            <div className="col-span-3 grid grid-cols-3 gap-3 p-4">
                {
                    products ?
                        products?.map(product => (
                            <ProductCard
                                isPrice={true}
                                key={product?._id}
                                product={product}
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