import React from "react";
import Kids from "../assets/images/kids.png"

const Button = ({ children }) => (
    <button className="justify-center self-start px-10 py-5 mt-9 text-base text-white whitespace-nowrap bg-neutral-800 rounded-[70px] max-md:px-5">
        {children}
    </button>
);

const Image = ({ src, alt }) => (
    <img
        src={src}
        alt={alt}
        loading="lazy"
        className="grow w-full object-contain aspect-[1.59] max-md:mt-10 max-md:max-w-full"
    />
);

function CharityComponent() {
    return (
        <section className="max-w-screen-2xl my-20 mx-auto">
            <section className="flex gap-5 max-md:flex-col max-md:gap-0 items-center">
                <article className="flex flex-col w-[50%] max-md:w-full">
                    <h2 className="text-4xl font-semibold text-black">
                        Great futures are built with a small trust
                    </h2>
                    <p className="mt-9 text-lg text-zinc-800">
                        Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Lorem{" "}
                    </p>
                    <Button>Donate Now</Button>
                </article>
                <aside className="flex ml-5 w-[50%] max-md:ml-0 max-md:w-full">
                    <Image
                        src={Kids}
                        alt="Image description for accessibility"
                    />
                </aside>
            </section>
        </section>
    );
}

export default CharityComponent;