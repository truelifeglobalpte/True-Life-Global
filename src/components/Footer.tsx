import Image from "next/image";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/80 border-t border-white/5">
      {/* Faint ledger-route line echo */}
      <div className="relative h-px w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1 shadow-sm flex-shrink-0 overflow-hidden">
                <Image
                  src="/videos/logotruelifeglobal.jpeg"
                  alt="True Life Global Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white block leading-tight">
                  True Life<span className="text-gold-500"> Global</span> <span className="text-xs font-normal text-white/60">Pte. Ltd.</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-gold-500 block font-semibold mt-0.5">
                  ― CLARITY TODAY. GROWTH TOMORROW.
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed max-w-md text-white/60">
              True Life Global Pte. Ltd. is a Singapore-registered company delivering trusted
              financial expertise and reliable courier support, committed to precision, compliance,
              and strategic clarity for your business.
            </p>
            <p className="mt-4 text-xs font-mono uppercase tracking-wider text-white/40">
              UEN {COMPANY.uen} · Est. {COMPANY.incorporatedDate}
            </p>
            {/* Services quick summary */}
            <div className="mt-5 flex flex-wrap gap-2">
              {["Accounting", "Auditing", "Tax Advisory", "Courier & Logistics"].map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-0.5 text-[10px] font-mono tracking-wide text-white/50 border border-white/10 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-gold-500 transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm text-white/60">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-white/30 mb-1">Address</p>
                <p>{COMPANY.address}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-white/30 mb-1">Office Hours</p>
                <p>{COMPANY.hours}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-white/30 mb-1">Email</p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-gold-500 transition-colors duration-150"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Singapore Registered · UEN {COMPANY.uen} · ACRA Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}
