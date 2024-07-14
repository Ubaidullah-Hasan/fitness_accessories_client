import { LazyLoadImage } from "react-lazy-load-image-component";
import "./imageGallary.css"
import { useEffect, useState } from "react";

type Orientation = 'landscape' | 'portrait';

type TImages = {
    _id: string;
    orientation?: Orientation;
    image: string;
};


type TDataProps = {
    dataOfImages: TImages[] | undefined;
}

const ImageGallary = ({ dataOfImages }: TDataProps) => {
    const [images, setImages] = useState<TImages[]>([]);


    const determineOrientation = (url: string): Promise<Orientation> => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                resolve(img.width >= img.height ? 'landscape' : 'portrait');
            };
            img.src = url;
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            if (dataOfImages) { // Check if imagesLoad is defined
                const processedImages: TImages[] = await Promise.all(
                    dataOfImages.map(async (item) => {
                        const orientation = await determineOrientation(item.image);
                        const image = {
                            _id: item._id,
                            orientation,
                            image: item.image,
                        };
                        return image;
                    })
                );
                setImages(processedImages);
            }
        };

        fetchData();
    }, [dataOfImages]);

    return (
        <div className='image-grid grid gap-3 mx-4 rounded-[20px] overflow-hidden'>
            {
                images?.map(img => (
                    <div
                        key={img?._id}
                        className={`grid-item ${img?.orientation === 'portrait' ? 'portrait' : 'landscape'}`}
                    >
                        <LazyLoadImage
                            className='w-full shadow-lg h-full grid-image'
                            src={img?.image}
                            alt={img?._id}
                            height={"200px"}
                            width={"180px"}
                        // effect="blur"
                        />
                    </div>
                ))
            }
        </div>
    );
};

export default ImageGallary;