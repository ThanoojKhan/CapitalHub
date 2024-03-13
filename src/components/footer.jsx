import React from "react";
import Facebook from '../assets/images/facebook.svg'
import Twitter from '../assets/images/twitter.svg'
import Instagram from '../assets/images/instagram.svg'

const SocialMediaIcon = ({ src, alt }) => (
    <img loading="lazy" src={src} alt={alt} className="shrink-0 w-10 aspect-square" />
);

const SectionColumn = ({ title, children }) => (
    <div className="flex flex-col flex-1 pt-2 text-xl text-white">
        <div className="text-2xl font-medium tracking-normal">{title}</div>
        <div className="mt-9">{children}</div>
    </div>
);

const Footer = () => {
    const socialMediaIcons = [
        { src: Facebook, alt: "Social Media 1" },
        { src: Twitter, alt: "Social Media 2" },
        { src: Instagram, alt: "Social Media 3" },
    ];

    return (
        <footer className="flex flex-col containers items-center justify-center  px-16 py-20 mt-9 w-full bg-teal-950 sm:px-5 sm:max-w-full">
            <div className="flex gap-5 justify-between mr-7 m-10 ml-5 sm:flex-wrap sm:mr-2.5 sm:max-w-full">
                <p className="grow justify-center items-start py-1 text-lg tracking-normal text-white">
                    Lorem ipsum dolor sit amet consectetur. Magna<br/> integer enim vitae vulputate eu vitae tristique.
                </p>
                <SectionColumn title="General">
                    <p className="text-xl">About Us</p>
                </SectionColumn>
                <SectionColumn title="Policies">
                    <p className="whitespace-nowrap">Security safeguards</p>
                    <p className="mt-4">Terms of service</p>
                    <p className="mt-5">Privacy</p>
                    <p className="mt-4">Accessibility</p>
                </SectionColumn>
                <div className="flex flex-col flex-1 pt-2">
                    <div className="text-2xl font-medium tracking-normal text-white"> Get in touch </div>
                    <p className="mt-8 text-xl leading-6 text-white">
                        Follow us on social media and stay updated with the latest information about our services
                    </p>
                    <div className="flex gap-4 pr-20 mt-6 sm:pr-5">
                        {socialMediaIcons.map((icon, index) => (
                            <SocialMediaIcon key={index} src={icon.src} alt={icon.alt} />
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;