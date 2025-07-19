"use client";
import React, { useRef } from "react";
import Spline from "@splinetool/react-spline/next";
import { Application } from "@splinetool/runtime";

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
      splineApp.canvas.style.background = "transparent";
      splineApp.canvas.style.backgroundColor = "transparent";
    }

    // Try finding an object to rotate
    const mainObject = splineApp.findObjectByName("Scene");

    if (mainObject) {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = (Date.now() - startTime) / 1000;
        mainObject.rotation.y = elapsed * 0.5;
        requestAnimationFrame(animate);
      };
      animate();
    }
  };

  const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full overflow-hidden",
        "bg-gradient-to-br from-background via-background/90 to-muted/20",
        "dark:from-zinc-900 dark:via-black dark:to-zinc-900",
        className
      )}
      style={{
        background: `
          radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(120, 200, 255, 0.05) 0%, transparent 50%),
          hsl(var(--background))
        `
      }}
    >
      <Spline
        scene={scene}
        onLoad={onLoad}
        className="w-full h-full"
        style={{
          background: "transparent",
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          borderRadius: "0px"
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
