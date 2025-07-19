
"use client";
import React, { useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { BoxReveal } from "../reveal-animations";
import Spline from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import { SplineErrorBoundary } from "@/components/spline-error-boundary";

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [splineError, setSplineError] = useState<string | null>(null);
  const splineRef = useRef<Application | null>(null);

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
    setSplineError("Failed to load 3D model. Please try again later.");
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Spline 3D Scene as Main Hero */}
      <div className="absolute inset-0 w-full h-full">
        {isLoading && !splineError && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading 3D Experience...</p>
            </div>
          </div>
        )}

        {splineError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm z-50 p-8">
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
            <Spline
              scene="https://prod.spline.design/8RtTrtf3cV5eKm1n/scene.splinecode"
              onLoad={onLoad}
              onError={onError}
              className="w-full h-full"
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
                pointerEvents: "auto",
              }}
            />
          </SplineErrorBoundary>
        )}
      </div>
      
      {/* Text Content Overlay */}
      <div className="container mx-auto max-w-4xl text-center relative z-20">
        <div className="glass-card rounded-3xl p-8 md:p-12 liquid-gradient backdrop-blur-md bg-black/20 border border-white/10">
          <BoxReveal width="100%">
            <h1 className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-bold mb-6",
              "bg-gradient-to-b from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
            )}>
              Creative Developer
            </h1>
          </BoxReveal>

          <BoxReveal width="100%" delay={0.2}>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Crafting immersive digital experiences with cutting-edge technology
            </p>
          </BoxReveal>

          <BoxReveal width="100%" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass hover:glass-dark px-6 py-3 md:px-8 md:py-4 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 text-white font-medium backdrop-blur-sm"
              >
                View My Work
              </button>
              <button 
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 md:px-8 md:py-4 rounded-full border border-blue-300/30 hover:border-blue-300/50 transition-all duration-300 text-white font-medium backdrop-blur-sm"
              >
                Download Resume
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 hover:bg-white/20 px-6 py-3 md:px-8 md:py-4 rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 text-white font-medium backdrop-blur-sm"
              >
                Get In Touch
              </button>
            </div>
          </BoxReveal>
        </div>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 glass rounded-full opacity-20 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-32 right-16 w-12 h-12 glass rounded-full opacity-15 animate-pulse delay-1000 pointer-events-none"></div>
      <div className="absolute top-40 right-20 w-10 h-10 glass rounded-full opacity-10 animate-pulse delay-500 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
