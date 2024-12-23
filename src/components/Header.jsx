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
    <header className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white">
      {/* Logo */}
      <div>
        <img src="/logo_b.webp" alt="Logo" className="h-10" />
      </div>

      <nav className="flex space-x-12">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="text-lg">
            <TextSlideOutIn text={link} />
          </a>
        ))}
      </nav>
      <div className="flex items-center space-x-8">
        <FaMagnifyingGlass size={20} />
        <hr className="h-5 w-px bg-white border-none" />
        <CgMenuRight size={20} />
      </div>
    </header>
  );
};

export default Header;
