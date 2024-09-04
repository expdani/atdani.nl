/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const CatchMeBox = () => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const moveBox = () => {
    const randomX = Math.random() * 200; // Adjust range to avoid overflow
    const randomY = Math.random() * 200;
    void controls.start({
      x: `${randomX}%`,
      y: `${randomY}%`,
      transition: { type: "spring", stiffness: 300 },
    });

    console.log("Moving box to", randomX, randomY);
  };

  return (
    <div
      style={{ flex: 1, width: "100%", height: "80%", position: "relative" }}
    >
      <motion.div
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "#FF6347",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          cursor: "pointer",
        }}
        animate={controls}
        onMouseEnter={() => {
          setIsHovered(true);
          moveBox();
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? "Catch Me!" : "Hover Over"}
      </motion.div>
    </div>
  );
};

export default CatchMeBox;
