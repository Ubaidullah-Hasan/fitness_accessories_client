import { useEffect, useState } from "react";
import Gallery from "react-photo-gallery";

type TOrientation = 'landscape' | 'portrait';

type TOrientationPromise = {
    orientation: TOrientation;
    width: number;
    height: number;
}

type TImages = {
    _id: string;
    orientation: TOrientation;
    width: number;
    height: number;
    src: string,
};

type TDataOfImages = {
    _id: string;
    image: string;
};


type TDataProps = {
    dataOfImages: TDataOfImages[] | undefined;
}

const ImageGallary = ({ dataOfImages }: TDataProps) => {
    const [images, setImages] = useState<TImages[]>([]);

    const determineOrientation = (url: string): Promise<TOrientationPromise> => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                const orientation = img.width >= img.height ? 'landscape' : 'portrait';
                resolve({
                    orientation,
                    width: img.width,
                    height: img.height
                });
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
                            orientation: orientation.orientation,
                            width: orientation.width,
                            height: orientation.height,
                            src: item.image,
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
        <div className="mx-4 rounded-[20px] overflow-hidden xl:max-h-[700px] lg:max-h-[500px] md:max-h-[400px] max-h-[180px] shadow-lg">
            {
                images.length &&
                <Gallery photos={images} direction={"column"} columns={4} />
            }
        </div>
    );
};

export default ImageGallary;