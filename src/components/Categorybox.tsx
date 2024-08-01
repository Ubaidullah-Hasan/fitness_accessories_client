import { useState } from 'react';
import { useGetAllCategoriesQuery } from '../redux/features/categories/categoriesApi';

const Categorybox = () => {
    const { data: categories } = useGetAllCategoriesQuery(undefined)
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
            <h3 className='mb-2 text-lg'>Categories</h3>
            {categories?.map((category) => (
                <div className='flex gap-3' key={category?._id}>
                    <input
                        id={category?._id}
                        type="checkbox"
                        checked={selectedCategories.includes(category?.categoriName)}
                        onChange={() => handleCategoryChange(category?.categoriName)}
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