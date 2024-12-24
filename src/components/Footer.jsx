import React from "react";
import TextSlideOutIn from "./animated/TextSlideOutIn";

const Footer = () => {
  const links = ["ABOUT US", "CONTACT", "CAREER", "FAQ"];
  return (
    <footer className="bg-black md:h-[60vh]">
      <div className="md:w-[90%] mx-auto border-b-[1px] border-slate-800">
        <div className="grid grid-cols-[35%,20%,auto] gap-5">
          <div>
            <img
              src="/logo_b.webp"
              alt="logo"
              className="invert pb-10 mt-[90px]"
            />
            <p className="text-white w-[70%]">
              When do they work well, and when do they on us and finally, when
              do we actually need how can we avoid them.
            </p>
          </div>
          <div>
            <a
              href="#"
              className="uppercase text-white border border-slate-800 h-[80px] flex items-center justify-center hover:bg-white hover:text-black"
            >
              Facebook
            </a>
            <a
              href="#"
              className="uppercase text-white border border-slate-800 h-[80px] flex items-center justify-center hover:bg-white hover:text-black"
            >
              Twitter
            </a>
            <a
              href="#"
              className="uppercase text-white border border-slate-800 h-[80px] flex items-center justify-center hover:bg-white hover:text-black"
            >
              Linkedin
            </a>
            <a
              href="#"
              className="uppercase text-white border border-slate-800 h-[80px] flex items-center justify-center hover:bg-white hover:text-black"
            >
              Instagram
            </a>
          </div>
          <div className="text-white">dsaad</div>
        </div>
      </div>
      <div className="flex justify-between w-[95%] mx-auto pt-5">
        <p className="text-white">© by Fahim Ahmed Emon.</p>
        <div className="flex space-x-5">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-lg text-white"
            >
              <TextSlideOutIn text={link} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
