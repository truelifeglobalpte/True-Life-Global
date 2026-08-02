"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    indexText: "01 / 03",
    badge: "CLARITY",
    title: "Clear Financials, Confident Decisions",
    videoSrc: "/videos/frist.mp4",
  },
  {
    id: 2,
    indexText: "02 / 03",
    badge: "GROWTH",
    title: "Helping Singapore SMEs Grow with Confidence",
    videoSrc: "/videos/second.mp4",
  },
  {
    id: 3,
    indexText: "03 / 03",
    badge: "TRUST",
    title: "Precision, Compliance & Confidence Every Step",
    videoSrc: "/videos/third.mp4",
  },
];

const subhead =
  "A Singapore-registered company delivering trusted financial expertise and reliable courier support, committed to precision, compliance, and strategic clarity for your business.";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Auto-rotate slides with dynamic durations: 3s for first slide (idx 0), 5s for others
  useEffect(() => {
    const duration = activeSlide === 0 ? 3000 : 5000;
    const timer = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [activeSlide]);

  // Sync video playback: start current active video from 0:00, pause others
  useEffect(() => {
    slides.forEach((_, idx) => {
      const video = videoRefs.current[idx];
      if (video) {
        if (idx === activeSlide) {
          video.currentTime = 0;
          video.play().catch((err) => console.log("Video play request interrupted:", err));
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [activeSlide]);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] sm:min-h-0 sm:h-[calc(100vh-5rem)] flex items-center justify-start overflow-hidden bg-black select-none"
    >
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        {slides.map((slide, idx) => (
          <video
            key={slide.id}
            ref={(el) => {
              videoRefs.current[idx] = el;
            }}
            src={slide.videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className={`absolute transition-opacity duration-1000 ease-in-out ${
              idx === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              top: "50%",
              left: "50%",
              width: "max(100vw, 100vh)",
              height: "max(100vw, 100vh)",
              minWidth: "max(100vw, 100vh)",
              minHeight: "max(100vw, 100vh)",
              objectFit: "cover",
              transform: "translate(-50%, -50%) rotate(-90deg)",
            }}
          />
        ))}
        {/* Lighter gradient overlay to ensure readability while keeping video bright */}
        <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-black/80 via-black/40 to-black/10 z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-28 pb-20 sm:pt-32 sm:pb-24">
        <div className="max-w-3xl">
          {/* Animate key components based on activeSlide change */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-5 sm:space-y-6"
            >
              {/* Index indicator & Status badge */}
              <div className="flex items-center gap-3 sm:gap-4 text-xs font-mono tracking-widest text-white/50">
                <span className="text-[#0066cc] font-semibold">{slides[activeSlide].indexText}</span>
                <span className="w-6 sm:w-8 h-[1px] bg-white/20" />
                <span className="badge-accent px-2.5 py-1 rounded bg-[#0066cc]/15 border border-[#0066cc]/30 font-semibold text-[10px] tracking-wider uppercase">
                  {slides[activeSlide].badge}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6.5xl font-display font-bold text-white leading-[1.18] sm:leading-[1.1] tracking-tight">
                {slides[activeSlide].title}
              </h1>

              {/* Subhead */}
              <p className="text-white/75 text-sm sm:text-lg leading-relaxed max-w-2xl font-light">
                {subhead}
              </p>

              {/* CTAs */}
              <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full sm:w-auto">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-full bg-[#0066cc] text-white hover:bg-[#0055bb] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  Book a Consultation
                  <svg
                    className="ml-2 w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a
                  href="/#services"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-full border border-white/30 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  Our Services
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Navigation Dots (bottom indicators) */}
      <div className="absolute bottom-6 sm:bottom-10 left-5 sm:left-8 lg:left-12 xl:left-16 2xl:left-20 z-20 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className="p-1 group focus:outline-none"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <div
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === activeSlide ? "w-8 bg-[#0066cc]" : "w-2.5 bg-white/30 group-hover:bg-white/50"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
