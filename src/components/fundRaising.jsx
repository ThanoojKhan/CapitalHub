import React from 'react';
import happinessImage from '../assets/images/happiness.png';
import loveImage from '../assets/images/love.png';
import socialImage from '../assets/images/social.png';

const FeatureCard = ({ imgSrc, title, description, alt }) => (
    <div className="flex flex-col items-center px-2 py-1 text-center text-black">
        <div className="flex justify-center items-center self-center px-4 bg-white rounded-full h-[125px] w-[125px]">
            <img loading="lazy" src={imgSrc} className="w-full aspect-square" alt={alt} />
        </div>
        <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
        <p className="mt-4 text-xs font-medium">{description}</p>
    </div>
);

const features = [
    {
        imgSrc: happinessImage,
        title: "Give Happiness",
        description: "Sharing happiness with others can be very fulfilling and create lasting bonds.",
        alt: "Illustration of giving happiness",
    },
    {
        imgSrc: loveImage,
        title: "Share Love",
        description: "When you share love with those around you, you create a ripple effect of kindness.",
        alt: "Illustration of sharing love",
    },
    {
        imgSrc: socialImage,
        title: "Build Socially",
        description: "Building socially requires not just connecting with others, but also actively contributing.",
        alt: "Illustration of building socially",
    },
];

function FundraisingSection() {
    return (
        <section className="flex justify-center items-center py-20 my-8 bg-lime-300 rounded-3xl">
            <div className="flex flex-col mb-1 max-w-screen-2xl mx-auto">
                <h2 className="self-center text-4xl font-semibold text-center text-black w-full max-md:max-w-full">Fundraising on Buddha Trust takes just<br /> a few minutes</h2>
                <div className="mt-16">
                    <div className="flex mx-20 gap-10 ">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} imgSrc={feature.imgSrc} title={feature.title} description={feature.description} alt={feature.alt} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FundraisingSection;
