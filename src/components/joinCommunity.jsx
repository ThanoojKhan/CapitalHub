import React from "react";
import RightImage from '../components/organs/rightImage'
import LeftImage from '../components/organs/leftImage'


const JoinCommunitySection = () => {

    return (
        <section className="max-w-screen-2xl mx-auto">
            <div className="text-center my-20">
                <h2 className="text-4xl font-semibold text-black">
                    Join our community for donating and be a part of a <br /> positive change in the world.
                </h2>
            </div>
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <aside className="w-[27%] max-md:w-full">
                    <div className="flex flex-col">
                        <LeftImage />
                    </div>
                </aside>
                <article className=" w-[57%] max-md:w-full mt-20 mb-24 max-md:mt-10 max-md:max-w-full">
                    <div className="items-center flex flex-col ">
                        <h2 className="self-stretch text-9xl italic my-10 text-center max-md:text-4xl">130,987 +</h2>
                        <p className="mt-12 text-4xl text-center whitespace-nowrap max-md:mt-10">People already joined</p>
                        <button className="px-12 py-5 mt-9 text-base font-medium text-white whitespace-nowrap bg-neutral-800 rounded-[70px] max-md:px-5">
                            Yes, I want to join the community
                        </button>
                    </div>
                </article>

                <aside className="w-[16%] max-md:w-full">
                    <div className="flex flex-col ">
                        <RightImage />
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default JoinCommunitySection;
