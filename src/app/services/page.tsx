import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubPageHero from "@/components/SubPageHero";
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
      <SubPageHero 
        title="Services Tailored to Your Business" 
        subtitle="We provide Singapore SMEs with corporate accounting services and dependable express courier logistics." 
        badge="OUR SERVICES" 
      />
      <main className="flex-1 py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
