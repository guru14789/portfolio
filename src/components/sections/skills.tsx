
import React from "react";
import { cn } from "@/lib/utils";
import { BoxReveal } from "../reveal-animations";
import AnimatedBackground from "../animated-background";
import Image from "next/image";

const SkillsSection = () => {
  const skills = [
    { 
      name: "React", 
      level: 95,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    { 
      name: "TypeScript", 
      level: 90,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    { 
      name: "Next.js", 
      level: 88,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    },
    { 
      name: "Node.js", 
      level: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    { 
      name: "Python", 
      level: 82,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    { 
      name: "Three.js", 
      level: 78,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"
    },
    { 
      name: "JavaScript", 
      level: 92,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    { 
      name: "HTML5", 
      level: 95,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    { 
      name: "CSS3", 
      level: 90,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    }
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

            {/* Skills Grid */}
            <div className="grid grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <BoxReveal key={skill.name} width="100%" delay={index * 0.05}>
                  <div className="glass-card rounded-xl p-4 aspect-square flex flex-col items-center justify-center relative group">
                    {/* Skill Icon */}
                    <div className="w-12 h-12 mb-3 relative">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className="object-contain filter brightness-0 invert group-hover:filter-none transition-all duration-300"
                      />
                    </div>
                    
                    {/* Skill Name */}
                    <span className="text-white font-medium text-sm text-center mb-2">
                      {skill.name}
                    </span>
                    
                    {/* Progress Circle */}
                    <div className="relative w-16 h-16">
                      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
                        {/* Background circle */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth="8"
                          fill="transparent"
                        />
                        {/* Progress circle */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="url(#gradient)"
                          strokeWidth="8"
                          fill="transparent"
                          strokeDasharray={`${2 * Math.PI * 40}`}
                          strokeDashoffset={`${2 * Math.PI * 40 * (1 - skill.level / 100)}`}
                          className="transition-all duration-1000 ease-out"
                          strokeLinecap="round"
                        />
                      </svg>
                      {/* Percentage text */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">
                          {skill.level}%
                        </span>
                      </div>
                      {/* SVG Gradient Definition */}
                      <svg className="absolute inset-0 w-0 h-0">
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                        </defs>
                      </svg>
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
