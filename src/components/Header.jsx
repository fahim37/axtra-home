import React from "react";
import TextSlideOutIn from "./animated/TextSlideOutIn";
import { CgMenuRight } from "react-icons/cg";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Header = () => {
  const links = [
    "HOME",
    "ABOUT",
    "PAGES",
    "SERVICES",
    "TEAM",
    "BLOG",
    "CONTACT",
  ];

  return (
    <header className="sticky top-0 flex justify-between items-center px-6 py-4 z-10 bg-white">
      {/* Logo */}
      <div>
        <img src="/logo_b.webp" alt="Logo" className="h-10" />
      </div>

      <nav className="hidden lg:flex space-x-16">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="text-lg">
            <TextSlideOutIn text={link} />
          </a>
        ))}
      </nav>
      <div className="flex items-center space-x-8">
        <FaMagnifyingGlass size={20} className="cursor-pointer" />
        <hr className="h-5 w-px bg-black border-none" />
        <CgMenuRight size={20} className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
