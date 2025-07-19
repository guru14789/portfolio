
import React from "react";
import { cn } from "@/lib/utils";
import { BoxReveal } from "../reveal-animations";

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative flex items-center">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card rounded-3xl p-12 liquid-gradient">
          <BoxReveal width="100%">
            <h2 className={cn(
              "text-5xl md:text-7xl font-bold text-center mb-6",
              "bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
            )}>
              LET'S CONNECT
            </h2>
          </BoxReveal>
          
          <BoxReveal width="100%" delay={0.2}>
            <p className="text-xl text-gray-300 text-center mb-12 leading-relaxed">
              Ready to bring your ideas to life? Let's create something amazing together.
            </p>
          </BoxReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <BoxReveal width="100%" delay={0.3}>
                <div className="glass rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">hello@example.com</p>
                </div>
              </BoxReveal>
              
              <BoxReveal width="100%" delay={0.4}>
                <div className="glass rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                  <p className="text-gray-300">Available Worldwide</p>
                </div>
              </BoxReveal>
            </div>
            
            <div className="space-y-4">
              <BoxReveal width="100%" delay={0.5}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full glass rounded-lg p-4 border border-white/20 bg-transparent text-white placeholder-gray-400 focus:border-white/40 focus:outline-none transition-all"
                />
              </BoxReveal>
              
              <BoxReveal width="100%" delay={0.6}>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full glass rounded-lg p-4 border border-white/20 bg-transparent text-white placeholder-gray-400 focus:border-white/40 focus:outline-none transition-all"
                />
              </BoxReveal>
              
              <BoxReveal width="100%" delay={0.7}>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full glass rounded-lg p-4 border border-white/20 bg-transparent text-white placeholder-gray-400 focus:border-white/40 focus:outline-none transition-all resize-none"
                />
              </BoxReveal>
              
              <BoxReveal width="100%" delay={0.8}>
                <button className="w-full bg-white/10 hover:bg-white/20 py-4 px-6 rounded-lg border border-white/30 hover:border-white/50 transition-all duration-300 text-white font-medium backdrop-blur-sm">
                  Send Message
                </button>
              </BoxReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
