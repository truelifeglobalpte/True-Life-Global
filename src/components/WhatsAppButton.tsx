"use client";

import { COMPANY } from "@/lib/constants";

export default function WhatsAppButton({ isChatOpen }: { isChatOpen: boolean }) {
  if (isChatOpen) return null;

  // Placeholder number until confirmed
  const message = encodeURIComponent("Hi True Life Global, I'd like to enquire about your services.");
  const link = `https://wa.me/${COMPANY.whatsapp}?text=${message}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-whatsapp text-white hover:opacity-90 flex items-center justify-center shadow-lg transition-transform hover:scale-105 duration-150 animate-whatsapp-pulse"
        aria-label="Contact True Life Global on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="currentColor"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.23-1.372a9.92 9.92 0 0 0 4.781 1.22c5.507 0 9.99-4.479 9.99-9.988 0-2.67-1.037-5.18-2.92-7.062C17.199 3.017 14.686 2 12.012 2zm5.726 14.18c-.252.712-1.253 1.3-1.722 1.386-.43.08-1.014.158-2.906-.606-2.42-.977-3.966-3.44-4.086-3.601-.12-.162-1.01-1.343-1.01-2.56 0-1.218.636-1.817.863-2.057.226-.24.512-.3.682-.3.17 0 .341 0 .49.009.158.008.37-.06.578.441.213.515.728 1.776.79 1.903.064.127.108.275.02.449-.087.175-.132.3-.263.45-.13.15-.275.337-.393.45-.132.127-.27.266-.115.532.155.267.69 1.135 1.48 1.838.995.89 1.83 1.168 2.087 1.297.258.13.409.108.56-.065.152-.175.656-.763.83-1.025.176-.262.35-.22.593-.13.245.09 1.549.73 1.815.86.267.13.445.197.51.31.066.113.066.657-.186 1.369z" />
        </svg>
      </a>
    </div>
  );
}
