import React from "react";
import JoinCommunity3 from '../../assets/images/jc3.png'
import JoinCommunity4 from '../../assets/images/jc4.png'

const ImageCard = ({ src, width, aspectRatio, marginTop }) => (
    <img
        loading="lazy"
        src={src}
        className={`max-w-full ${width} aspect-${aspectRatio} ${marginTop}`}
    />
);

const ImageGallery = () => {
    const images = [
        {
            src: JoinCommunity3,
            width: "w-[118px]",
            aspectRatio: "[0.96]",
            marginTop: "self-end xl:mr-24",
        },
        {
            src: JoinCommunity4,
            width: "w-[146px]",
            aspectRatio: "[0.78]",
            marginTop: "mt-20 max-md:mt-10",
        },
    ];

    return (
        <section className="flex flex-col max-md:mt-10">
            {images.map((image, index) => (
                <ImageCard
                    key={index}
                    src={image.src}
                    width={image.width}
                    aspectRatio={image.aspectRatio}
                    marginTop={image.marginTop}
                />
            ))}
        </section>
    );
};

export default ImageGallery;