import { Button } from 'antd';

type THandleFilter = {
    handleFilter: () => void
}

const ClearFilter = ({ handleFilter }: THandleFilter) => {

    return (
        <Button className='bg-black text-white hover:!bg-black/75 hover:!text-white hover:!border-white'
            onClick={handleFilter}
        >Clear Filters</Button>
    );
};

export default ClearFilter;