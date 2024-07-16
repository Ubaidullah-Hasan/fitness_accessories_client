import React from 'react';

const PriceRange = () => {
    return (
        <div>
            <div>
                <h3>Price Range</h3>
                <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceChange([Number(e.target.value), priceRange[1]])}
                />
                <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange([priceRange[0], Number(e.target.value)])}
                />
                <span>
                    {priceRange[0]} - {priceRange[1]}
                </span>
            </div>
        </div>
    );
};

export default PriceRange;