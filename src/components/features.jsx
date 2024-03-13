import React from 'react';
import Volunteer from '../assets/images/volunteer.png';
import FundRaise from '../assets/images/fundraise.png';
import Donate from '../assets/images/donate.png';

const data = [
    {
        id: 1,
        image: Volunteer,
        title: "Become Volunteer",
        description: "Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Lorem"
    },
    {
        id: 2,
        image: FundRaise,
        title: "Quick Fundraise",
        description: "Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Lorem"
    },
    {
        id: 3,
        image: Donate,
        title: "Start Donating",
        description: "Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Lorem"
    }
];


const Button = ({ children }) => {
    return (
        <button className="justify-center px-10 py-5 mt-14 text-base font-medium text-white whitespace-nowrap bg-neutral-800 rounded-[70px] max-md:px-5 max-md:mt-10">
            {children}
        </button>
    );
};

const FeatureCard = ({ image, title, description }) => (
    <article className="flex flex-col items-center px-11 py-9 bg-white rounded-xl border border-solid shadow-lg border-neutral-200 max-md:px-5 mb-5 max-md:mb-0">
        <img loading="lazy" src={image} className="max-w-full aspect-[0.98] w-[121px]" alt={title} />
        <h3 className="mt-3 text-xl font-semibold text-black">{title}</h3>
        <p className="mt-5 text-xs font-medium text-zinc-800">{description}</p>
    </article>
);

const Features = () => {
    return (
        <section className="max-w-screen-2xl my-20 mx-auto">
            <div className="text-center">
                <h2 className="text-4xl font-semibold text-black">
                    We Believe that We can Save More Lives with You
                </h2>
            </div>
            <div className="flex overflow-x-auto gap-20 mt-20">
                {data.map(feature => (
                    <FeatureCard key={feature.id} image={feature.image} title={feature.title} description={feature.description} />
                ))}
            </div>
            <div className="text-center">
                <Button>Donate Now</Button>
            </div>
        </section>

    );
};

export default Features;