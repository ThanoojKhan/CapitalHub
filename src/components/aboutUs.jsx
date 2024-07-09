import React from "react";
import Buddha from '../assets/images/buddha.png';
import AboutText from "./organs/aboutText";

const AboutImage = () => (
    <aside className="flex flex-col w-30 ml-5 max-md:ml-0 max-md:w-full">
        <img
            alt="Descriptive image about the section theme"
            loading="lazy"
            src={Buddha}
            className="grow shrink-0 w-screen object-contain max-md:mt-10"
        />
    </aside>
);


const AboutSection = () => {
    return (
        <section className="max-w-screen-2xl containers my-20 mx-auto">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <AboutText title="About " subTitle="Us" />
                <AboutImage />
            </div>
            <AboutText title="Our" subTitle="Story" />
        </section>
    );
};

export default AboutSection;
