"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const LEADERS = [
  {
    name: "Soundarrajan Vaithiyanathan",
    role: "Founder",
    image: "/founder-ceo.jpg",
    imagePosition: "object-[center_25%]",
    bio: [
      "Soundarrajan Vaithiyanathan is the visionary Founder of True Life Global Pte. Ltd., a Singapore-incorporated company delivering integrated accounting and logistics services. With over 14 years of progressive financial and operations experience across multinational corporations in Singapore and India, he brings deep expertise in financial management, compliance, and business operations.",
      "His journey spans industry leaders including Genpact, Capgemini, Teleperformance, and Rohlig Blue Service, where he managed high-volume financial transactions, led cross-functional teams, and implemented SAP ERP systems across global environments. He is a certified US GAAP professional from Ernst & Young (2026) and holds an MBA.",
      "Driven by a passion for empowering SMEs with reliable financial guidance, Soundarrajan founded True Life Global to bridge the gap between professional financial services and everyday business needs in Singapore.",
    ],
    badges: ["US GAAP (EY)", "MBA", "14+ Yrs Experience"],
    tags: ["Genpact", "Capgemini", "Teleperformance", "Rohlig Blue Service", "Ernst & Young"],
    stats: [
      { stat: "14+", label: "Years Experience" },
      { stat: "US GAAP", label: "Certified (EY 2026)" },
      { stat: "MBA", label: "Business Management" },
    ],
  },
  {
    name: "Kannan Sivadeeskannan K",
    role: "Chief Executive Officer (CEO)",
    image: "/coo.jpg",
    imagePosition: "object-[center_10%]",
    bio: [
      "Kannan Sivadeeskannan K serves as the Chief Executive Officer (CEO) of True Life Global Pte. Ltd., where he oversees the company's day-to-day operations, business processes, and strategic execution. He is committed to building efficient systems, enhancing organizational performance, and driving sustainable business growth.",
      "Kannan holds a B.B.A., LL.B. (Hons) from Bharath Institute of Higher Education and Research, Chennai, providing him with a strong foundation in business management, corporate governance, and legal compliance. He is also pursuing an MBA in Human Resource Management at Alagappa University.",
      "As CEO, he works closely with the executive leadership team to optimize operations, ensure regulatory compliance, enhance client satisfaction, and support the long-term vision of True Life Global Pte. Ltd.",
    ],
    badges: ["BBA LL.B (Hons)", "MBA (HRM)", "Operations"],
    tags: ["Business Management", "Corporate Governance", "Legal Compliance", "HR Management"],
    stats: [
      { stat: "BBA", label: "LL.B. (Hons)" },
      { stat: "MBA", label: "HR Management (Pursuing)" },
      { stat: "CEO", label: "Strategic Leadership" },
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

        {/* Leadership Cards */}
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">
          {LEADERS.map((leader, idx) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15 + idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl bg-card-bg border border-card-border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Top accent gradient bar */}
              <div className="h-1 w-full bg-gradient-to-r from-accent/60 via-accent to-accent/30" />

              <div className="p-5 sm:p-8">
                {/* Profile header */}
                <div className="flex flex-col xs:flex-row sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mb-6 sm:mb-7">
                  {/* Photo */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-card-border flex-shrink-0 shadow-sm">
                    <Image
                      src={leader.image!}
                      alt={leader.name}
                      width={96}
                      height={96}
                      className={`w-full h-full object-cover ${leader.imagePosition}`}
                      priority
                    />
                  </div>

                  {/* Name & Role */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-foreground leading-tight">
                      {leader.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-accent font-medium mt-1">{leader.role}</p>
                    {/* Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-2 sm:mt-2.5">
                      {leader.badges.map((b) => (
                        <span
                          key={b}
                          className="px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-mono uppercase tracking-wide bg-accent-tint text-accent rounded-full border border-accent/15"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-7">
                  {leader.stats.map((s) => (
                    <div
                      key={s.label}
                      className="p-2 sm:p-3 rounded-xl bg-background border border-border text-center"
                    >
                      <p className="text-xs sm:text-sm font-display font-bold text-accent leading-none">{s.stat}</p>
                      <p className="text-[9px] sm:text-[10px] text-foreground-secondary mt-1 leading-snug">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Bio */}
                <div className="space-y-3 text-sm text-foreground-secondary leading-relaxed font-light">
                  {leader.bio.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {leader.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] font-mono tracking-wide text-foreground-secondary bg-background rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
