import { Select } from 'antd';
import { useState } from 'react';

const ShortPrice = () => {
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>('');

    const handleSortOrderChange = (order: 'asc' | 'desc' | '') => {
        setSortOrder(order);
        console.log(order);
    };

    
    return (
            <div>
                <h3>Sort by Price</h3>
                <Select className='w-full' value={sortOrder} onChange={(e) => handleSortOrderChange(e as 'asc' | 'desc' | '')}>
                    <option value="">All</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </Select>

            </div>
    );
};

export default ShortPrice;