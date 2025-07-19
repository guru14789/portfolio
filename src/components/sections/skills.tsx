
import Link from "next/link";
import React, { useState } from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";
import { SKILLS } from "@/data/constants";

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Python", "Java", "PostgreSQL"],
    tools: ["Git", "Docker", "AWS", "Figma"],
    mobile: ["React Native", "Flutter", "Swift", "Kotlin"]
  };

  return (
    <section id="skills" className="min-h-screen py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <Link href={"#skills"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "text-6xl md:text-8xl font-bold text-center mb-4",
                "bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
              )}
            >
              SKILLS
            </h2>
          </BoxReveal>
        </Link>
        
        <p className="text-center text-gray-400 mb-16 text-lg">
          Technologies I work with to bring ideas to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div
              key={category}
              className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold mb-4 capitalize text-white/90">
                {category}
              </h3>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className={cn(
                      "p-3 rounded-lg transition-all duration-300 cursor-pointer",
                      "glass hover:glass-dark",
                      "border border-white/10 hover:border-white/30",
                      hoveredSkill === skill ? "scale-105 shadow-lg" : ""
                    )}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 font-medium">{skill}</span>
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive skill showcase */}
        <div className="mt-16">
          <div className="glass-card rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-white/90">
              {hoveredSkill ? `${hoveredSkill}` : "Hover over a skill to learn more"}
            </h3>
            <p className="text-gray-400">
              {hoveredSkill 
                ? `I have extensive experience working with ${hoveredSkill} to build modern, scalable applications.`
                : "Explore my technical skills and expertise across different domains."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
