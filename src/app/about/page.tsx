import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Director from "@/components/Director";
import SubPageHero from "@/components/SubPageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | True Life Global",
  description:
    "Learn about True Life Global Pte. Ltd., a Singapore registered partner offering dual business essentials: accounting, audit & tax advisory and courier logistics.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <SubPageHero 
        title="About True Life Global" 
        subtitle="A specialized Singapore partner delivering corporate advisory, audit services, and express logistics." 
        badge="ABOUT US" 
      />
      <About />
      <Director />
      <Footer />
    </>
  );
}
