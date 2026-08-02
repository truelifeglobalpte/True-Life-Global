"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const LEADERS = [
  {
    name: "Dr. Sivadeeskannan K",
    role: "Chief Executive Officer",
    image: "/coo.jpg",
    imagePosition: "object-[center_10%]",
    bio: [
      "Dr. Sivadeeskannan K is the Chief Executive Officer (CEO) of True Life Global Pte. Ltd., where he manages the daily operations, business processes, and strategic initiatives of the company. He is dedicated to creating efficient systems, improving organizational performance, and fostering sustainable business growth.",
      "He earned a B.B.A. and LL.B. (Hons) from Bharath Institute of Higher Education and Research in Chennai, and has received an Honorary Doctorate in Social Services. Additionally, he is currently pursuing an MBA in Human Resource Management at Alagappa University.",
      "In his role as CEO, he collaborates closely with the executive leadership team to streamline operations, ensure compliance with regulations, enhance client satisfaction, and support the long-term goals of True Life Global Pte. Ltd.",
    ],
    badges: ["Honorary Doctorate", "BBA LL.B (Hons)", "MBA (HRM)"],
    tags: ["Honorary Doctorate", "Business Management", "Corporate Governance", "Legal Compliance", "HR Management"],
    stats: [
      { stat: "BBA", label: "LL.B. (Hons)" },
      { stat: "MBA", label: "HR Management (Pursuing)" },
      { stat: "CEO", label: "Strategic Leadership" },
    ],
  },
  {
    name: "Soundarrajan Vaithiyanathan",
    role: "Founder & Chief Operating Officer",
    image: "/founder-ceo.jpg",
    imagePosition: "object-[center_25%]",
    bio: [
      "Soundarrajan Vaithiyanathan is the innovative Founder & Chief operating officer of True Life Global Pte. Ltd a company based in Singapore that provides comprehensive accounting and logistics solutions. With more than 14 years of extensive experience in finance and operations within multinational firms in Singapore and India, he possesses significant knowledge in financial management, compliance, and business operations.",
      "His career includes tenures at industry giants such as Genpact, Capgemini, Teleperformance, and Rohlig Blue Service, where he oversaw high-volume financial transactions, directed cross-functional teams, and executed SAP ERP systems in global settings. He is a certified US GAAP professional from Ernst & Young (2026) and has earned an MBA.",
    ],
    badges: ["US GAAP (EY)", "MBA", "14+ Yrs Experience"],
    tags: ["Genpact", "Capgemini", "Teleperformance", "Rohlig Blue Service", "Ernst & Young"],
    stats: [
      { stat: "14+", label: "Years Experience" },
      { stat: "US GAAP", label: "Certified (EY 2026)" },
      { stat: "MBA", label: "Business Management" },
    ],
  },
];

export default function Director() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="director"
      ref={ref}
      className="section-padding bg-background-alt border-t border-border overflow-hidden relative"
    >
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[25vw] rounded-full glow-spot-1 filter blur-3xl pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-mono uppercase tracking-[0.15em] text-accent font-semibold mb-3">
            Leadership
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
            Meet the{" "}
            <span className="editorial-text font-normal text-accent italic">people behind the firm</span>
          </h2>
        </motion.div>

        {/* Leadership Cards (Side-by-side layout with mid-sized, non-stretching portraits) */}
        <div className="space-y-12 sm:space-y-16">
          {LEADERS.map((leader, idx) => (
            <div
              key={leader.name}
              className="grid md:grid-cols-12 gap-6 lg:gap-8 items-start"
            >
              {/* Portrait Image Card (Left: 4 columns, mid-sized) */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.15 + idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-4 w-full max-w-[280px] md:max-w-none mx-auto"
              >
                <div className="aspect-[4/5] rounded-3xl bg-card-bg border border-card-border overflow-hidden relative shadow-sm interactive-glow-card group">
                  {/* Top accent gradient bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-accent/60 via-accent to-accent/30 absolute top-0 left-0 z-20" />
                  
                  <Image
                    src={leader.image!}
                    alt={leader.name}
                    fill
                    className={`object-cover transition-transform duration-700 group-hover:scale-103 ${leader.imagePosition}`}
                    priority
                  />
                  {/* Visual frame highlights */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 z-10">
                    <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/60">True Life Global</p>
                    <p className="text-sm font-bold text-white tracking-wide mt-0.5">{leader.role}</p>
                  </div>
                </div>
              </motion.div>

              {/* Bio & Info Card (Right: 8 columns) */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.2 + idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-8"
              >
                <div className="rounded-3xl bg-card-bg border border-card-border shadow-sm p-6 sm:p-8 flex flex-col justify-between relative h-full interactive-glow-card">
                  {/* Top accent gradient bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-accent/60 via-accent to-accent/30 absolute top-0 left-0 rounded-t-3xl" />

                  <div>
                    {/* Name & Role Header */}
                    <div className="pt-2">
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground leading-tight">
                        {leader.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-accent font-semibold mt-1.5">{leader.role}</p>
                    </div>

                    {/* Bio Description */}
                    <div className="mt-6 space-y-4 text-sm sm:text-base text-foreground-secondary leading-relaxed font-light">
                      {leader.bio.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
