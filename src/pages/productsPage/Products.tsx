import Categorybox from "../../components/Categorybox";
import PriceRange from "../../components/PriceRange";
import SearchBox from "../../components/SearchBox";
import ShortPrice from "../../components/ShortPrice";

const Products = () => {
    return (
        <div className="grid grid-cols-4 gap-8">
            <div className="col-span-1	bg-red-400 space-y-7">
                <SearchBox />
                <Categorybox />
                <PriceRange />
                <ShortPrice />
            </div>
            <div className="bg-green-300 col-span-3">

            </div>
        </div>
    );
};

export default Products; 