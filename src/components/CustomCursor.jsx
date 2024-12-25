import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-transparent border border-blue-500 rounded-full pointer-events-none z-50"
        style={{
          x: cursorPosition.x - 16,
          y: cursorPosition.y - 16,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 20 }}
      />

      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-blue-500 rounded-full pointer-events-none z-50"
        style={{
          x: cursorPosition.x - 1,
          y: cursorPosition.y - 1,
        }}
        transition={{ type: "spring" }}
      />
    </>
  );
};

export default CustomCursor;
