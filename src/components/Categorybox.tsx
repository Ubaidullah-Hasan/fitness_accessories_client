import { useGetAllCategoriesQuery } from '../redux/features/categories/categoriesApi';

// type TCategoryProps = {
//     selectedCategories: string[],
//     setSelectedCategories: (v: string[]) => void,
// }

const Categorybox = ({ selectedCategories, setSelectedCategories}) => {
    const { data: categories } = useGetAllCategoriesQuery(undefined)

    const handleCategoryChange = (categoryId: string) => {
        setSelectedCategories((prevCategories) =>
            prevCategories.includes(categoryId)
                ? prevCategories.filter((c) => c !== categoryId)
                : [...prevCategories, categoryId]
        );
    };

    return (
        <div className='flex flex-col gap-1'>
            <h3 className='mb-2 text-lg'>Categories</h3>
            {categories?.map((category) => (
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
            ))}
        </div>
    );
};

export default Categorybox;