import React from "react";

const About = () => {
  return (
    <section className="bg-black-2 h-[180vh]">
      <div className="container mx-auto pt-28 pb-24 h-full">
        <div className="flex items-center justify-center">
          <div className="w-1/2 flex justify-center">
            <img src="/home/Aboutimg.webp" alt="About" />
          </div>
          <div className="w-1/2  items-start">
            <h2 className="uppercase text-white pb-4">Who We Are</h2>
            <h1 className="uppercase text-white font-bold text-4xl xl:text-6xl pb-8 w-4/5">
              We are leading digital marketing agency.
            </h1>
            <p className="text-white lg:pl-16  xl:pl-40 xl:pt-20">
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
