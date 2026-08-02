"use client";

import { useEffect, useState, useCallback } from "react";

export function useDarkMode() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initTheme = () => {
      const stored = localStorage.getItem("theme");
      let activeDark = false;
      if (stored === "dark") {
        activeDark = true;
        document.documentElement.classList.add("dark");
      } else if (stored === "light") {
        activeDark = false;
        document.documentElement.classList.remove("dark");
      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        activeDark = prefersDark;
        if (prefersDark) {
          document.documentElement.classList.add("dark");
        }
      }
      setIsDark(activeDark);
      setMounted(true);
    };

    const timer = setTimeout(initTheme, 0);
    return () => clearTimeout(timer);
  }, []);

  const toggle = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  }, []);

  return { isDark, toggle, mounted };
}
