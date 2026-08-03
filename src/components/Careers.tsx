"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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
        
        {/* Two-column layout: text left | image right */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT: Heading, Copy, Benefits & CTAs (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Section label */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono uppercase tracking-[0.15em] text-accent font-semibold mb-2"
            >
              Join Our Team
            </motion.p>

            {/* Sub-heading label */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-xs font-mono uppercase tracking-[0.15em] text-foreground-secondary/70 font-semibold"
            >
              Learn. Build. Lead.
            </motion.p>

            {/* Main Editorial Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight tracking-tight"
            >
              More than a job, <br />
              <span className="editorial-text font-normal text-accent italic">
                it's an opportunity
              </span>
            </motion.h2>

            {/* Body copy */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-4 text-foreground-secondary text-base leading-relaxed font-light"
            >
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

            {/* Benefit cards stacked */}
            <div className="space-y-4 pt-3">
              {BENEFITS.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-card-bg border border-card-border hover:border-accent/30 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent-tint text-accent border border-accent/10 flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-sm text-foreground-secondary leading-relaxed font-light">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Tagline & CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-5 pt-3"
            >
              <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
                <a
                  href="/#contact"
                  className="btn-wow-effect w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-accent text-white hover:bg-accent-readable shadow-sm hover:shadow transition-all duration-150"
                >
                  Apply / Get in Touch
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Image with floating badge (5 columns) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[440px] aspect-[4/5] md:aspect-[3/4] relative"
            >
              <div className="interactive-glow-card w-full h-full rounded-[2rem] overflow-hidden shadow-xl border border-card-border relative group">
                <Image
                  src="/singapore-office-team.png"
                  alt="True Life Global Careers Team"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                  priority
                  quality={95}
                />
                
                {/* Subtle dark gradient overlay at bottom for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Floating badge inside image card at the bottom */}
                <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#0066cc]/30 text-[#60a5fa] border border-[#0066cc]/20">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-white/50 leading-none">True Life Global</p>
                    <p className="text-xs font-bold text-white tracking-wide mt-1 leading-none">A place to grow, learn &amp; lead.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
