import ProductCard from "../../../components/ProductCard";
import SectionTitle from "../../../components/SectionTitle";
import { useGetAllProductsQuery } from "../../../redux/features/products/productsApi";

const FeaturedProduct = () => {
    const { data: products } = useGetAllProductsQuery({ sort: "desc", limit: 4 });

    return (
        <div className="section">
            <SectionTitle
                title="Top Picks for You"
                subtitle="Elevate Your Workout with Our Handpicked Gym Accessories"
            />

            <div className="flex gap-1">
                {
                    products?.map(product => <ProductCard
                        key={product?._id}
                        product={product}
                    />)
                }
            </div>

        </div>
    );
};

export default FeaturedProduct;