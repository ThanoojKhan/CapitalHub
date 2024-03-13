import React from 'react';
import Call from '../assets/images/call.svg';
import Location from '../assets/images/location.svg';
import Email from '../assets/images/email.svg';

function HomePage() {

    const ContactFormInput = ({ label, type = "text", id }) => (
        <div className="justify-center items-start py-7 pr-16 pl-6 mt-7 mr-5 ml-4 rounded bg-neutral-100 max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
            <label htmlFor={id} className="sr-only">{label}</label>
            <input type={type} id={id} placeholder={label} aria-label={label} className="w-full" />
        </div>
    );

    return (
        <main className="flex flex-col justify-center items-center">
            <h1 className="mt-11 text-3xl font-semibold text-black whitespace-nowrap max-md:mt-10">
                Contact<span className="text-lime-300"> Us</span>
            </h1>
            <h2 className="mt-16 text-4xl font-semibold text-center text-black max-md:mt-10 max-md:max-w-full">
                What can we help you with?
            </h2>
            <section className="flex gap-5 self-center pl-14 mt-12 max-w-full text-center border border-gray-200 bg-zinc-50 rounded-[50px] w-[903px] max-md:flex-wrap max-md:pl-5 max-md:mt-10">
                <div className="flex-auto my-auto text-xl text-neutral-600">Search for your query</div>
                <div className="px-16 py-10 text-2xl text-black whitespace-nowrap bg-lime-300 rounded-[50px] max-md:px-5">
                    Search
                </div>
            </section>
            <div className="flex justify-center items-center px-16 mt-40 w-full relative max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="z-10 w-full max-w-[1227px] max-md:mb-2.5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <aside className="flex flex-col w-[38%] z-50 max-md:w-full">
                            <div className="py-1 pr-12 my-auto text-xl font-medium text-lime-300 max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-4 items-center">
                                    <img loading="lazy" src={Call} alt="Phone Icon" className="aspect-square w-[22px] fill-lime-300" />
                                    <div>Call Us</div>
                                </div>
                                <div className="mt-5 text-white">+91 9234567899</div>
                                <div className="flex gap-4 mt-12">
                                    <img loading="lazy" src={Location} alt="Location Icon" className="aspect-[0.79] w-[22px]" />
                                    <div>Location</div>
                                </div>
                                <div className="mt-4 text-white">
                                    Workingdom, Plot No 17, Sector-7, Palam Extension, Dwarka, New Delhi-110075, India
                                </div>
                                <div className="flex gap-4 mt-14">
                                    <img loading="lazy" src={Email} alt="Email Icon" className="aspect-square w-[22px]" />
                                    <div>Email</div>
                                </div>
                                <div className="mt-4 text-white">Buddha@gmail.com</div>
                            </div>
                        </aside>
                        <form className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow px-20 pt-16 pb-105 w-full z-50 text-lg whitespace-nowrap bg-white rounded-xl border border-solid shadow-2xl border-neutral-200 text-zinc-600 max-md:px-5 max-md:mt-10 max-md:max-w-full relative">
                                <ContactFormInput label="Your Name" id="name" />
                                <ContactFormInput label="Your Email" type="email" id="email" />
                                <ContactFormInput label="Your Phone Number" type="tel" id="phone" />
                                <div className="items-start pt-7 pr-16 pb-28 pl-6 mt-7 mr-5 ml-4 rounded bg-neutral-100 max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
                                    <label htmlFor="message" className="sr-only">Your Message</label>
                                    <textarea id="message" placeholder="Your Message" aria-label="Your Message" className="w-full h-full"></textarea>
                                </div>
                                <button className="justify-center self-center px-16 py-3.5 mt-8 text-base my-10 font-semibold text-white bg-black rounded-[33.079px] max-md:px-6" type="submit">Submit</button>
                            </div>
                            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-3/4 bg-black bg-opacity-80 z-0 max-md:hidden" />
                        </form>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default HomePage;
