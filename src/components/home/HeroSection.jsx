import React from "react";
import StaggeredText from "../animated/StaggeredText";

const HeroSection = () => {
  return (
    <div className="w-screen relative overflow-hidden">
      {/* <div
        className="absolute bottom-0 right-0 h-[95%] w-[80%] opacity-100 bg-no-repeat hidden md:blockk"
        style={{
          backgroundImage: "url('/hero1.jpg')",
          backgroundSize: "contain",
        }}
      />
      <div
        className="absolute bottom-0 left-[-60%] h-[70%] w-[70%] opacity-30 bg-no-repeat hidden md:block"
        style={{
          backgroundImage: "url('/home/herobg1.png')",
          transform: "scaleX(-1)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 h-[95%] w-[10%] opacity-100 bg-no-repeat hidden md:block"
        style={{
          backgroundImage: "url('/home/sparcle.png')",
        }}
      /> */}
      <div className=" pt-16 min-h-screen md:w-[88vw] mx-auto overflow-hidden bg-white">
        <div className="flex gap-x-5 items-center">
          <h3 className="uppercase text-xl font-bold">Digital</h3>
          <div className="h-[1px] w-24 bg-black" />
        </div>
        <div className="overflow-hidden">
          <StaggeredText
            text="MARK"
            delay={0}
            className="font-bold text-[230px] md:translate-y-[-20%] "
          />
          <StaggeredText
            text="ETING"
            delay={0.6}
            className="font-bold text-[230px] md:translate-y-[-60%] md:translate-x-[45%]"
          />
          <StaggeredText
            text="Static and dynamic secure code review can prevent a day before your product is even released. We can integrate with your dev environment"
            delay={1.2}
            className="text-slate-800 w-[25%] md:translate-y-[-350%] md:translate-x-[5%]"
            asWords={true}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
