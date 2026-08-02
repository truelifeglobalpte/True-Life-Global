"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BENEFITS = [
  {
    title: "Career Growth",
    description:
      "Structured guidance and skill development in Singapore accounting.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: "Real Exposure",
    description:
      "Hands-on work across ACRA-compliant accounting and courier operations.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    title: "Mentorship",
    description:
      "Learn alongside experienced Singapore business professionals.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function Careers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="careers"
      ref={ref}
      className="section-padding bg-background border-t border-border relative overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 right-0 w-[35vw] h-[35vw] rounded-full glow-spot-2 filter blur-3xl pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-column layout: text left | benefits right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT: Heading + Copy */}
          <div>
            {/* Section label */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono uppercase tracking-[0.15em] text-accent font-semibold mb-3"
            >
              Careers at True Life Global
            </motion.p>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight"
            >
              A place to grow,{" "}
              <span className="editorial-text font-normal text-accent italic">learn &amp; lead.</span>
            </motion.h2>

            {/* Sub-heading */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-3 text-lg font-display font-semibold text-foreground-secondary"
            >
              Join Our Team · Learn. Build. Lead.
            </motion.p>

            {/* Body */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 space-y-5 text-foreground-secondary leading-relaxed font-light"
            >
              <p className="text-lg font-medium text-foreground">
                More than a job, it&apos;s an opportunity
              </p>
              <p>
                Becoming a part of True Life Global Pte. Ltd. is not merely about securing
                employment; it is about building your career in a Singapore-registered,
                ACRA-compliant professional services environment.
              </p>
              <p>
                Whether you are an experienced professional or a recent graduate, True Life
                Global presents outstanding prospects for growth in accounting and business
                services.
              </p>
            </motion.div>

            {/* Bottom tagline + CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-10 space-y-5"
            >
              <p className="text-sm text-foreground-secondary italic">
                Take the first step towards a fulfilling career with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href="/#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-accent text-white hover:bg-accent-readable shadow-sm hover:shadow-md transition-all duration-150 hover:-translate-y-0.5"
                >
                  Apply / Get in Touch
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a
                  href="/#about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-card-bg border border-card-border text-foreground hover:border-accent/40 hover:text-accent transition-all duration-150 hover:-translate-y-0.5"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Benefit cards stacked */}
          <div className="space-y-5">
            {BENEFITS.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-5 p-6 rounded-2xl bg-card-bg border border-card-border hover:border-accent/30 hover:shadow-sm transition-all duration-200 group"
              >
                {/* Icon Badge */}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-accent-tint text-accent border border-accent/10 flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-base font-display font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-foreground-secondary leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
