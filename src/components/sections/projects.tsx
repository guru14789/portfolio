import React from "react";
import { cn } from "@/lib/utils";
import { BoxReveal } from "../reveal-animations";

const ProjectsSection = () => {
  const projects = [
    {
      title: "3D Portfolio",
      description: "Interactive portfolio with Spline 3D objects and glassmorphism design",
      tech: ["Next.js", "Spline", "Three.js", "GSAP"],
      image: "/assets/projects-screenshots/myportfolio/landing.png"
    },
    {
      title: "AI Assistant",
      description: "Intelligent chatbot with natural language processing capabilities",
      tech: ["React", "OpenAI", "Node.js", "Socket.io"],
      image: "/assets/projects-screenshots/myportfolio/projects.png"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack shopping platform with payment integration",
      tech: ["TypeScript", "PostgreSQL", "Stripe", "Tailwind"],
      image: "/assets/projects-screenshots/myportfolio/project.png"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <BoxReveal width="100%">
          <h2 className={cn(
            "text-6xl md:text-8xl font-bold text-center mb-4",
            "bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          )}>
            PROJECTS
          </h2>
        </BoxReveal>

        <p className="text-center text-gray-400 mb-16 text-lg">
          Showcasing my latest work and creative solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 group cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full glass text-sm text-white/80 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <button className="flex-1 glass hover:glass-dark py-2 px-4 rounded-lg border border-white/20 hover:border-white/40 transition-all text-white/80 hover:text-white text-sm">
                    View Live
                  </button>
                  <button className="flex-1 bg-white/10 hover:bg-white/20 py-2 px-4 rounded-lg border border-white/30 hover:border-white/50 transition-all text-white/80 hover:text-white text-sm">
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;