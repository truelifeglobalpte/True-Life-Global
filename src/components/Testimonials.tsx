"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Auto-rotation of slides
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = TESTIMONIALS[activeIndex];

  // Motion variants for slide transition
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding bg-background border-t border-border relative overflow-hidden"
    >
      {/* Background soft glow spots matching the site theme */}
      <div className="absolute top-1/2 left-0 w-[45vw] h-[45vw] rounded-full glow-spot-2 filter blur-3xl pointer-events-none opacity-20 dark:opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Section Header, Info, Controls (4 columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
            <div>
              {/* Tag/Label */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 mb-3"
              >
                <div className="w-6 h-[1.5px] bg-accent" />
                <span className="text-xs font-mono uppercase tracking-[0.15em] text-accent-readable font-semibold">
                  Client Voices
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight"
              >
                What our clients <span className="editorial-text font-normal text-accent italic">say</span>
              </motion.h2>

              {/* Sub-text */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-4 text-foreground-secondary leading-relaxed font-light text-sm sm:text-base"
              >
                Real words from real businesses we&apos;ve had the privilege to serve across Singapore.
              </motion.p>
            </div>

            {/* Navigation & Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-6 pt-4"
            >
              {/* Prev button */}
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full border border-card-border bg-card-bg text-foreground hover:text-accent hover:border-accent/40 flex items-center justify-center transition-all duration-150 active:scale-95 shadow-sm hover:shadow-md"
                aria-label="Previous testimonial"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>

              {/* Next button */}
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full border border-card-border bg-card-bg text-foreground hover:text-accent hover:border-accent/40 flex items-center justify-center transition-all duration-150 active:scale-95 shadow-sm hover:shadow-md"
                aria-label="Next testimonial"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              {/* Pagination Dots */}
              <div className="flex items-center gap-1.5 ml-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > activeIndex ? 1 : -1);
                      setActiveIndex(i);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === i ? "w-6 bg-accent" : "w-2 bg-card-border hover:bg-foreground-secondary/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Interactive Testimonial Card (8 columns) */}
          <div className="lg:col-span-8 relative min-h-[340px] flex items-center">
            {/* Absolute quote background watermark */}
            <div className="absolute -top-10 -right-4 text-[12rem] font-serif leading-none select-none text-accent/5 pointer-events-none font-bold">
              &ldquo;
            </div>

            <div className="w-full relative overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full rounded-[2rem] bg-card-bg border border-card-border shadow-md hover:shadow-lg transition-shadow duration-300 p-8 sm:p-10 relative flex flex-col justify-between min-h-[280px]"
                >
                  {/* Speech bubble quote SVG decoration */}
                  <div className="text-accent/25 mb-6">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.988zm-12 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.987z" />
                    </svg>
                  </div>

                  {/* Testimonial Quote Text */}
                  <p className="text-base sm:text-lg lg:text-xl text-foreground-secondary leading-relaxed font-light italic mb-8">
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </p>

                  {/* Author Meta Row */}
                  <div className="flex items-center justify-between border-t border-border/80 pt-6 mt-auto">
                    <div className="flex items-center gap-4">
                      {/* Round Letter Avatar */}
                      <div className="w-12 h-12 rounded-full bg-accent-tint border border-accent/10 flex items-center justify-center text-accent text-lg font-bold font-display flex-shrink-0">
                        {currentTestimonial.initials.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-foreground font-display leading-tight">
                          {currentTestimonial.name}
                        </h4>
                        <p className="text-xs text-foreground-secondary/80 font-light mt-0.5">
                          {currentTestimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Star ratings */}
                    <div className="flex items-center gap-0.5 text-gold-500 text-sm sm:text-base select-none">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
