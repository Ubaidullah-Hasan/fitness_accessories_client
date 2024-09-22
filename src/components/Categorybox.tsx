import { Flex, Spin } from 'antd';
import { useGetAllCategoriesQuery } from '../redux/features/categories/categoriesApi';

type TCategoryProps = {
    selectedCategories: string[],
    setSelectedCategories: (v: string[]) => void,
}

const Categorybox = ({ selectedCategories, setSelectedCategories }) => {
    // todo: does not work
    const { data: categories } = useGetAllCategoriesQuery(undefined)

    const handleCategoryChange = (categoryId: string) => {
        setSelectedCategories((prevCategories: string[]) =>
            prevCategories.includes(categoryId)
                ? prevCategories.filter((c) => c !== categoryId)
                : [...prevCategories, categoryId]
        );
    };


    return (
        <div className='flex flex-col gap-1'>
            <h3 className='mb-2 text-lg'>Categories</h3>
            {
                categories ?
                    categories?.map((category) => (
                        <div className='flex gap-3' key={category?._id}>
                            <input
                                id={category?._id}
                                type="checkbox"
                                checked={selectedCategories.includes(category?._id)}
                                onChange={() => handleCategoryChange(category?._id)}
                            />
                            <label key={category._id} htmlFor={category?._id}>
                                {category?.categoriName}
                            </label>
                        </div>
                    )) :
                    <Flex align="center" gap="middle">
                        <Spin size="small" />
                    </Flex>
                }
        </div>
    );
};

export default Categorybox;