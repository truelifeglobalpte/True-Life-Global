"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}

export default function ChatBot({ onStateChange }: { onStateChange?: (isOpen: boolean) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hi there! Welcome to True Life Global. How can we help you today? You can ask me about our services, compliance, pricing, or request a consultation.",
      timestamp: new Date("2026-08-02T09:00:00.000Z"),
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [step, setStep] = useState<"chat" | "lead-name" | "lead-email" | "lead-service" | "lead-done">("chat");
  const [leadData, setLeadData] = useState({ name: "", email: "", service: "" });
  
  const chatEndRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Notify parent of open state to hide WhatsApp button if needed
  useEffect(() => {
    if (onStateChange) onStateChange(isOpen);
  }, [isOpen, onStateChange]);


  // Auto scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Accessibility: Focus trap & Esc key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const addMessage = (sender: "user" | "bot", text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        sender,
        text,
        timestamp: new Date(),
      },
    ]);
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;
    addMessage("user", text);
    setInputVal("");

    // Simulate bot response logic
    setTimeout(() => {
      const query = text.toLowerCase();
      
      // Lead collection trigger words
      if (query.includes("consult") || query.includes("book") || query.includes("quote") || query.includes("pricing") || query.includes("hire") || query.includes("enquire")) {
        setStep("lead-name");
        addMessage("bot", "I can help you get started with a consultation. To help our team prepare, may I know your full name?");
        return;
      }

      // Check FAQ items
      for (const faq of FAQ_ITEMS) {
        const keywords = faq.question.toLowerCase().replace(/[?.,]/g, "").split(" ");
        // If query has significant overlap with faq question
        const overlap = keywords.filter(word => word.length > 3 && query.includes(word));
        if (overlap.length >= 2 || (keywords.includes("compliance") && query.includes("compliance")) || (keywords.includes("international") && query.includes("international"))) {
          addMessage("bot", faq.answer);
          return;
        }
      }

      // Default response
      addMessage("bot", "Thank you for your message. Would you like to schedule a free consultation with our team? Just type 'yes' or request a consultation.");
    }, 600);
  };

  const handleLeadInput = (val: string) => {
    if (!val.trim()) return;
    setInputVal("");

    if (step === "lead-name") {
      addMessage("user", val);
      setLeadData((prev) => ({ ...prev, name: val }));
      setStep("lead-email");
      setTimeout(() => {
        addMessage("bot", `Thanks, ${val}. What is a good email address to reach you at?`);
      }, 500);
    } else if (step === "lead-email") {
      // Basic email validation
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        addMessage("bot", "That doesn't look like a valid email address. Please check and try again.");
        return;
      }
      addMessage("user", val);
      setLeadData((prev) => ({ ...prev, email: val }));
      setStep("lead-service");
      setTimeout(() => {
        addMessage("bot", "Got it. Which service are you interested in? (Accounting, Auditing, Courier, or Other)");
      }, 500);
    } else if (step === "lead-service") {
      addMessage("user", val);
      const finalData = { ...leadData, service: val };
      setLeadData(finalData);
      setStep("lead-done");
      
      // Save enquiry to console / local state for demonstration
      console.log("Captured lead via Chatbot:", finalData);
      
      setTimeout(() => {
        addMessage("bot", "Perfect. Our team has received your request and will contact you within one business day at the email you provided. Thank you!");
        setTimeout(() => {
          setStep("chat");
        }, 3000);
      }, 500);
    }
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === "chat") {
      handleSendMessage(inputVal);
    } else {
      handleLeadInput(inputVal);
    }
  };

  return (
    <div className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-50">
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-navy-950 text-gold-500 hover:bg-navy-800 dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-400 flex items-center justify-center shadow-lg transition-transform hover:scale-105 duration-150"
        aria-label="Chat with True Life Global"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-x-0 bottom-0 sm:absolute sm:inset-auto sm:bottom-18 sm:left-0 w-full sm:w-[360px] max-w-full h-[85dvh] max-h-[600px] sm:h-[480px] bg-card-bg sm:border sm:border-card-border rounded-t-2xl sm:rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] sm:shadow-2xl flex flex-col overflow-hidden z-[100]"
            role="dialog"
            aria-modal="true"
            aria-label="True Life Global Assistant Panel"
          >
            {/* Header */}
            <div className="p-4 bg-navy-950 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                <div>
                  <h3 className="text-sm font-semibold font-display">True Life Assistant</h3>
                  <p className="text-[10px] text-white/60 font-mono uppercase tracking-wider">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded transition-colors text-white/80 hover:text-white"
                aria-label="Close chat"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Messages body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-background-alt/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                      msg.sender === "user"
                        ? "bg-navy-950 text-white dark:bg-gold-500 dark:text-navy-950 rounded-br-none"
                        : "bg-card-bg border border-card-border text-foreground rounded-bl-none shadow-sm"
                    }`}
                  >
                    <p className="leading-relaxed">{msg.text}</p>
                    <span className="block text-[9px] mt-1 opacity-50 text-right font-mono">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Input area */}
            <form onSubmit={handleInputSubmit} className="p-3 bg-card-bg border-t border-card-border flex gap-2">
              <input
                type={step === "lead-email" ? "email" : "text"}
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder={
                  step === "chat"
                    ? "Ask a question..."
                    : step === "lead-name"
                    ? "Enter your name..."
                    : step === "lead-email"
                    ? "Enter your email..."
                    : "Accounting, Courier, Auditing..."
                }
                className="flex-1 px-3 py-2 text-sm bg-background-alt border border-card-border rounded-xl text-foreground placeholder:text-foreground-secondary/40 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                autoComplete="off"
                required
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-navy-950 text-white dark:bg-gold-500 dark:text-navy-950 hover:opacity-90 transition-opacity flex items-center justify-center w-10 h-10 flex-shrink-0"
                aria-label="Send message"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
