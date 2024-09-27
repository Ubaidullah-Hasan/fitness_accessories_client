import ProductCard from "../../../components/ProductCard";
import SectionTitle from "../../../components/SectionTitle";
import { useGetAllProductsQuery } from "../../../redux/features/products/productsApi";
import { TProduct } from "../../../types";

const FeaturedProduct = () => {
    const { data: products } = useGetAllProductsQuery({ sort: "desc", limit: 4 });

    return (
        <div className="section">
            <SectionTitle
                title="Top Picks for You"
                subtitle="Elevate Your Workout with Our Handpicked Gym Accessories"
                className="px-4"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1 mx-4">
                {
                    products?.map((product:TProduct) => <ProductCard
                        key={product?._id}
                        product={product}
                    />)
                }
            </div>

        </div>
    );
};

export default FeaturedProduct;