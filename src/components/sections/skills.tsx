import React from "react";
import { cn } from "@/lib/utils";
import { BoxReveal } from "../reveal-animations";
import AnimatedBackground from "../animated-background";

const SkillsSection = () => {
  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Next.js", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 82 },
    { name: "Three.js", level: 78 }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Skills content */}
          <div className="space-y-8">
            <BoxReveal width="100%">
              <h2 className={cn(
                "text-6xl md:text-8xl font-bold mb-8",
                "bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
              )}>
                SKILLS
              </h2>
            </BoxReveal>

            <p className="text-gray-400 text-lg mb-12">
              Technologies and tools I work with to bring ideas to life
            </p>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <BoxReveal key={skill.name} width="100%" delay={index * 0.1}>
                  <div className="glass-card rounded-xl p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-medium text-lg">{skill.name}</span>
                      <span className="text-gray-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </BoxReveal>
              ))}
            </div>
          </div>

          {/* Right side - 3D Spline object */}
          <div className="relative h-[600px] w-full">
            <div className="glass-card rounded-3xl h-full overflow-hidden">
              <AnimatedBackground scene="https://prod.spline.design/GdbPcxIeMGGb3KHp/scene.splinecode" />
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-32 right-20 w-16 h-16 glass rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 left-16 w-12 h-12 glass rounded-full opacity-30 animate-pulse delay-700"></div>
      </div>
    </section>
  );
};

export default SkillsSection;