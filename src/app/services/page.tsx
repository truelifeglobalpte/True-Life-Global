import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Accounting, Auditing & Courier Logistics",
  description:
    "Explore our professional services including corporate accounting, statutory audits, tax advisory, and express courier logistics in Singapore.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-accent-readable">
              True Life Global
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-foreground">
              Services Tailored to Your Business
            </h1>
            <p className="mt-4 text-lg text-foreground-secondary leading-relaxed">
              We provide Singapore SMEs with accurate financial compliance work and
              dependable delivery logistics — handled with equal dedication to quality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.slug}
                className="p-8 rounded-2xl bg-card-bg border border-card-border shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.15em] text-accent-readable">
                    {service.index}
                  </span>
                  <h2 className="mt-4 text-2xl font-display font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-foreground-secondary leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono tracking-wide text-foreground-secondary bg-background-alt rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <a
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-accent-readable hover:text-accent"
                  >
                    Explore Service Details
                    <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
