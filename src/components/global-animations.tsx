
"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GlobalAnimations() {
  useEffect(() => {
    // Smooth reveal animations for elements
    gsap.utils.toArray("[data-animate='fade-up']").forEach((element: any) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Stagger animations for grid items
    gsap.utils.toArray("[data-animate='stagger']").forEach((container: any) => {
      const items = container.querySelectorAll("[data-stagger-item]");
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.2)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Parallax effect for backgrounds
    gsap.utils.toArray("[data-parallax]").forEach((element: any) => {
      gsap.to(element, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Floating animation for cards
    gsap.utils.toArray("[data-float]").forEach((element: any) => {
      gsap.to(element, {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });
    });

    // Text reveal animation
    gsap.utils.toArray("[data-text-reveal]").forEach((element: any) => {
      const chars = element.textContent.split("");
      element.innerHTML = chars
        .map((char: string) => `<span class="char">${char}</span>`)
        .join("");

      gsap.fromTo(
        element.querySelectorAll(".char"),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.05,
          stagger: 0.02,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null;
}
