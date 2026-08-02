"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WHY_US } from "@/lib/constants";

const ICONS = [
  // Shield — Fully Compliant
  <svg key="shield" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  // Link — Two Services
  <svg key="link" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
  // Check — Compliance First
  <svg key="check" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  // Tag — Transparent Pricing
  <svg key="tag" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
  // Clock — Fast & Reliable
  <svg key="clock" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  // Singapore / Map Pin — Built for SG
  <svg key="map" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="why-us"
      ref={ref}
      className="section-padding bg-background border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono uppercase tracking-[0.15em] text-accent-readable mb-4"
        >
          OUR ADVANTAGE
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight max-w-2xl"
        >
          Why partner with <span className="editorial-text font-normal text-accent italic">True Life Global?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-4 text-lg text-foreground-secondary leading-relaxed max-w-2xl"
        >
          What sets us apart: substance over promises, trust over transactions.
        </motion.p>

        {/* Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="p-6 rounded-2xl bg-card-bg border border-card-border hover:shadow-lift hover:-translate-y-0.5 transition-all duration-150"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-tint flex items-center justify-center text-accent">
                {ICONS[i]}
              </div>
              <h3 className="mt-4 text-lg font-display font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-foreground-secondary leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
