import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Careers from "@/components/Careers";
import SubPageHero from "@/components/SubPageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | True Life Global",
  description:
    "Join True Life Global Pte. Ltd. and build your career in Singapore accounting practice and business logistics. Learn about our structured growth paths.",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <SubPageHero 
        title="Careers at True Life Global" 
        subtitle="Grow and thrive in a dynamic, supportive professional ecosystem." 
        badge="CAREERS" 
      />
      <Careers />
      <Footer />
    </>
  );
}
