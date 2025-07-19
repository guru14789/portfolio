"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Spline from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import { motion } from "framer-motion";
import { SKILLS } from "@/data/constants";
import { SplineErrorBoundary } from "@/components/spline-error-boundary";

export default function SkillsSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [splineError, setSplineError] = useState<string | null>(null);
  const splineRef = useRef<Application | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const onLoad = useCallback((spline: Application) => {
    try {
      splineRef.current = spline;
      setIsLoading(false);
      setSplineError(null);
    } catch (error) {
      console.error("Spline Load Error:", error);
      setIsLoading(false);
      setSplineError("Failed to initialize 3D model.");
    }
  }, []);

  const onError = useCallback((error: Error) => {
    console.error("Spline Error:", error);
    setIsLoading(false);
    if (error.message.includes("Data read, but end of buffer not reached") || 
        error.message.includes("buffer") || 
        error.message.includes("runtime")) {
      setSplineError("3D scene temporarily unavailable. Using fallback display.");
    } else {
      setSplineError("Failed to load 3D model. Please try again later.");
    }
  }, []);

  // Add timeout for loading
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
        setSplineError("3D scene took too long to load. Using fallback display.");
      }
    }, 10000); // 10 second timeout

    return () => clearTimeout(timeout);
  }, [isLoading]);

  // Optimize Spline performance
  useEffect(() => {
    if (splineRef.current) {
      // Set up proper canvas sizing
      const canvas = splineRef.current.canvas;
      if (canvas && containerRef.current) {
        const resizeCanvas = () => {
          const container = containerRef.current;
          if (container && canvas) {
            const rect = container.getBoundingClientRect();
            canvas.style.width = "100%";
            canvas.style.height = "100%";
            canvas.style.maxWidth = `${rect.width}px`;
            canvas.style.maxHeight = `${rect.height}px`;
          }
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        return () => {
          window.removeEventListener("resize", resizeCanvas);
        };
      }
    }
  }, [splineRef.current]);

  return (
    <motion.section
      id="skills"
      className="relative py-20 bg-background overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Solid black background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />

      {/* Minimal particles background for better performance */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            type: "spring", 
            stiffness: 100,
            damping: 10 
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Exploring the intersection of creativity and technology through
            various tools and frameworks.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -90 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.2, 
              type: "spring", 
              stiffness: 80 
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
              {/* Convert SKILLS object to array, show main skills only */}
              {Object.values(SKILLS).slice(0, 9).map((skill, index) => {
                // Simplified progress calculation for better performance
                const progress = 85 + (index * 3) % 10;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 100,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                    }}
                    className="group relative"
                  >
                    <motion.div 
                      className="bg-zinc-900/80 backdrop-blur-sm rounded-lg p-3 transition-all duration-300 group-hover:shadow-xl border border-zinc-700/50 hover:border-zinc-600"
                      whileHover={{
                        backgroundColor: 'rgba(39, 39, 42, 0.95)',
                      }}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        {/* Square Icon Container */}
                        <motion.div
                          className="w-12 h-12 rounded-md flex items-center justify-center transition-all duration-300"
                          style={{ backgroundColor: `${skill.color}15` }}
                          whileHover={{
                            backgroundColor: `${skill.color}25`,
                            rotate: [0, -5, 5, 0],
                          }}
                        >
                          <motion.img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-7 h-7 object-contain"
                            loading="lazy"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          />
                        </motion.div>

                        {/* Skill Name */}
                        <motion.h3 
                          className="text-xs font-medium text-white text-center leading-tight"
                          whileHover={{ scale: 1.05 }}
                        >
                          {skill.label}
                        </motion.h3>

                        {/* Progress Bar */}
                        <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${progress}%` }}
                            transition={{ 
                              duration: 0.8, 
                              delay: index * 0.05 + 0.3,
                              ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: skill.color }}
                          />
                        </div>

                        {/* Progress Percentage */}
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: index * 0.1 + 1.2 
                          }}
                          viewport={{ once: true }}
                          className="text-[10px] text-zinc-400 font-mono"
                        >
                          {progress}%
                        </motion.span>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Spline 3D Model */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8, rotateY: 90 }}
            whileInView={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.4, 
              type: "spring", 
              stiffness: 60 
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div
              ref={containerRef}
              className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-border/20 bg-gradient-to-br from-muted/10 to-muted/20"
            >
              {isLoading && !splineError && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground">
                      Loading 3D Experience...
                    </p>
                  </div>
                </div>
              )}
              {splineError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm z-10 p-8">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-primary/40 rounded-xl flex items-center justify-center">
                      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">3D Experience Unavailable</h3>
                    <p className="text-sm text-muted-foreground max-w-xs">{splineError}</p>
                    <button 
                      onClick={() => window.location.reload()} 
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition-colors"
                    >
                      Retry Loading
                    </button>
                  </div>
                </div>
              )}
              {!splineError && (
                <SplineErrorBoundary>
                  <div className="w-full h-full overflow-hidden">
                    <Spline
                      scene="https://prod.spline.design/animatedshapeblend-QzgQPqi7qs3KMSJMNCGqbO4o/scene.splinecode"
                      onLoad={onLoad}
                      onError={onError}
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "transparent",
                        pointerEvents: "none",
                        userSelect: "none",
                        touchAction: "none",
                        transform: "scale(1)",
                        willChange: "auto",
                      }}
                    />
                  </div>
                </SplineErrorBoundary>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}