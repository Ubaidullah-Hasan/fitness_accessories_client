import { Carousel } from 'antd'; // Ant Design Carousel component
import 'antd/dist/reset.css'; // Import Ant Design CSS

// const images = [
//     {
//         _id: "66bb82d8bebd62e98b08389f",
//         src: "https://i.ibb.co/pnj9vtT/7.jpg",
//         width: 640,
//         height: 360,
//         orientation: "landscape",
//     },
//     // Add more images here
// ];

type TImages = {
    _id: string,
    src: string,
    width: number,
    height: number,
    orientation: string,
}
const ImageGallaryAlbum = ({ images }: { images: TImages[] }) => {
    return (
        <div className="container mx-auto">

            {/* Ant Design Carousel for sliding images */}
            <Carousel autoplay>
                {images?.map((image) => (
                    <div key={image._id} className="flex justify-center items-center">
                        <img
                            src={image.src}
                            alt={`Image ${image._id}`}
                            className="object-cover w-full h-[400px]"
                        />
                    </div>
                ))}
            </Carousel>

            {/* Tailwind for grid layout below the slider */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {images.map((image) => (
                    <div key={image._id} className="border rounded-lg overflow-hidden">
                        <img
                            src={image.src}
                            alt={`Image ${image._id}`}
                            className="object-cover w-full h-64"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallaryAlbum;
