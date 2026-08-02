import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Careers from "@/components/Careers";
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
      <div className="pt-16">
        <Careers />
      </div>
      <Footer />
    </>
  );
}
