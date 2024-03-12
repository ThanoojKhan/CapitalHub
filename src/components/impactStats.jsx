import React from "react";

function StatCard({ header, info, nextline }) {
    return (
        <div className="flex gap-4 py-5">
            <div className="grow text-5xl font-semibold text-lime-200 max-md:text-4xl">
                {header}
            </div>
            <div className="font-medium text-white">{info}<br />{nextline}</div>
        </div>
    );
}

function ImpactStats() {
    const statData = [
        { header: "10k+", info: "Children are back ", nextline: "to school" },
        { header: "2M+", info: "Total money", nextline: "donated" },
        { header: "100+", info: "Hospitals has", nextline: "been built" },
    ];

    return (
        <section className="flex justify-center items-center self-stretch px-16 py-10 w-full bg-black max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between w-full px-16 max-w-screen-2xl mx-auto">
                {statData.map((data, index) => (
                    <StatCard
                        key={index}
                        header={data.header}
                        info={data.info}
                        nextline={data.nextline}
                    />
                ))}
            </div>
        </section>
    );
}

export default ImpactStats;