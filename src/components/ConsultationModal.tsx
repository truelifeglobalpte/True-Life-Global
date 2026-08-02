"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    service: "",
    companySize: "",
    contactMode: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Click outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Build a comprehensive message containing additional details
      const fullMessage = `
[CONSULTATION REQUEST]
Phone/WhatsApp: ${formData.phone}
Preferred Contact Mode: ${formData.contactMode || "Not Specified"}
Company Stage/Size: ${formData.companySize || "Not Specified"}

User Message:
${formData.message}
      `.trim();

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          service: formData.service,
          companyName: formData.companyName,
          message: fullMessage,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        // Reset form data after successful submit
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          companyName: "",
          service: "",
          companySize: "",
          contactMode: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="bg-background border border-card-border w-full max-w-2xl rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col z-10 my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-card-bg border border-card-border text-foreground hover:text-accent hover:border-accent/40 flex items-center justify-center transition-all active:scale-95 z-20 shadow-sm"
              aria-label="Close modal"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Modal Body */}
            <div className="p-8 sm:p-10 max-h-[90vh] overflow-y-auto">
              {status === "success" ? (
                /* SUCCESS VIEW */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground">Consultation Booked</h3>
                    <p className="mt-2 text-foreground-secondary font-light max-w-md">
                      Thank you! Your request has been received. One of our Singapore business experts will reach out to you within one business day.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      onClose();
                    }}
                    className="btn-wow-effect px-6 py-2.5 bg-accent text-white rounded-full text-sm font-semibold hover:bg-accent-readable shadow-sm"
                  >
                    Close Window
                  </button>
                </motion.div>
              ) : (
                /* FORM VIEW */
                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent font-semibold block mb-1">
                      Request Consultation
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground leading-tight">
                      Book a discovery session
                    </h2>
                    <p className="mt-2 text-sm text-foreground-secondary font-light leading-relaxed">
                      Fill out the form below to register your interest. We will review your requirements and coordinate a discovery call.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-foreground-secondary/70">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="e.g. John Tan"
                          className="w-full px-4 py-3 text-sm bg-background-alt border border-card-border rounded-xl text-foreground placeholder:text-foreground-secondary/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                        />
                      </div>

                      {/* Phone / WhatsApp */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-foreground-secondary/70">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. +65 9123 4567"
                          className="w-full px-4 py-3 text-sm bg-background-alt border border-card-border rounded-xl text-foreground placeholder:text-foreground-secondary/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                        />
                      </div>

                      {/* Company Name */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-foreground-secondary/70">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="e.g. Acme Services Pte Ltd"
                          className="w-full px-4 py-3 text-sm bg-background-alt border border-card-border rounded-xl text-foreground placeholder:text-foreground-secondary/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                        />
                      </div>

                      {/* Email Address */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-foreground-secondary/70">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="tan@company.com"
                          className="w-full px-4 py-3 text-sm bg-background-alt border border-card-border rounded-xl text-foreground placeholder:text-foreground-secondary/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                        />
                      </div>

                      {/* Service Dropdown */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-foreground-secondary/70">
                          Service Required *
                        </label>
                        <select
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 text-sm bg-background-alt border border-card-border rounded-xl text-foreground focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                        >
                          <option value="" disabled>Select a service...</option>
                          <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
                          <option value="Auditing Services">Auditing Services</option>
                          <option value="Courier & Logistics">Courier & Logistics</option>
                          <option value="Tax Consultancy">Tax Consultancy</option>
                          <option value="Singapore Company Registration">Singapore Company Registration</option>
                          <option value="Other Business Advisory">Other Business Advisory</option>
                        </select>
                      </div>

                      {/* Company size */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-foreground-secondary/70">
                          Company Stage / Size *
                        </label>
                        <select
                          name="companySize"
                          required
                          value={formData.companySize}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 text-sm bg-background-alt border border-card-border rounded-xl text-foreground focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                        >
                          <option value="" disabled>Select scale...</option>
                          <option value="New Startup / Incorporation">New Startup / Incorporation</option>
                          <option value="Micro SME (<100 txn/mo)">Micro SME (&lt;100 txn/mo)</option>
                          <option value="Medium SME (100-500 txn/mo)">Medium SME (100-500 txn/mo)</option>
                          <option value="Large Enterprise (>500 txn/mo)">Large Enterprise (&gt;500 txn/mo)</option>
                        </select>
                      </div>

                      {/* Contact Mode */}
                      <div className="space-y-1.5 sm:col-span-2">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-foreground-secondary/70">
                          Preferred Contact Method *
                        </label>
                        <select
                          name="contactMode"
                          required
                          value={formData.contactMode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 text-sm bg-background-alt border border-card-border rounded-xl text-foreground focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                        >
                          <option value="" disabled>Select contact preference...</option>
                          <option value="WhatsApp Message">WhatsApp Message</option>
                          <option value="Phone Call">Direct Phone Call</option>
                          <option value="Email Response">Email Response</option>
                        </select>
                      </div>

                    </div>

                    {/* Detailed Message */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-foreground-secondary/70">
                        Detailed Message / Requirements *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please brief us on your timeline and required compliance support..."
                        className="w-full px-4 py-3 text-sm bg-background-alt border border-card-border rounded-xl text-foreground placeholder:text-foreground-secondary/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent resize-none"
                      />
                    </div>

                    {/* Error display */}
                    {status === "error" && (
                      <p className="text-xs text-red-500 font-mono tracking-wide">{errorMessage}</p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="btn-wow-effect w-full py-3.5 text-sm font-semibold rounded-full bg-accent text-white hover:bg-accent-readable shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Submitting Enquiry...
                        </>
                      ) : (
                        <>
                          Submit Consultation Request
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
