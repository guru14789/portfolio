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
    if (error.message.includes("Data read, but end of buffer not reached")) {
      setSplineError("3D model data is corrupted or incomplete. Displaying fallback view.");
    } else {
      setSplineError("Failed to load 3D model. Please try again later.");
    }
  }, []);

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
    <section
      id="skills"
      className="relative min-h-screen w-full bg-background text-foreground py-20 overflow-hidden"
    >
      {/* Background gradient for light/dark mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-muted/20 dark:from-black dark:via-zinc-900/90 dark:to-zinc-800/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the intersection of creativity and technology through
            various tools and frameworks.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {/* Convert SKILLS object to array and render */}
              {Object.values(SKILLS).map((skill, index) => {
                // Generate a random progress value between 70-95%
                const progress = 70 + Math.floor(Math.random() * 26);
                
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 100,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="group relative"
                  >
                    <div className="glass-card rounded-lg p-3 transition-all duration-300 group-hover:shadow-lg border border-border/50 bg-background/50">
                      <div className="flex flex-col items-center space-y-2">
                        {/* Square Icon Container */}
                        <div
                          className="w-12 h-12 rounded-md flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                          style={{ backgroundColor: `${skill.color}15` }}
                        >
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                        
                        {/* Skill Name */}
                        <h3 className="text-xs font-medium text-foreground text-center leading-tight">
                          {skill.label}
                        </h3>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-muted/30 rounded-full h-1.5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${progress}%` }}
                            transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
                            viewport={{ once: true }}
                            className="h-full rounded-full transition-all duration-300"
                            style={{ backgroundColor: skill.color }}
                          />
                        </div>
                        
                        {/* Progress Percentage */}
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.05 + 0.8 }}
                          viewport={{ once: true }}
                          className="text-[10px] text-muted-foreground font-mono"
                        >
                          {progress}%
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Spline 3D Model */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
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
                  <div className="w-full h-full">
                    <Spline
                      scene="https://prod.spline.design/Sw6l5z6fQe8bznQC/scene.splinecode"
                      onLoad={onLoad}
                      onError={onError}
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "transparent",
                      }}
                    />
                  </div>
                </SplineErrorBoundary>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
