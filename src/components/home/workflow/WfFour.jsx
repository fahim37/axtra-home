import AnimatedButton from "@/components/animated/AnimatedButton";
import React from "react";

const WfFour = () => {
  return (
    <div className="text-center bg-[#e0e3cc] w-screen h-screen">
      <div className="md:pt-[13%] text-3xl mb-10 font-medium">
        Have you project in mind?
      </div>
      <div className="text-8xl font-medium">Let’s make something</div>
      <div className="text-8xl font-medium pb-10">great together!</div>
      <AnimatedButton>Details</AnimatedButton>
    </div>
  );
};

export default WfFour;
