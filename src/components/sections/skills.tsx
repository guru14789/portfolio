
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Spline from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import { motion } from "framer-motion";
import { SKILLS } from "@/data/constants";

export default function SkillsSection() {
  const [isLoading, setIsLoading] = useState(true);
  const splineRef = useRef<Application | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const onLoad = useCallback((spline: Application) => {
    splineRef.current = spline;
    setIsLoading(false);
  }, []);

  const onError = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Optimize Spline performance
  useEffect(() => {
    if (splineRef.current) {
      // Reduce rendering quality for better performance
      splineRef.current.setQuality(0.7);
      
      // Set up proper canvas sizing
      const canvas = splineRef.current.canvas;
      if (canvas && containerRef.current) {
        const resizeCanvas = () => {
          const container = containerRef.current;
          if (container && canvas) {
            const rect = container.getBoundingClientRect();
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            canvas.style.maxWidth = `${rect.width}px`;
            canvas.style.maxHeight = `${rect.height}px`;
          }
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        return () => {
          window.removeEventListener('resize', resizeCanvas);
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
            Exploring the intersection of creativity and technology through various tools and frameworks.
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {SKILLS.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className="glass-card rounded-xl p-6 transition-all duration-300 group-hover:shadow-lg border border-border/50">
                    <div className="flex flex-col items-center space-y-3">
                      {skill.icon && (
                        <div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300"
                          style={{ backgroundColor: `${skill.color}20` }}
                        >
                          <img 
                            src={skill.icon} 
                            alt={skill.name}
                            className="w-8 h-8 object-contain"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="text-center">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          {skill.shortDescription?.split('—')[0] || skill.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
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
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading 3D Experience...</p>
                  </div>
                </div>
              )}
              
              <Spline
                scene="https://prod.spline.design/JKOeP1UuhRrY9JNj/scene.splinecode"
                onLoad={onLoad}
                onError={onError}
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'transparent'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
