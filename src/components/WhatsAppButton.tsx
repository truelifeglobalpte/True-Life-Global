"use client";

import { COMPANY } from "@/lib/constants";

export default function WhatsAppButton({ isChatOpen }: { isChatOpen: boolean }) {
  if (isChatOpen) return null;

  // Placeholder number until confirmed
  const message = encodeURIComponent("Hi True Life Global, I'd like to enquire about your services.");
  const link = `https://wa.me/${COMPANY.whatsapp}?text=${message}`;

  return (
    <div className="fixed bottom-20 right-5 sm:bottom-24 sm:right-6 z-50">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-whatsapp text-white hover:opacity-90 flex items-center justify-center shadow-lg transition-transform hover:scale-105 duration-150"
        aria-label="Contact True Life Global on WhatsApp"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </a>
    </div>
  );
}
