const AboutText = ({ title, subTitle }) => (
    <article className="flex flex-col containers w-70 max-md:ml-0 max-md:w-full mt-20">
        <header className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <h2 className="text-4xl font-semibold text-black max-md:max-w-full">{title}<span className="text-lime-300"> {subTitle}</span></h2>
            <p className="mt-6 text-xl text-neutral-950 max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus
                ante dictum in malesuada id.Lorem ipsum dolor sit amet consectetur. At consequat purus
                hendrerit proin risus Sit purus ante dictum in malesuada id.Sit purus ante dictum in
                malesuada id.Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin
                risus Sit purus ante dictum in malesuada id{" "}
            </p>
        </header>
    </article>
);
export default AboutText;