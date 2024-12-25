import React from "react";
import TextSlideOutIn from "./animated/TextSlideOutIn";
import { CgMenuRight } from "react-icons/cg";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Header = () => {
  const links = [
    { label: "HOME", id: "home" },
    { label: "ABOUT", id: "about" },
    { label: "PAGES", id: "pages" },
    { label: "SERVICES", id: "services" },
    { label: "TEAM", id: "team" },
    { label: "BLOG", id: "blog" },
    { label: "CONTACT", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 flex justify-between items-center px-6 py-4 z-50 bg-white">
      {/* Logo */}
      <div>
        <img src="/logo_b.webp" alt="Logo" className="h-10" />
      </div>

      <nav className="hidden lg:flex space-x-16">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className="text-lg cursor-pointer bg-transparent border-none"
          >
            <TextSlideOutIn text={link.label} />
          </button>
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
