import { Button } from 'antd';

const ClearFilter = () => {
    // const clearFilters = () => {
    //     setSelectedCategories([]);
    //     setPriceRange([0, 1000]);
    //     setSortOrder('');
    // };
    return (
        <Button className='bg-black text-white hover:!bg-black/75 hover:!text-white hover:!border-white'>Clear Filters</Button>
        // <button onClick={clearFilters}>Clear Filters</button>
    );
};

export default ClearFilter;