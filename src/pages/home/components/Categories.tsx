import { useGetAllCategoriesQuery } from '../../../redux/features/categories/categoriesApi';
import SectionTitle from '../../../components/SectionTitle';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const { data: categories } = useGetAllCategoriesQuery(undefined);
    const navigate = useNavigate();


    return (
        <div className='section'>
            <SectionTitle
                title={"Fitness Gear"}
                subtitle="Find essential Fitness Gear for your workouts. From weights to bands, we' ve got you covered."
            />
            <div className='flex justify-center gap-4 mt-8 px-4'>

                {
                    categories?.map(categoty =>
                        <div
                            onClick={() => navigate(categoty?.categoriName)}
                            key={categoty?._id}
                            className='rounded-md  border p-2 text-center w-[25%] shadow-md'
                        >
                            <img className='object-cover h-48 w-96 rounded-md ' src={categoty?.image || "https://i.ibb.co/Vxh1YFt/dummbles.jpg"} alt={categoty?.categoriName} />
                            <h3 className='text-lg font-semibold tracking-wide my-2'>{categoty?.categoriName}</h3>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Categories;