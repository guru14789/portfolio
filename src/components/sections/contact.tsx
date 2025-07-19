import React from "react";
import { cn } from "@/lib/utils";
import ContactForm from "../ContactForm";

const ContactSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-background" id="contact">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className={cn(
            "text-4xl md:text-6xl font-bold mb-6",
            "bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent dark:from-white dark:via-gray-100 dark:to-gray-300"
          )}>
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-muted-foreground dark:text-gray-300">
            Ready to bring your ideas to life? Let&apos;s collaborate!
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12 bg-card/50 backdrop-blur-sm border border-border">
          <ContactForm />

          {/* Location Map */}
          <div className="mt-8 p-6 rounded-2xl bg-muted/20 border border-border">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Find Me</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Pune, Maharashtra, India</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">abhijitzende2411@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+91 9075757847</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden h-48 bg-muted/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711134703!2d73.86295679726562!3d18.52461806952677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1647951674567!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;