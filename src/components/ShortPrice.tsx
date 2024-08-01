import { Select } from 'antd';
import { TSort } from '../pages/productsPage/Products';

type TSortPriceProps = {
    setSortOrder: (v: string) => string,
    sortOrder: string,
}

const ShortPrice = ({ setSortOrder, sortOrder }: TSortPriceProps) => {

    const handleSortOrderChange = (order: 'asc' | 'desc' | '') => {
        setSortOrder(order);
    };


    return (
        <div>
            <h3 className='mb-2 text-lg'>Sort by Price</h3>
            <Select className='w-full' value={sortOrder} onChange={(value) => handleSortOrderChange(value as TSort)}>
                <option value="asc" >Low To High</option>
                <option value="desc">High To Low</option>
            </Select>

        </div>
    );
};

export default ShortPrice;