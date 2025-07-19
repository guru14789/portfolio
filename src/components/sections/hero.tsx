import React from "react";
import { cn } from "@/lib/utils";
import { BoxReveal } from "../reveal-animations";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="glass-card rounded-3xl p-12 liquid-gradient">
          <BoxReveal width="100%">
            <h1 className={cn(
              "text-5xl md:text-7xl lg:text-8xl font-bold mb-6",
              "bg-gradient-to-b from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
            )}>
              Creative Developer
            </h1>
          </BoxReveal>

          <BoxReveal width="100%" delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Crafting immersive digital experiences with cutting-edge technology
            </p>
          </BoxReveal>

          <BoxReveal width="100%" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass hover:glass-dark px-8 py-4 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 text-white font-medium">
                View My Work
              </button>
              <button className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 text-white font-medium backdrop-blur-sm">
                Get In Touch
              </button>
            </div>
          </BoxReveal>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 glass rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 glass rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-20 w-12 h-12 glass rounded-full opacity-25 animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default HeroSection;