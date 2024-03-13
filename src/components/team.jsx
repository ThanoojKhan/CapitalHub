import React from "react";
import Rahul from '../assets/images/rahul.png'
import Ishaa from '../assets/images/Ishaa.png'
import Priya from '../assets/images/priya.png'
import Jackson from '../assets/images/jackson.png'
const imageData = [
    { src: Rahul, alt: "Image description 1" },
    { src: Ishaa, alt: "Image description 2" },
    { src: Priya, alt: "Image description 3" },
    { src: Jackson, alt: "Image description 4" },
];

const ImageComponent = ({ src, alt }) => {
    return (
        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <img loading="lazy" src={src} alt={alt} className=" shrink-0 max-w-full aspect-[0.79] w-[295px] max-md:mt-10" />
        </div>
    );
};

function GalleryComponent() {
    return (
        <main className="max-w-screen-2xl containers my-20 mx-auto">
            <section className="flex containers gap-5 max-md:flex-col max-md:gap-0">
                {imageData.map(img => (
                    <ImageComponent key={img.src} src={img.src} alt={img.alt} />
                ))}
            </section>
        </main>
    );
}

export default GalleryComponent;