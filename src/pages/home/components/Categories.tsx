import { useGetAllCategoriesQuery } from '../../../redux/features/categories/categoriesApi';

const Categories = () => {
    const {data} = useGetAllCategoriesQuery(undefined);
    console.log(data);

    return (
        <div>
            
        </div>
    );
};

export default Categories;