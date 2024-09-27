import { TCategories, useGetAllCategoriesQuery } from '../../../redux/features/categories/categoriesApi';
import SectionTitle from '../../../components/SectionTitle';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const { data: categories } = useGetAllCategoriesQuery(undefined);
    const navigate = useNavigate();

    const handleCategory = (category: TCategories ) => {
        navigate("/products", { state: { categoryId: category?._id } });
    }


    return (
        <div className='section'>
            <SectionTitle
                title={"Fitness Gear"}
                subtitle="Find essential Fitness Gear for your workouts. From weights to bands, we' ve got you covered."
                className='px-5'
            />

            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-8 px-4'>

                {
                    categories?.map(category =>
                        <div
                            onClick={() => handleCategory(category)}
                            key={category?._id}
                            className='rounded-md  border p-2 text-center shadow-md '
                        >
                            <img className='object-cover h-48 w-96 rounded-md ' src={category?.image || "https://mystmaya.com/wp-content/uploads/2024/03/33g.jpg"} alt={category?.categoriName} />
                            <h3 className='text-lg font-semibold tracking-wide my-2'>{category?.categoriName}</h3>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Categories;