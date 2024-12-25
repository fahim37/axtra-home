import React from "react";
import FadeB from "../animated/FadeB";

const Brands = () => {
  return (
    <div className="text-center">
      <FadeB>
        <div className="text-center font-medium text-xl mb-16 mt-16">
          <p>We worked with global largest brands</p>
        </div>
      </FadeB>
      <FadeB className="grid grid-cols-2 gap-20 max-w-sm mx-auto md:max-w-6xl md:grid-cols-6 pb-28">
        <img src="/brand-logo/1.png" alt="Brand 1" className="h-20 w-26" />
        <img src="/brand-logo/2.png" alt="Brand 2" className="h-20 w-26" />
        <img src="/brand-logo/3.png" alt="Brand 3" className="h-20 w-26" />
        <img src="/brand-logo/4.png" alt="Brand 4" className="h-20 w-26" />
        <img src="/brand-logo/5.png" alt="Brand 5" className="h-20 w-26" />
        <img src="/brand-logo/6.png" alt="Brand 6" className="h-20 w-26" />
      </FadeB>
    </div>
  );
};

export default Brands;
