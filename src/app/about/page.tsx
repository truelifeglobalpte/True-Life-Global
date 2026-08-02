import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Director from "@/components/Director";
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
      <div className="pt-16">
        <About />
        <Director />
      </div>
      <Footer />
    </>
  );
}
