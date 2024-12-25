import React, { useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function CountUp({ value, className }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start({ count: value });
    }
  }, [isInView, value, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ count: 0 }}
      animate={controls}
      onAnimationUpdate={(latest) => {
        setDisplayValue(Math.round(latest.count));
      }}
    >
      {displayValue}
    </motion.div>
  );
}
