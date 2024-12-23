import React from "react";

const Brands = () => {
  return (
    <div className="text-center">
      <div className="text-center text-xl mb-16 mt-16">
        <p>We worked with global largest brands</p>
      </div>
      <div className="grid grid-cols-2 gap-20 max-w-sm mx-auto md:max-w-6xl md:grid-cols-6">
        <img
          src="/brand-logo/1.png"
          alt="Brand 1"
          className="w-full h-20 w-28"
        />
        <img
          src="/brand-logo/2.png"
          alt="Brand 2"
          className="w-full h-20 w-28"
        />
        <img
          src="/brand-logo/3.png"
          alt="Brand 3"
          className="w-full h-20 w-28"
        />
        <img
          src="/brand-logo/4.png"
          alt="Brand 4"
          className="w-full h-20 w-28"
        />
        <img
          src="/brand-logo/5.png"
          alt="Brand 5"
          className="w-full h-20 w-28"
        />
        <img
          src="/brand-logo/6.png"
          alt="Brand 6"
          className="w-full h-20 w-28"
        />
      </div>
    </div>
  );
};

export default Brands;
