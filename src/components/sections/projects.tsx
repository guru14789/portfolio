"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { BoxReveal } from "../reveal-animations";

const ProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "3D Interactive Portfolio",
      description: "Advanced portfolio with Spline 3D animations and glassmorphism UI",
      tech: ["Next.js", "Spline", "Framer Motion", "TypeScript"],
      image: "/assets/projects-screenshots/myportfolio/landing.png"
    },
    {
      title: "Smart Job Tracker",
      description: "AI-powered job tracking and management platform",
      tech: ["React", "Node.js", "PostgreSQL", "AI"],
      image: "/assets/projects-screenshots/smartjobtracker/01.png"
    },
    {
      title: "Finance Management App",
      description: "Personal finance tracking with smart analytics",
      tech: ["React", "Chart.js", "Node.js", "MongoDB"],
      image: "/assets/projects-screenshots/financeme/1.png"
    },
    {
      title: "Smart Parking Assistant",
      description: "IoT-based smart parking solution with real-time monitoring",
      tech: ["IoT", "React", "Node.js", "Hardware"],
      image: "/assets/projects-screenshots/smartparkingassitant/01.jpeg"
    },
    {
      title: "AI Dockerfile Optimizer",
      description: "AI-powered tool to optimize Docker configurations",
      tech: ["Python", "AI/ML", "Docker", "FastAPI"],
      image: "/assets/projects-screenshots/aidockerfileoptimizer/1.png"
    },
    {
      title: "Portfolio Website",
      description: "Professional portfolio with modern design and animations",
      tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      image: "/assets/projects-screenshots/savinderpuriportfolio/01.png"
    }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust speed as needed
    const cardWidth = 320 + 32; // card width + gap
    const totalWidth = cardWidth * projects.length;

    const animate = () => {
      scrollPosition += scrollSpeed;

      // Reset position when we've scrolled past all cards
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation after component mounts
    const startAnimation = () => {
      animationId = requestAnimationFrame(animate);
    };

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      startAnimation();
    };

    startAnimation();
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [projects.length]);

  return (
    <section id="projects" className="relative min-h-screen py-20 px-4">
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

        <div className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden scrollbar-hide"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* Duplicate projects for seamless loop */}
            {[...projects, ...projects].map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className="flex-shrink-0 w-80 glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div className="aspect-video bg-gray-900 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.style.background = 'linear-gradient(135deg, #1f2937, #374151)';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
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

          {/* Gradient overlays for smooth edges */}
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;