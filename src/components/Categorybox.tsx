import { useState } from 'react';
import { useGetAllCategoriesQuery } from '../redux/features/categories/categoriesApi';

const Categorybox = () => {
    const { data: categories } = useGetAllCategoriesQuery(undefined)
    console.log(categories)
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleCategoryChange = (category: string) => {
        setSelectedCategories((prevCategories) =>
            prevCategories.includes(category)
                ? prevCategories.filter((c) => c !== category)
                : [...prevCategories, category]
        );
    };
    console.log(selectedCategories);

    return (
        <div className='flex flex-col gap-1'>
            <h3 className='mb-2'>Categories</h3>
            {categories?.map((category) => (
                <label key={category._id}>
                    <input
                        type="checkbox"
                    checked={selectedCategories.includes(category?.categoriName)}
                        onChange={() => handleCategoryChange(category?.categoriName)}
                    />
                    {category?.categoriName}
                </label>
            ))}
        </div>
    );
};

export default Categorybox;