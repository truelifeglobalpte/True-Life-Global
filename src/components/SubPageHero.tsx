"use client";

import { motion } from "framer-motion";

interface SubPageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  bgImage?: string;
}

export default function SubPageHero({
  title,
  subtitle,
  badge,
  bgImage = "/singapore-skyline.png"
}: SubPageHeroProps) {
  return (
    <section className="relative h-[45vh] min-h-[320px] flex items-center justify-start overflow-hidden bg-black select-none">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <img
          src={bgImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.4]"
        />
        {/* Lighter gradient overlay to ensure readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/20 z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-4"
          >
            {/* Badge */}
            {badge && (
              <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-white/50">
                <span className="badge-accent px-2.5 py-1 rounded bg-[#0066cc]/15 border border-[#0066cc]/30 font-semibold text-[10px] tracking-wider uppercase">
                  {badge}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight tracking-tight">
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
