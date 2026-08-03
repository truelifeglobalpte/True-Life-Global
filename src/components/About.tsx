"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-background-alt border-t border-border overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Text Content (7 columns on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Editorial Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight tracking-tight"
            >
              A Singapore partner <br />
              <span className="editorial-text font-normal text-accent italic">
                you can count on
              </span>
            </motion.h2>

            {/* Small top label */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono uppercase tracking-[0.15em] text-accent font-semibold"
            >
              About Us
            </motion.p>

            {/* Main body text */}
            <div className="space-y-5 text-foreground-secondary text-base sm:text-lg leading-relaxed font-light">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                True Life Global Pte. Ltd. is a Singapore registered company delivering trusted
                financial expertise and reliable courier support for modern businesses. A specialized
                advisory and accounting firm committed to delivering enduring value through precision,
                compliance, and strategic clarity.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                Our mission is to help businesses streamline their financial operations, maintain
                regulatory compliance, and achieve sustainable growth through practical and professional
                support. We combine industry knowledge, integrity, and service quality to create value
                for every client.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                At True Life Global, we believe in building long-term relationships, acting as a
                trusted extension of your team whether managing financial records, providing tax
                advisory services, supporting audit requirements, or delivering dependable courier
                solutions across Singapore.
              </motion.p>
            </div>

            {/* Vision and Mission Cards */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-6 pt-4"
            >
              {/* Vision Card */}
              <div className="p-6 rounded-2xl bg-card-bg border border-card-border hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xs font-mono uppercase tracking-[0.15em] text-accent font-semibold mb-3">
                  Our Vision
                </h3>
                <p className="text-foreground-secondary leading-relaxed text-sm font-light">
                  To be a trusted global partner empowering businesses and individuals through seamless
                  financial solutions and reliable delivery services, connecting lives, one transaction
                  at a time.
                </p>
              </div>

              {/* Mission Card */}
              <div className="p-6 rounded-2xl bg-card-bg border border-card-border hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xs font-mono uppercase tracking-[0.15em] text-accent font-semibold mb-3">
                  Our Mission
                </h3>
                <p className="text-foreground-secondary leading-relaxed text-sm font-light">
                  Deliver expert accounting, auditing, tax, and courier services, simplifying compliance
                  and empowering businesses to grow with confidence.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Image (5 columns on desktop) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[420px] aspect-[3/4] relative"
            >
              {/* Main Image Container */}
              <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-xl border border-card-border relative group">
                <Image
                  src="/singapore-cbd-towers.png"
                  alt="Singapore CBD Skyline - True Life Global"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                  priority
                  quality={95}
                />
                
                {/* Subtle dark gradient overlay at bottom for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Clean inline details */}
                <div className="absolute bottom-6 left-6 z-10">
                  <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/60">Registered Office</p>
                  <p className="text-sm font-bold text-white tracking-wide mt-0.5">Singapore Financial District</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
