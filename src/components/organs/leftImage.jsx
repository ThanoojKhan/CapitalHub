import React from "react";
import JoinCommunity1 from '../../assets/images/jc1.png';
import JoinCommunity2 from '../../assets/images/jc2.png';

const ImageCard = ({ imageUrl, altText, imageStyle }) => (
    <img
        loading="lazy"
        src={imageUrl}
        alt={altText}
        className={`max-w-full ${imageStyle}`}
    />
);

const ImageGallery = () => {
    const images = [
        {
            imageUrl: JoinCommunity1,
            altText: "Image description",
            imageStyle: "aspect-[0.96] w-[185px] ",
        },
        {
            imageUrl: JoinCommunity2,
            altText: "Another image description",
            imageStyle: "self-end ms-20 mt-14 aspect-[0.95] w-[150px] max-md:mt-10",
        },
    ];

    return (
        <div className="flex flex-col grow ">
            {images.map((image, index) => (
                <ImageCard key={index} {...image} />
            ))}
        </div>
    );
};

export default ImageGallery;
