import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

// Generate 20 unique parametric paths
const getPath = (idx, t, width, height) => {
  // Use Lissajous curves with different parameters for each image
  const a = 1 + (idx % 3); // frequency x
  const b = 2 + (idx % 4); // frequency y
  const delta = (Math.PI / 10) * idx; // phase offset
  const rx = width / 2.2 - 60 - idx * 2; // x amplitude
  const ry = height / 2.2 - 60 - idx * 2; // y amplitude
  const cx = width / 2;
  const cy = height / 2;
  // t in [0, 1]
  const x = cx + rx * Math.sin(a * 2 * Math.PI * t + delta);
  const y = cy + ry * Math.sin(b * 2 * Math.PI * t);
  return { x, y };
};

const FloatingImage = ({ src, idx, duration = 24 }) => {
  const controls = useAnimation();
  const tRef = useRef(Math.random()); // start at random phase

  useEffect(() => {
    let frame;
    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      tRef.current += 1 / (duration * 60); // smooth step
      if (tRef.current > 1) tRef.current -= 1;
      const { x, y } = getPath(idx, tRef.current, width, height);
      controls.set({ x, y });
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [controls, idx, duration]);

  return (
    <motion.img
      src={src}
      animate={controls}
      style={{
        position: "absolute",
        width: "12px",
        height: "auto",
        pointerEvents: "none",
        zIndex: 2,
      }}
    />
  );
};

const FloatingImages = ({ images }) => {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", minHeight: "100vh", height: "100%", overflow: "hidden", zIndex: 1 }}>
      {images.map((img, idx) => (
        <FloatingImage
          src={img.src}
          key={idx}
          idx={idx}
          duration={img.duration || 24}
        />
      ))}
    </div>
  );
};

export default FloatingImages;
