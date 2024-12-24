import React from "react";

const Blogs = () => {
  return (
    <div className="w-11/12 md:w-5/6 mx-auto">
      <div className="md:w-1/2 mx-auto relative">
        <h3 className="uppercase pt-20 pb-4">Recent Blog</h3>
        <h1 className="uppercase font-bold text-4xl xl:text-6xl">
          <div>Read Updated</div> <div>Journal</div>
        </h1>
        <div className="absolute hidden md:block top-2 left-0 md:left-36 w-[1px] h-20 bg-gray-200"></div>
        <div
          className="absolute hidden md:block top-[280px] left-0 md:left-36 w-[1px] h-64
         bg-gray-200"
        ></div>

        <p className="pt-20 md:pl-40 font-medium text-lg">
          Read our blog and try to see everything from every perspective. Our
          passion lies in making everything accessible and aesthetic for
          everyone.
        </p>
      </div>
      <div className="grid grid-cols-2 md:mt-[15%] gap-5">
        <div className="grid grid-cols-2">
          <div>
            <img src="/blogs/1.jpg" />
          </div>
          <div className="bg-white w-[130%] mt-[60%] ml-[-20%] p-10">
            <p>UI Design . 02 May 2019</p>
            <p className="font-medium text-2xl pt-4">
              How to bring fold to your startup company with Axtra
            </p>
            <div className="h-[1px] w-full bg-black mt-16 mb-4" />
            <a href="http://">Read More ↗</a>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <img src="/blogs/2.jpg" />
          </div>
          <div className="bg-white w-[130%] mt-[60%] ml-[-20%] p-10">
            <p>UI Design . 02 May 2019</p>
            <p className="font-medium text-2xl pt-4">
              How to manage a talented and successful design team
            </p>
            <div className="h-[1px] w-full bg-black mt-16 mb-4" />
            <a href="http://">Read More ↗</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
