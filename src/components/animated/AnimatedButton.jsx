import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function AnimatedButton({ children, variant = "black" }) {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const backgroundColor = variant === "black" ? "bg-black" : "bg-white";
  const textColor = variant === "black" ? "text-black" : "text-white";
  const hoverTextColor = variant === "black" ? "#ffffff" : "#000000";
  const borderColor = variant === "black" ? "border-black" : "border-white";

  return (
    <motion.button
      ref={buttonRef}
      className={`relative px-6 py-3 text-lg font-semibold ${textColor} border-2 ${borderColor} rounded-full aspect-square w-[180px] overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      animate={{
        x: isHovered ? mousePosition.x / 20 : 0,
        y: isHovered ? mousePosition.y / 20 : 0,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`absolute inset-0 ${backgroundColor}`}
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="relative z-10"
        initial={{ color: variant === "black" ? "#000000" : "#ffffff" }}
        animate={{
          color: isHovered
            ? hoverTextColor
            : variant === "black"
            ? "#000000"
            : "#ffffff",
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
}
