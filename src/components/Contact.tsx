"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { COMPANY, SERVICE_OPTIONS } from "@/lib/constants";

interface FormData {
  fullName: string;
  email: string;
  service: string;
  companyName: string;
  message: string;
  honeypot: string; // spam prevention
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    service: "",
    companyName: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please tell us what you need.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) return;

    if (!validate()) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          service: formData.service,
          companyName: formData.companyName,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          service: "",
          companyName: "",
          message: "",
          honeypot: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding bg-background border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono uppercase tracking-[0.15em] text-accent-readable mb-4"
        >
          Get in Touch
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight"
        >
          Tell us what you need
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-4 text-lg text-foreground-secondary"
        >
          Reach out for a free consultation. We respond within one business day.
        </motion.p>

        <div className="mt-12 grid lg:grid-cols-[1fr_380px] gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
            noValidate
          >
            {/* Honeypot — hidden from humans */}
            <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
              <input
                type="text"
                name="honeypot"
                tabIndex={-1}
                autoComplete="off"
                value={formData.honeypot}
                onChange={handleChange}
              />
            </div>

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-1.5">
                Full Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-card-bg border ${
                  errors.fullName ? "border-red-500" : "border-card-border"
                } text-foreground placeholder:text-foreground-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors`}
                placeholder="Your full name"
              />
              {errors.fullName && (
                <p className="mt-1.5 text-sm text-red-500">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                Email <span className="text-accent">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-card-bg border ${
                  errors.email ? "border-red-500" : "border-card-border"
                } text-foreground placeholder:text-foreground-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors`}
                placeholder="you@company.com"
              />
              {errors.email && (
                <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Service Needed */}
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1.5">
                Service Needed <span className="text-accent">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-card-bg border ${
                  errors.service ? "border-red-500" : "border-card-border"
                } text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors appearance-none`}
              >
                <option value="">Select a service</option>
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1.5 text-sm text-red-500">{errors.service}</p>
              )}
            </div>

            {/* Company Name (optional) */}
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-foreground mb-1.5">
                Company Name <span className="text-foreground-secondary text-xs">(optional)</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-card-bg border border-card-border text-foreground placeholder:text-foreground-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                placeholder="Your company name"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                Message <span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 rounded-xl bg-card-bg border ${
                  errors.message ? "border-red-500" : "border-card-border"
                } text-foreground placeholder:text-foreground-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none`}
                placeholder="Tell us about your needs..."
              />
              {errors.message && (
                <p className="mt-1.5 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-wow-effect w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-full bg-navy-950 text-white hover:bg-navy-800 dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-400 transition-all duration-150 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Enquiry"
              )}
            </button>

            {/* Status messages */}
            {status === "success" && (
              <div className="p-4 rounded-xl bg-emerald-600/10 border border-emerald-600/20 text-emerald-600 dark:text-accent-secondary">
                <p className="font-medium">Thank you for reaching out.</p>
                <p className="mt-1 text-sm opacity-80">
                  We&apos;ve received your enquiry and will respond within one business
                  day. If your matter is urgent, reach us directly via WhatsApp.
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400">
                <p className="font-medium">Something went wrong.</p>
                <p className="mt-1 text-sm opacity-80">
                  Please try again, or email us directly at {COMPANY.email}.
                </p>
              </div>
            )}
          </motion.form>

          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Info Card */}
            <div className="p-6 rounded-2xl bg-card-bg border border-card-border">
              <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                Contact Details
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-foreground-secondary mb-0.5">
                      Email
                    </p>
                    <p className="text-sm text-foreground italic">To be confirmed</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-foreground-secondary mb-0.5">
                      Phone
                    </p>
                    <p className="text-sm text-foreground italic">To be confirmed</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-foreground-secondary mb-0.5">
                      Registered Office
                    </p>
                    <p className="text-sm text-foreground">{COMPANY.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-foreground-secondary mb-0.5">
                      Hours
                    </p>
                    <p className="text-sm text-foreground">{COMPANY.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* UEN Badge */}
            <div className="p-4 rounded-xl bg-accent-tint border border-accent/20 text-center">
              <p className="text-xs font-mono uppercase tracking-wider text-accent-readable">
                UEN {COMPANY.uen}
              </p>
              <p className="text-xs text-foreground-secondary mt-1">
                ACRA-Registered Singapore Entity
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
