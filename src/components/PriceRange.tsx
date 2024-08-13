import { RangeSlider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';


type TPriceRangeProps = {
    priceRange: [number, number];
    setPriceRange: (newRange: [number, number]) => void;
};

const PriceRange = ({ priceRange, setPriceRange }: TPriceRangeProps) => {

    return (
        <div>
            <div className='flex flex-col'>
                <h3 className='mb-2 text-lg'>Price Range</h3>

                <div className='flex items-center justify-between gap-5'>
                    <div className='flex-1 bg-green-500'>
                        <RangeSlider
                            defaultValue={[priceRange[0], priceRange[1]]}
                            onChange={(value) => {
                                setPriceRange(value)
                            }}
                            max={2000}
                        />
                    </div>
                    <span className='bg-stone-100 flex-none border border-white px-3 py-1 rounded-md font-semibold'>
                        {priceRange[0]} - {priceRange[1]}
                    </span>
                </div>

            </div>
        </div>
    );
};

export default PriceRange;