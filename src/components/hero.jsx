import Buddha from '../assets/images/buddha.png';
import People from '../assets/images/people.png';

const ImageWithCaption = ({ imageUrl, caption = '', width = '179px', aspectRatio = '4' }) => (
    <div className={`w-${width} justify-end flex aspect-${aspectRatio}`}>
        <img loading="lazy" src={imageUrl} alt={caption} className="max-w-full" />
        {caption && <div className="text-xs mt-2 text-center">{caption}</div>}
    </div>
);

const HeroSection = () => (
    <div className="bg-gradient-to-b from-gray-100 to-transparent">
        <section className="max-w-screen-2xl mx-auto">
            <div className="pt-16 flex gap-10 justify-center">
                <article className="w-full px-5">
                    <header>
                        <h1 className="font-semibold text-6xl text-textprimary">
                            Make someone's Life <br /> by giving of yours
                        </h1>
                        <p className="mt-16 text-lg font-medium text-textsecondary">
                            Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id. Lorem
                        </p>
                        <button className="px-10 py-5 mt-10 text-white font-medium bg-neutral-800 rounded-[70px]">
                            Donate Now
                        </button>
                        <div className="flex gap-2.5 mt-9">
                            <ImageWithCaption imageUrl={People} />
                            <div className="px-9 py-3 rounded text-white bg-neutral-800">
                                2.5k Helped
                            </div>
                        </div>
                    </header>
                </article>
                <aside className="w-full flex">
                    <ImageWithCaption imageUrl={Buddha} aspectRatio="1.02" width="full" />
                </aside>
            </div>
        </section>
    </div>
);

export default HeroSection;
