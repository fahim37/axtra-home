import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import WfOne from "./workflow/WfOne";
import WfTwo from "./workflow/WfTwo";
import Wfthree from "./workflow/Wfthree";
import WfFour from "./workflow/WfFour";

const Workflow = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isSmallScreen ? ["0%", "0%"] : ["0%", "-304%"]
  );

  return (
    <div className={isSmallScreen ? "h-auto" : "h-[500vh]"} ref={targetRef}>
      <div
        className={`h-[100vh] sticky top-0 ${
          isSmallScreen ? "overflow-auto" : "overflow-hidden"
        }`}
      >
        <motion.div
          className={`grid ${
            isSmallScreen ? "grid-cols-1" : "grid-flow-col auto-cols-[100vw]"
          }`}
          style={{ x }}
        >
          <div>
            <WfOne />
          </div>
          <div>
            <WfTwo />
          </div>
          <div>
            <Wfthree />
          </div>
          <div>
            <WfFour />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Workflow;
