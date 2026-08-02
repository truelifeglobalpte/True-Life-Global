"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import WhyUs from "@/components/WhyUs";
import Director from "@/components/Director";
import Testimonials from "@/components/Testimonials";
import Careers from "@/components/Careers";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <JsonLd />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <HowWeWork />
        <Director />
        <Testimonials />
        <WhyUs />
        <Careers />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Widgets */}
      <WhatsAppButton isChatOpen={isChatOpen} />
      <ChatBot onStateChange={setIsChatOpen} />
    </>
  );
}
