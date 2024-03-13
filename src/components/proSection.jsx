import React from "react";
import AboutText from "./organs/aboutText";
import Vision from '../assets/images/vision.png'

function ImageWithCaption({ src, alt }) {
    return (
        <figure>
            <img src={src} alt={alt} className="w-full h-auto max-w-full max-h-[300px]" />
        </figure>
    );
}


function SectionHeader({ children }) {
    return (
        <h2 className="text-4xl font-semibold text-lime-300 max-md:max-w-full">
            {children}
        </h2>
    );
}

function TextContent({ children }) {
    return (
        <p className="mt-8 text-xl text-neutral-950 max-md:max-w-full">
            {children}
        </p>
    );
}

function PictureSection() {
    return (
        <section className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
            <ImageWithCaption src={Vision} alt="Descriptive text about the image" />
        </section>
    );
}

function OurVisionSection() {
    return (
        <section className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
            <SectionHeader><span className="text-black">Our</span> <span className="text-lime-300">Vision</span></SectionHeader>
            <TextContent>
                Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Sit purus ante dictum in malesuada id.Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id{" "}
            </TextContent>
        </section>
    );
}

function ProfessionalSection() {
    return (
        <section className="max-w-screen-2xl containers my-20 mx-auto">
            <div className="flex gap-5 containers max-md:flex-col max-md:gap-0">
                <PictureSection />
                <OurVisionSection />

            </div>
            <AboutText title="Who" subTitle="We Are" />
            <AboutText title="Our" subTitle="Team" />
        </section>
    );
}

export default ProfessionalSection;
