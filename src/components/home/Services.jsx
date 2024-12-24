import React from "react";
import AnimatedButton from "../animated/AnimatedButton";

const Services = () => {
  return (
    <div className="w-11/12 md:w-5/6 mx-auto">
      <div className="md:w-1/2 mx-auto relative">
        <h3 className="uppercase pt-20 pb-4">Services</h3>
        <h1 className="uppercase font-bold text-4xl xl:text-6xl">
          <div>Our marketing</div> <div>Services</div>
        </h1>
        <div className="absolute hidden md:block top-2 left-0 md:left-36 w-[1px] h-20 bg-gray-200"></div>
        <div
          className="absolute hidden md:block top-[280px] left-0 md:left-36 w-[1px] h-64
         bg-gray-200"
        ></div>

        <p className="pt-20 md:pl-40 font-medium text-lg">
          Consumers today rely heavily on digital means to research products. We
          research a brand of bldend engaging with it, according to the
          meanwhile, 51% of consumers say they use Google to research products
          before buying.
        </p>
      </div>
      <hr className="border-gray-200 mt-20 mb-20" />
      <div className="grid grid-cols-1 md:grid-cols-[30%_40%_24%] lg:grid-cols-[30%_50%_20%] gap-4">
        <h2 className="uppercase font-bold text-4xl">
          Search Engine <br />
          Optimization
        </h2>
        <div>
          <p className="font-medium text-lg pb-4">
            We help brands stand out through aweful, elegant visual design. Our
            design mainly philosophy.
          </p>
          <ul className="font-medium text-lg">
            <li>+ Logo Design</li>
            <li>+ Advertisement</li>
            <li>+ Promotion</li>
          </ul>
        </div>
        <AnimatedButton>Details</AnimatedButton>
      </div>

      <hr className="border-gray-200 mt-20 mb-20" />
      <div className="grid grid-cols-1 md:grid-cols-[30%_40%_24%] lg:grid-cols-[30%_50%_20%] gap-4">
        <h2 className="uppercase font-bold text-4xl">
          Email <br />
          Marketing
        </h2>
        <div>
          <p className="font-medium text-lg pb-4">
            We help brands stand out through aweful, elegant visual design. Our
            design mainly philosophy.
          </p>
          <ul className="font-medium text-lg">
            <li>+ Logo Design</li>
            <li>+ Advertisement</li>
            <li>+ Promotion</li>
          </ul>
        </div>
        <AnimatedButton>Details</AnimatedButton>
      </div>
      <hr className="border-gray-200 mt-20 mb-20" />
      <div className="grid grid-cols-1 md:grid-cols-[30%_40%_24%] lg:grid-cols-[30%_50%_20%] gap-4">
        <h2 className="uppercase font-bold text-4xl">
          COntent <br />
          Marketing
        </h2>
        <div>
          <p className="font-medium text-lg pb-4">
            We help brands stand out through aweful, elegant visual design. Our
            design mainly philosophy.
          </p>
          <ul className="font-medium text-lg">
            <li>+ Logo Design</li>
            <li>+ Advertisement</li>
            <li>+ Promotion</li>
          </ul>
        </div>
        <AnimatedButton>Details</AnimatedButton>
      </div>
      <hr className="border-gray-200 mt-20 mb-20" />
      <div className="grid grid-cols-1 md:grid-cols-[30%_40%_24%] lg:grid-cols-[30%_50%_20%] gap-4">
        <h2 className="uppercase font-bold text-4xl">
          Social <br />
          Marketing
        </h2>
        <div>
          <p className="font-medium text-lg pb-4">
            We help brands stand out through aweful, elegant visual design. Our
            design mainly philosophy.
          </p>
          <ul className="font-medium text-lg">
            <li>+ Logo Design</li>
            <li>+ Advertisement</li>
            <li>+ Promotion</li>
          </ul>
        </div>
        <AnimatedButton>Details</AnimatedButton>
      </div>
    </div>
  );
};

export default Services;
