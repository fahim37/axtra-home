import React, { useState } from "react";
import { motion } from "framer-motion";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import TextSlideOutIn from "./animated/TextSlideOutIn";

const menuItems = [
  { name: "HOME", id: "home" },
  { name: "ABOUT", id: "about" },
  { name: "SERVICE", id: "service" },
  { name: "PAGES", id: "pages" },
  { name: "BLOG", id: "blog" },
  { name: "CONTACT", id: "contact" },
];

const socialLinks = [
  { name: "Dribbble", href: "#" },
  { name: "Behance", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "YouTube", href: "#" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 flex justify-between items-center px-6 py-4 z-50 bg-white">
        <div>
          <img
            src="/logo_b.webp"
            alt="Logo"
            className="h-10 cursor-pointer"
            onClick={() => scrollToSection("home")}
          />
        </div>

        <nav className="hidden lg:flex space-x-16">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-lg cursor-pointer bg-transparent border-none hover:text-gray-500"
            >
              <TextSlideOutIn text={item.name} />
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-8">
          <FaMagnifyingGlass size={20} className="cursor-pointer" />
          <hr className="h-5 w-px bg-black border-none" />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="">
            {isMenuOpen ? <CgClose size={20} /> : <CgMenuRight size={20} />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black text-white z-50 flex flex-col lg:flex-row">
          <div className="hidden lg:flex flex-col w-64 p-8 border-r border-white/10">
            <h2 className="text-2xl font-bold mb-8">Axtra</h2>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <nav className="space-y-4 flex flex-col">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex-1 p-8 relative">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="hidden lg:block absolute top-4 right-4 text-white"
            >
              <CgClose size={30} />
            </button>
            <nav className="space-y-6">
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ x: 20 }}
                  className="group"
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-5xl font-bold hover:text-gray-300 flex items-center justify-between"
                  >
                    <TextSlideOutIn text={item.name} />
                  </button>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Right Panel */}
          <div className="w-96 bg-neutral-900 p-8 hidden lg:block">
            <div className="relative">
              <input
                type="search"
                placeholder="Search keyword"
                className="w-full bg-transparent border-b border-white/20 text-white placeholder-gray-400 focus:outline-none"
              />
              <FaMagnifyingGlass className="absolute right-2 top-1/2 transform -translate-y-1/2" />
            </div>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold">Get in touch</h3>
                <p className="text-gray-400">+(02) - 094 980 547</p>
                <p className="text-gray-400">info@extradesign.com</p>
              </div>
              <p className="text-gray-400">
                230 Norman Street New York,
                <br />
                QC (USA) H8R 1A1
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="lg:hidden absolute top-4 right-4 text-white"
          >
            <CgClose size={30} />
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
