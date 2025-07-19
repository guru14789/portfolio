
"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import Spline from '@splinetool/react-spline/next';

function MainPage() {
  return (
    <>
      <SmoothScroll>
        <main className={cn("min-h-screen bg-black relative overflow-hidden")}>
          {/* Fixed Spline Background */}
          <div className="fixed top-0 left-0 w-full h-full z-0">
            <Spline
              scene="https://prod.spline.design/RC9fNHvpZ3n0J05p/scene.splinecode"
              className="w-full h-full"
            />
          </div>
          
          {/* Content with glassmorphism */}
          <div className="relative z-10">
            <HeroSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </div>
        </main>
      </SmoothScroll>
    </>
  );
}

export default MainPage;
