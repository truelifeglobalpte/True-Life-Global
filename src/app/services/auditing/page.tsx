import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Independent Auditing Services | True Life Global",
  description:
    "Statutory audits, regulatory compliance assessments, and independent financial statement audits conducted to Singapore regulatory standards.",
};

export default function AuditingServicePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Category */}
          <span className="text-xs font-mono uppercase tracking-[0.15em] text-accent-readable">
            Service Line — 02
          </span>
          
          <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-foreground leading-tight">
            Auditing Services
          </h1>

          <p className="mt-6 text-xl text-foreground-secondary leading-relaxed font-light">
            Providing independent financial statements verification carried out to 
            Singapore Standards on Auditing (SSAs), explained in plain language.
          </p>

          <div className="my-10 border-t border-border" />

          {/* Detailed Content */}
          <div className="space-y-10 text-foreground-secondary">
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground">
                Independent Audit Verification
              </h2>
              <p className="mt-4 leading-relaxed">
                Whether you require a statutory audit to satisfy ACRA requirements, 
                assessments for grants, or reviews requested by stakeholders, we deliver 
                rigorous audits that verify balance sheet health and risk control levels.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl bg-background-alt border border-border">
                <h3 className="font-display font-semibold text-foreground text-lg">
                  Statutory Audits
                </h3>
                <p className="mt-2 text-sm leading-relaxed">
                  Required verification for companies matching specific turnover or employee thresholds under the Companies Act.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background-alt border border-border">
                <h3 className="font-display font-semibold text-foreground text-lg">
                  Special Purpose Audits
                </h3>
                <p className="mt-2 text-sm leading-relaxed">
                  Tailored audit procedures for specific assets, compliance certifications, or partnership reporting.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background-alt border border-border">
                <h3 className="font-display font-semibold text-foreground text-lg">
                  Internal Controls Review
                </h3>
                <p className="mt-2 text-sm leading-relaxed">
                  Identifying leakages, operational vulnerabilities, and suggesting robust governance measures.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background-alt border border-border">
                <h3 className="font-display font-semibold text-foreground text-lg">
                  Grant Certifications
                </h3>
                <p className="mt-2 text-sm leading-relaxed">
                  Independent audits verifying project expenditure to meet government agency funding requirements.
                </p>
              </div>
            </div>

            <div className="bg-accent-tint/30 p-6 rounded-xl border border-accent/20">
              <h4 className="font-display font-bold text-foreground text-lg">
                Clear Communication Standard
              </h4>
              <p className="mt-2 text-sm leading-relaxed">
                We believe audits should provide actionable insight, not just a signed off document. We provide 
                our findings in clear language, highlighting systems improvements rather than just ticking boxes.
              </p>
            </div>

            <div className="pt-8">
              <Link
                href="/#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-navy-950 text-paper-0 hover:bg-navy-800 dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-400 transition-all duration-150 shadow-sm"
              >
                Request Auditing Services
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
