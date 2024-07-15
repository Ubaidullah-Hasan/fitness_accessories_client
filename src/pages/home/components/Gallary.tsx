import ImageGallary from '../../../components/imageGallary/ImageGallary';
import SectionTitle from '../../../components/SectionTitle';
import { useGetAllCustomarReviewQuery } from '../../../redux/features/user/userApi';



const Gallary = () => {
    const queryInfo = { limit: 10, image: "image" };
    const { data: images } = useGetAllCustomarReviewQuery(queryInfo);





    return (
        <div className='section pb-4'>
            <SectionTitle
                title='Our Happy Customers'
                subtitle='See how our products have transformed lives'
            />

            <ImageGallary
                dataOfImages={images}
            />

        </div>
    );
};

export default Gallary;