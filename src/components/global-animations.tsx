
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function GlobalAnimations() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <>
      {/* Animated cursor follower */}
      <motion.div
        className="fixed w-4 h-4 bg-primary/20 rounded-full pointer-events-none z-50 mix-blend-multiply dark:mix-blend-screen"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Floating gradient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {Array.from({ length: 3 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-72 h-72 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
          />
        ))}
      </div>
    </>
  );
}
