import React from "react";

const About = () => {
  return (
    <section className="bg-black-2 h-auto md:h-[1100px]">
      <div className="container pt-28 pb-24 h-full ">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 flex justify-center pb-10">
            <img src="/home/Aboutimg.webp" alt="About" />
          </div>
          <div className="w-full md:w-1/2 items-start transform-none md:-translate-y-24 relative">
            <div className="absolute top-2 left-0 md:left-36 w-[1px] h-32 bg-gray-700 md:-translate-y-[175px]"></div>
            <div className="absolute top-[260px] left-0 md:left-36 w-[1px] h-[670px] bg-gray-700"></div>
            <h2 className="uppercase text-white pb-4">Who We Are</h2>
            <h1 className="uppercase text-white font-bold text-4xl xl:text-6xl pb-8 w-4/5">
              We are leading digital marketing agency.
            </h1>
            <p className="text-gray-400 md:w-4/5 text-lg lg:pl-16  xl:pl-40 xl:pt-20">
              We’re a team of strategic digital marketing working globally with
              largest brands. We believe that progress only happens when you
              refuse to play things safe. We combine ideas and behaviors, and
              insights with design, technological data to produce brand
              experiences that customers love our services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
