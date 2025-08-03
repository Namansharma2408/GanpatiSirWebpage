import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

// FloatingImage now accepts duration and interval props
const FloatingImage = ({ src, duration = 10, interval = 3000, ease = [0.42, 0, 0.58, 1] }) => {
  const controls = useAnimation();

  useEffect(() => {
    const moveRandom = () => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      let x, y;
      let tries = 0;
      do {
        x = Math.random() * (window.innerWidth - 100);
        y = Math.random() * (window.innerHeight - 100);
        const dist = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
        // If too close to center, try again (max 10 tries)
        if (dist > 200 || tries > 10) break;
        tries++;
      } while (true);

      controls.start({
        x,
        y,
        transition: {
          duration: duration,
          ease: ease,
        },
      });
    };

    moveRandom();
    const timer = setInterval(moveRandom, interval);
    return () => clearInterval(timer);
  }, [controls, duration, interval]);

  return (
    <motion.img
      src={src}
      animate={controls}
      style={{
        position: "absolute",
        width: "100px",
        height: "auto",
        pointerEvents: "none", // so it doesn't block clicks
      }}
    />
  );
};

// FloatingImages now expects images to be an array of objects: { src, duration, interval }
const FloatingImages = ({ images }) => {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", minHeight: "100vh", height: "100%", overflow: "hidden", zIndex: 1 }}>
      {images.map((img, idx) => (
        <FloatingImage
          src={img.src}
          key={idx}
          duration={img.duration}
          interval={img.interval}
          ease={img.ease}
        />
      ))}
    </div>
  );
};

export default FloatingImages;
