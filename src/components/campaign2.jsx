import React from "react";
import Campaign1 from '../assets/images/campaign1.png';
import Campaign2 from '../assets/images/campaign2.png';
import Campaign3 from '../assets/images/campaign3.png';
import Campaign4 from '../assets/images/campaign4.png';

const data = [
    {
        imgSrc: Campaign1,
        progressBarColor: "border-amber-500",
        completionPercentage: "100%",
        donorsCount: 50,
        textColor: "text-amber-500",
    },
    {
        imgSrc: Campaign2,
        progressBarColor: "border-emerald-800",
        completionPercentage: "100%",
        donorsCount: 50,
        textColor: "text-emerald-800",
    },
    {
        imgSrc: Campaign3,
        progressBarColor: "border-amber-500",
        completionPercentage: "100%",
        donorsCount: 50,
        textColor: "text-amber-500",
    },
    {
        imgSrc: Campaign4,
        progressBarColor: "border-sky-700",
        completionPercentage: "100%",
        donorsCount: 50,
        textColor: "text-sky-700",
    },
];

const Button = ({ children }) => {
    return (
        <button className="justify-center px-10 py-5 mt-14 text-base font-medium text-white whitespace-nowrap bg-neutral-800 rounded-[70px] max-md:px-5 max-md:mt-10">
            {children}
        </button>
    );
};

const CampaignCard = ({ imgSrc, progressBarColor, completionPercentage, donorsCount, textColor }) => (
    <div className="flex flex-col bg-white rounded-xl border border-solid shadow-lg border-neutral-200 w-full">
        <img src={imgSrc} alt="" className="rounded-t-xl border-b border-solid border-neutral-200 w-full" loading="lazy" />
        <div className="flex flex-col p-4">
            <h3 className={`text-base font-semibold text-center ${textColor}`}>Help us to send food</h3>
            <div className="flex gap-2 mt-1.5 justify-center">
                <div className="flex overflow-hidden relative flex-col justify-center items-center pr-16 my-auto border-4 border-solid aspect-[40] border-zinc-300">
                    <div className={`object-cover absolute inset-0 ${progressBarColor} aspect-[33.33]`} />
                </div>
                <span className={`grow text-base font-semibold text-center ${textColor}`}>{completionPercentage}</span>
            </div>
            <p className="mt-2.5 text-xs font-medium text-center text-black">Donator’s</p>
            <p className={`mt-2.5 text-base font-semibold text-center ${textColor}`}>{donorsCount}</p>
        </div>
    </div>
);

function CampaignDisplay() {
    return (
        <section className="max-w-screen-2xl my-20 mx-auto">
            <div className="text-center  mb-10">
                <h2 className="text-4xl font-semibold text-black">
                    Our Campaign
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-5 justify-items-center">
                {data.map((item, index) => (
                    <CampaignCard key={index} {...item} />
                ))}
            </div>
            <div className="text-center">
                <Button>Show More</Button>
            </div>
        </section>
    );
}

export default CampaignDisplay;
