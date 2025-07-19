"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";

function MainPage() {
  return (
    <>
      <SmoothScroll>
        <main className={cn("min-h-screen bg-black relative")}>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </SmoothScroll>
    </>
  );
}

export default MainPage;