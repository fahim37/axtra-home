import { Button } from "@/components/ui/button";
import React from "react";

const WfTwo = () => {
  return (
    <div className="relative w-screen md:h-screen bg-[#f3ecec]">
      <div
        className="absolute hidden md:block bottom-0 left-4 h-[100px] w-[100px] bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: "url('/home/wf2.png')" }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 md:pt-[120px] max-w-[85%] mx-auto gap-4">
        <div>
          <h4 className="uppercase font-bold hidden md:block">
            why
            <br />
            choose us
          </h4>
          <h1 className="uppercase pt-10 pb-10 text-4xl lg:text-6xl font-bold">
            Keword,Research Strategy, Survey, & Analytics
          </h1>
          <p className="pl-20 md:w-[75%] font-medium pb-10">
            Attention, we take out our round glasses and our sweater with elbow
            patches to go back to the origins of the user experience: the first
            mention of the user and its importance was born in the
          </p>
          <div className="md:pt-20 md:pl-20 space-x-2">
            <Button
              variant="outline"
              className="rounded-3xl h-8 hover:bg-black hover:text-white uppercase bg-transparent border border-black"
            >
              google
            </Button>
            <Button
              variant="outline"
              className="rounded-3xl h-8 hover:bg-black hover:text-white uppercase bg-transparent border border-black"
            >
              pinterest
            </Button>
            <Button
              variant="outline"
              className="rounded-3xl h-8 hover:bg-black hover:text-white uppercase bg-transparent border border-black"
            >
              instagram
            </Button>
          </div>
        </div>
        <div>
          <div className="flex gap-8 md:translate-x-[15%]">
            <div className="border-2 border-black rounded-full flex items-center justify-center aspect-square w-[240px] text-4xl md:text-5xl font-medium">
              60%
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="uppercase text-2xl font-bold pb-5 ">Strategy</h2>
              <p className="md:w-[75%] font-medium">
                Your marketing strategy optimizing performances doesn’t have to
                be a guessing game.
              </p>
            </div>
          </div>
          <div className="flex gap-8 pt-10 pb-10">
            <div className="border-2 border-black rounded-full flex items-center justify-center aspect-square w-[240px] text-4xl md:text-5xl font-medium">
              95%
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="uppercase text-2xl font-bold pb-5 ">Audience</h2>
              <p className="md:w-[75%] font-medium">
                Your marketing strategy optimizing performances doesn’t have to
                be a guessing game.
              </p>
            </div>
          </div>
          <div className="flex gap-8 md:translate-x-[15%]">
            <div className="border-2 border-black rounded-full flex items-center justify-center aspect-square w-[240px] text-4xl md:text-5xl font-medium">
              70%
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="uppercase text-2xl font-bold pb-5 ">Keyword</h2>
              <p className="md:w-[75%] font-medium">
                Your marketing strategy optimizing performances doesn’t have to
                be a guessing game.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WfTwo;
