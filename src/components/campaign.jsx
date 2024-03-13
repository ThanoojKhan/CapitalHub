import React from "react";
import Image1 from '../assets/images/image1.png';
import Image2 from '../assets/images/image2.png';
import Image3 from '../assets/images/image3.png';
import Image4 from '../assets/images/image4.png';
import Image5 from '../assets/images/image5.png';
import Image6 from '../assets/images/image6.png';
import Image7 from '../assets/images/image7.png';
import Image8 from '../assets/images/image8.png';

const ImageGroup = ({ images, altTexts }) => (
    <div className="flex gap-10 my-5 justify-between w-[190px]">
        {images.map((src, index) => (
            <img
                key={index}
                loading="lazy"
                src={src}
                alt={altTexts[index]}
                className={`flex h-fit rounded-full aspect-square ${index === 1 ? 'w-3/5 h-[50px] mt-10 ' : 'w-full'}`}
            />
        ))}
    </div>
);
const ImageGroup2 = ({ images, altTexts }) => (
    <div className="flex gap-10 my-5 mx-10 justify-between w-[190px]">
        {images.map((src, index) => (
            <img
                key={index}
                loading="lazy"
                src={src}
                alt={altTexts[index]}
                className={`flex h-fit rounded-full aspect-square ${index === 0 ? 'w-3/5 h-[50px]' : 'w-full'}`}
            />
        ))}
    </div>
);

const ImpactCard = ({ images, altTexts, impactStatement, impactStatement1 }) => (
    <div className="flex flex-col grow items-center p-10 mx-auto w-full bg-white rounded-xl border border-solid shadow-lg border-neutral-200 max-md:px-5 max-md:mt-8">
        <ImageGroup images={images.slice(0, 2)} altTexts={altTexts.slice(0, 2)} />
        <ImageGroup2 images={images.slice(2)} altTexts={altTexts.slice(2)} />
        <p className="self-stretch mt-5 text-base font-semibold text-center text-black">{impactStatement}<br />{impactStatement1}</p>
    </div>
);

const Dashboard = () => {
    const impactData = [{
        images: [Image1, Image2, Image3, Image4],
        altTexts: ["Hunger 1", "Hunger 2", "Hunger 3", "Hunger 4"],
        impactStatement: "828 Million people in the world",
        impactStatement1: "are still hungry"
    }, {
        images: [Image5, Image6, Image7, Image8],
        altTexts: ["Homeless 1", "Homeless 2", "Homeless 3", "Homeless 4"],
        impactStatement: "150 Million people in the",
        impactStatement1: "world are still Homeless"
    }];

    return (
        <section className="max-w-screen-2xl my-20 mx-auto">
            <div className="flex gap-10 justify-center items-center">
                <div className="flex flex-row justify-center items-center">
                    {impactData.map((data, index) => (
                        <div key={index} className="flex mx-10 transition-transform duration-300 ease-in-out transform hover:scale-125">
                            <ImpactCard {...data} />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-center items-center">
                    <article className="flex flex-col items-start self-stretch px-5 my-auto text-4xl font-semibold text-black max-md:mt-10 max-md:max-w-full">
                        <h2 className="text-center whitespace-nowrap">No More Homeless</h2>
                        <h3 className="text-center">No More Hunger</h3>
                        <p className="self-stretch mt-3 text-lg font-medium text-zinc-800 max-md:max-w-full">Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Lorem </p>
                        <button className="px-10 py-5 mt-5 text-base font-medium text-white whitespace-nowrap bg-neutral-800 rounded-[70px] max-md:px-5" tabIndex="0">Donate Now</button>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;