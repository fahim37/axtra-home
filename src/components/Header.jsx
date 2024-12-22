import React from "react";

const Header = () => {
  const navLinks = ["Home", "About", "Pages"];

  const charVariants = {
    initial: { y: 0, opacity: 1 },
    hoverOut: { y: -20, opacity: 0 },
    hoverIn: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  const splitText = (text) =>
    text.split("").map((char, index) => (
      <motion.span
        key={index}
        className="inline-block"
        initial="visible"
        whileHover={["hoverOut", "hoverIn"]}
        variants={charVariants}
        transition={{ duration: 0.3, delay: index * 0.05 }}
      >
        {char}
      </motion.span>
    ));

  return (
    <nav>
      <div className="">
        <img src="/logo_b.webp" alt="" />
      </div>
    </nav>
  );
};

export default Header;
