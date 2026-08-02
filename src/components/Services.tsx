"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SERVICES } from "@/lib/constants";

import TiltCard from "./TiltCard";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={ref}
      className="section-padding bg-background border-t border-border relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[35vw] h-[35vw] rounded-full glow-spot-1 filter blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-60" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono uppercase tracking-[0.15em] text-accent-readable mb-4"
        >
          OUR SERVICES
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight max-w-2xl"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-4 text-lg text-foreground-secondary leading-relaxed max-w-2xl"
        >
          Professional services tailored for Singapore businesses, spanning financial compliance
          to reliable logistics.
        </motion.p>

        {/* Cards Grid */}
        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard className="h-full rounded-3xl premium-card group">
                <div className="p-8 h-full">
                  {/* Index & Top line */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-[0.15em] text-accent-readable">
                      {service.index}
                    </span>
                    <div className="w-8 h-[1px] bg-border group-hover:bg-accent/40 transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl lg:text-2xl font-display font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-foreground-secondary leading-relaxed text-sm font-light">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] font-mono tracking-wide text-foreground-secondary bg-background border border-border rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
