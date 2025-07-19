
"use client";
import React from "react";
import Spline from '@splinetool/react-spline/next';

interface AnimatedBackgroundProps {
  scene?: string;
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  scene = "https://prod.spline.design/GdbPcxIeMGGb3KHp/scene.splinecode",
  className = ""
}) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Spline 
        scene={scene}
        className="w-full h-full"
      />
    </div>
  );
};

export default AnimatedBackground;
