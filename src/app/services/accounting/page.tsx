import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounting & Bookkeeping Services | True Life Global",
  description:
    "Professional monthly bookkeeping, AP/AR management, bank reconciliations, payroll services, and ACRA compliance support for growing businesses in Singapore.",
};

export default function AccountingServicePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Category */}
          <span className="text-xs font-mono uppercase tracking-[0.15em] text-accent-readable">
            Service Line — 01
          </span>
          
          <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-foreground leading-tight">
            Accounting & Bookkeeping Services
          </h1>

          <p className="mt-6 text-xl text-foreground-secondary leading-relaxed font-light">
            Stay focused on scaling your business while we handle ledger maintenance, 
            payroll processing, bank reconciliations, and regulatory compliance.
          </p>

          <div className="my-10 border-t border-border" />

          {/* Detailed Content */}
          <div className="space-y-10 text-foreground-secondary">
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground">
                ACRA & IRAS Compliance Made Simple
              </h2>
              <p className="mt-4 leading-relaxed">
                Every business in Singapore is required by law to maintain proper accounting records. 
                Our team ensures your books are accurate and filed correctly under Singapore Financial Reporting Standards (SFRS).
                We handle the heavy lifting, ensuring you are audit-ready and compliance queries are resolved quickly.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl bg-background-alt border border-border">
                <h3 className="font-display font-semibold text-foreground text-lg">
                  Monthly Bookkeeping
                </h3>
                <p className="mt-2 text-sm leading-relaxed">
                  Regular updates to your general ledgers, accounts payable/receivable, and profit/loss reporting.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background-alt border border-border">
                <h3 className="font-display font-semibold text-foreground text-lg">
                  Payroll & CPF Submission
                </h3>
                <p className="mt-2 text-sm leading-relaxed">
                  Accurate monthly salary calculation, payslip generation, and timely CPF contributions.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background-alt border border-border">
                <h3 className="font-display font-semibold text-foreground text-lg">
                  GST & Corporate Tax
                </h3>
                <p className="mt-2 text-sm leading-relaxed">
                  GST registration, quarterly returns preparation, and corporate tax computation filing (Form C/C-S).
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background-alt border border-border">
                <h3 className="font-display font-semibold text-foreground text-lg">
                  Financial Statements
                </h3>
                <p className="mt-2 text-sm leading-relaxed">
                  Preparation of Compilation Reports (unaudited financial statements) matching ACRA specifications.
                </p>
              </div>
            </div>

            <div className="bg-accent-tint/30 p-6 rounded-xl border border-accent/20">
              <h4 className="font-display font-bold text-foreground text-lg">
                Why outsourcing your books to us works:
              </h4>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-accent-secondary">✓</span>
                  <span><strong>Zero Overhead:</strong> No need to hire full-time accounting staff.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-secondary">✓</span>
                  <span><strong>Direct Partner Support:</strong> Communicate with qualified operations managers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-secondary">✓</span>
                  <span><strong>Scale-Ready:</strong> Start from basic bookkeeping and add auditing or logistics as you expand.</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-navy-950 text-paper-0 hover:bg-navy-800 dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-400 transition-all duration-150 shadow-sm"
              >
                Request Accounting Consultation
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
