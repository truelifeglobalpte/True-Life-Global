import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courier & Express Logistics Services | True Life Global",
  description:
    "Secure document courier, parcel delivery, scheduled runs, and corporate logistics solutions across Singapore with full accountability.",
};

export default function CourierServicePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Category */}
          <span className="text-xs font-mono uppercase tracking-[0.15em] text-accent-readable">
            Service Line — 03
          </span>
          
          <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-foreground leading-tight">
            Courier & Express Logistics Services
          </h1>

          <p className="mt-6 text-xl text-foreground-secondary leading-relaxed font-light">
            Providing secure document delivery and express parcel routing across Singapore 
            with the same compliance accountability we bring to bookkeeping.
          </p>

          <div className="my-10 border-t border-border" />

          {/* Detailed Content */}
          <div className="space-y-10 text-foreground-secondary">
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground">
                Time-Sensitive Documents & Parcel Courier
              </h2>
              <p className="mt-4 leading-relaxed">
                We understand that delivery isn&apos;t just about getting a box from point A to B — 
                it is about trust, legal deadlines, and reliability. We treat confidential business papers, 
                audited physical logs, and customer goods with strict hand-off procedures.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl bg-background-alt border border-border">
                <h3 className="font-display font-semibold text-foreground text-lg">
                  Document Delivery
                </h3>
                <p className="mt-2 text-sm leading-relaxed">
                  Confidential handling of contracts, corporate resolutions, tax files, and ACRA compliance prints.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background-alt border border-border">
                <h3 className="font-display font-semibold text-foreground text-lg">
                  Parcel Services
                </h3>
                <p className="mt-2 text-sm leading-relaxed">
                  Express delivery for e-commerce, office supplies, promotional kits, or product deliveries.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background-alt border border-border">
                <h3 className="font-display font-semibold text-foreground text-lg">
                  Scheduled Corporate Runs
                </h3>
                <p className="mt-2 text-sm leading-relaxed">
                  Daily or weekly office routing support for multiple branches or partner structures.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background-alt border border-border">
                <h3 className="font-display font-semibold text-foreground text-lg">
                  Secure Handling
                </h3>
                <p className="mt-2 text-sm leading-relaxed">
                  Proof of delivery (POD), real-time delivery status notifications, and high-value cargo care.
                </p>
              </div>
            </div>

            <div className="bg-accent-tint/30 p-6 rounded-xl border border-accent/20">
              <h4 className="font-display font-bold text-foreground text-lg">
                The Ledger-Route Integration
              </h4>
              <p className="mt-2 text-sm leading-relaxed">
                By using True Life Global, you gain access to an operational model that coordinates 
                both back-office admin and transport requirements. Streamline invoice routing and physical document 
                submission seamlessly.
              </p>
            </div>

            <div className="pt-8">
              <Link
                href="/#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-navy-950 text-paper-0 hover:bg-navy-800 dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-400 transition-all duration-150 shadow-sm"
              >
                Book Courier Services
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
