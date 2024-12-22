import React from "react";
import TextSlideOutIn from "./animated/TextSlideOutIn";
import { LuAlignRight } from "react-icons/lu";

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

      <nav className="flex space-x-6">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="text-lg">
            <TextSlideOutIn text={link} />
          </a>
        ))}
      </nav>
      <div>
        <LuAlignRight size={24} className="" />
      </div>
    </header>
  );
};

export default Header;
