import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import SubPageHero from "@/components/SubPageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Free Consultation | True Life Global",
  description:
    "Request a free consultation for corporate accounting, audit, tax, or courier services. Registered office at Toa Payoh Industrial Park, Singapore.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <SubPageHero 
        title="Let's Connect" 
        subtitle="Get a free consultation for your corporate service or logistics needs in Singapore." 
        badge="CONTACT US" 
      />
      <Contact />
      <FAQ />
      <Footer />
    </>
  );
}
