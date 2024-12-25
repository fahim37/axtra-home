import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const TextSlideOutIn = ({ text, y1 = -25, y2 = 30 }) => {
  return (
    <motion.div
      className="relative overflow-hidden"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      {text.split("").map((char, index) => (
        <div key={index} className="relative inline-block">
          <AnimatePresence>
            <motion.span
              key={`top-${index}`}
              initial={{ y: 0 }}
              variants={{
                rest: { y: 0 },
                hover: { y: y1 },
              }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="inline-block"
            >
              {char}
            </motion.span>
          </AnimatePresence>

          <AnimatePresence>
            <motion.span
              key={`bottom-${index}`}
              initial={{ y: 20 }}
              variants={{
                rest: { y: y2 },
                hover: { y: 0 },
              }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="absolute left-0 inline-block"
            >
              {char}
            </motion.span>
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  );
};

export default TextSlideOutIn;
