import React from 'react';

const ShortPrice = () => {
    return (
            <div>
                <h3>Sort by Price</h3>
                <select value={sortOrder} onChange={(e) => handleSortOrderChange(e.target.value as 'asc' | 'desc' | '')}>
                    <option value="">None</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
    );
};

export default ShortPrice;