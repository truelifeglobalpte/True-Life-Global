"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { STEPS } from "@/lib/constants";
import TiltCard from "./TiltCard";

const STEP_ICONS = [
  // Consultation
  <svg key="consult" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="10" r="3" />
  </svg>,
  // Execution
  <svg key="execute" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>,
  // Support
  <svg key="support" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 14 4-4" />
    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
  </svg>,
];

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="how-we-work"
      ref={sectionRef}
      className="section-padding bg-background-alt border-t border-border relative overflow-hidden"
    >
      {/* Background soft glow spots matching the site theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[30vw] rounded-full glow-spot-1 filter blur-3xl pointer-events-none opacity-40 dark:opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with standard neat layout */}
        <div className="max-w-3xl mb-14">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono uppercase tracking-[0.15em] text-accent font-semibold mb-3"
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight"
          >
            Working with you, <span className="editorial-text font-normal text-accent italic">step by step</span>
          </motion.h2>
        </div>

        {/* Adaptive Cards Grid (automatically looks stunning in light & dark mode) */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard className="h-full rounded-3xl bg-card-bg border border-card-border shadow-sm group">
                <div className="p-8 h-full flex flex-col justify-between">
                  <div>
                    {/* Header Row: Icon Badge & Subtle Step Number Indicator */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-accent-tint text-accent border border-accent/10 transition-transform duration-300 group-hover:scale-105">
                        {STEP_ICONS[i]}
                      </div>
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-accent-tint text-accent border border-accent/10">
                        Step {String(step.number).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-display font-bold text-foreground group-hover:text-accent transition-colors duration-250 leading-snug">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3.5 text-sm text-foreground-secondary leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom design detail (thin line + small details) */}
                  <div className="mt-8 pt-5 border-t border-border/80 flex items-center justify-between text-[11px] font-mono text-foreground-secondary/60">
                    <span>Phase 0{step.number}</span>
                    <span className="w-2 h-2 rounded-full bg-accent/20 group-hover:bg-accent group-hover:scale-125 transition-all duration-300" />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-card-bg border border-card-border shadow-sm"
        >
          <div className="space-y-1">
            <h4 className="text-base font-display font-bold text-foreground">
              Ready to get started?
            </h4>
            <p className="text-sm text-foreground-secondary font-light">
              Book a free, no-obligation consultation with our Singapore business experts today.
            </p>
          </div>
          <a
            href="/#contact"
            className="btn-wow-effect w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-accent text-white hover:bg-accent-readable shadow-sm hover:shadow transition-all duration-150 whitespace-nowrap hover:-translate-y-0.5"
          >
            Book a Consultation
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
