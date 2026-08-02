"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useDarkMode } from "@/hooks/useDarkMode";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const { isDark, toggle, mounted } = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = useCallback(() => setIsMobileOpen(false), []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border py-3"
          : "bg-transparent py-4"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo / Wordmark */}
          <a
            href="/"
            className="flex items-center gap-3 sm:gap-3.5 group"
            aria-label="True Life Global - Home"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-[3.25rem] lg:h-[3.25rem] rounded-full bg-white p-0.5 sm:p-1 shadow-md border border-gray-100 flex-shrink-0 overflow-hidden group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <Image
                src="/videos/logotruelifeglobal.jpeg"
                alt="True Life Global Logo"
                width={52}
                height={52}
                className="w-[90%] h-[90%] object-contain rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span
                className={`font-display text-base sm:text-lg lg:text-[1.35rem] font-bold tracking-tight leading-none transition-colors duration-300 ${
                  isScrolled ? "text-slate-900" : "text-white"
                }`}
              >
                True Life<span className="text-[#0066cc]"> Global</span> <span className={`hidden sm:inline text-xs sm:text-sm font-semibold ml-0.5 ${isScrolled ? "text-slate-500" : "text-white/80"}`}>Pte. Ltd.</span>
              </span>
              <span
                className={`text-[9px] sm:text-[10px] lg:text-[11px] font-sans tracking-[0.1em] uppercase font-bold transition-colors duration-300 mt-1 lg:mt-1.5 ${
                  isScrolled ? "text-[#0066cc]" : "text-blue-300 sm:text-white/90"
                }`}
              >
                CLARITY TODAY. GROWTH TOMORROW.
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isScrolled
                    ? "text-foreground-secondary hover:text-foreground hover:bg-accent-tint"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3.5">
            {/* Dark Mode Toggle */}
            {mounted && (
              <button
                onClick={toggle}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isScrolled
                    ? "text-foreground-secondary hover:text-foreground hover:bg-accent-tint"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>
            )}

            {/* Book consultation CTA */}
            <a
              href="/#contact"
              className={`inline-flex items-center px-6 py-2.5 text-sm font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 ${
                isScrolled
                  ? "bg-[#0066cc] text-white hover:bg-[#0055bb]"
                  : "bg-white text-navy-950 hover:bg-white/90"
              }`}
            >
              Book a Consultation
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-3">
            {mounted && (
              <button
                onClick={toggle}
                className={`p-2 rounded-full transition-colors ${
                  isScrolled ? "text-foreground-secondary" : "text-white/80"
                }`}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? (
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>
            )}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? "text-foreground hover:bg-accent-tint" : "text-white hover:bg-white/10"
              }`}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm lg:hidden"
              onClick={closeMobile}
              aria-hidden="true"
            />
            {/* Drawer container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-background border-l border-border shadow-xl lg:hidden z-50 overflow-y-auto"
            >
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-border">
                <a href="/" onClick={closeMobile} className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-white p-1 shadow-sm border border-border flex-shrink-0 overflow-hidden">
                    <Image
                      src="/videos/logotruelifeglobal.jpeg"
                      alt="True Life Global Logo"
                      width={36}
                      height={36}
                      className="w-full h-full object-contain rounded-md"
                    />
                  </div>
                  <div>
                    <span className="font-display text-sm font-bold text-foreground block leading-tight">
                      True Life<span className="text-[#0066cc]"> Global</span>
                    </span>
                    <span className="text-[8px] font-mono text-accent-readable uppercase tracking-wider block font-semibold mt-0.5">
                      Clarity Today. Growth Tomorrow.
                    </span>
                  </div>
                </a>
                <button
                  onClick={closeMobile}
                  className="p-2 rounded-lg text-foreground-secondary hover:text-foreground transition-colors"
                  aria-label="Close menu"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <div className="p-5 flex flex-col gap-1.5">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    className="px-4 py-3.5 text-base font-medium text-foreground-secondary hover:text-foreground hover:bg-accent-tint rounded-xl transition-all"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-6 pt-6 border-t border-border">
                  <a
                    href="/#contact"
                    onClick={closeMobile}
                    className="block w-full text-center px-6 py-4 text-sm font-semibold rounded-full bg-[#0066cc] text-white hover:bg-[#0055bb] transition-all"
                  >
                    Book a Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
