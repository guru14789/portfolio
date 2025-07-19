
"use client";
import React, { useRef, useEffect } from "react";
import Spline from '@splinetool/react-spline/next';
import { Application } from '@splinetool/runtime';

interface AnimatedBackgroundProps {
  scene?: string;
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  scene = "https://prod.spline.design/GdbPcxIeMGGb3KHp/scene.splinecode",
  className = ""
}) => {
  const splineRef = useRef<Application>();

  const onLoad = (splineApp: Application) => {
    splineRef.current = splineApp;
    
    // Make canvas background transparent
    if (splineApp.canvas) {
      splineApp.canvas.style.background = 'transparent';
    }

    // Find and auto-rotate the main object
    const mainObject = splineApp.findObjectByName('Scene') || splineApp.scene?.children[0];
    if (mainObject) {
      // Start continuous rotation
      const startTime = Date.now();
      const animate = () => {
        const elapsed = (Date.now() - startTime) / 1000;
        mainObject.rotation.y = elapsed * 0.5; // Adjust rotation speed as needed
        requestAnimationFrame(animate);
      };
      animate();
    }
  };

  return (
    <div className={`w-full h-full ${className}`}>
      <Spline 
        scene={scene}
        onLoad={onLoad}
        className="w-full h-full"
        style={{ background: 'transparent' }}
      />
    </div>
  );
};

export default AnimatedBackground;
