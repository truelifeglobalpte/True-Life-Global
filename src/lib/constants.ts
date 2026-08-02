// Site-wide constants for True Life Global

export const SITE_URL = "https://truelifeglobal.com";

export const COMPANY = {
  name: "True Life Global Pte. Ltd.",
  shortName: "True Life Global",
  uen: "202626385E",
  incorporatedDate: "11 June 2026",
  address: "1003 Toa Payoh Industrial Park, #07-1501, Singapore 319075",
  email: "info@truelifeglobal.com",
  phone: "+65 XXXX XXXX",
  whatsapp: "65XXXXXXXX",
  hours: "Mon–Fri 9:00 AM–6:00 PM · Sat 9:00 AM–1:00 PM",
  capital: "SGD 100K",
  status: "Live Company",
} as const;

export const NAV_LINKS = [
  { label: "About Us", href: "/#about" },
  { label: "Our Services", href: "/#services" },
  { label: "How We Work", href: "/#how-we-work" },
  { label: "Director", href: "/#director" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Careers", href: "/#careers" },
  { label: "Insights", href: "/#faq" },
] as const;

export const SERVICES = [
  {
    index: "01",
    title: "Accounting & Bookkeeping",
    slug: "accounting",
    description:
      "Accurate, timely bookkeeping and financial record management to keep your accounts in order and ready for IRAS reporting.",
    tags: ["AP/AR Management", "Reconciliation", "Payroll", "ACRA Compliance"],
  },
  {
    index: "02",
    title: "Auditing Services",
    slug: "auditing",
    description:
      "Independent audits conducted with rigor and transparency, ensuring your financial statements meet Singapore regulatory standards.",
    tags: ["Independent Audit", "Regulatory Standards", "Financial Statements"],
  },
  {
    index: "03",
    title: "Courier Services & Logistics",
    slug: "courier",
    description:
      "Reliable document and parcel delivery within Singapore, ideal for businesses needing secure, time-sensitive courier solutions.",
    tags: ["Document Delivery", "Parcel Services", "Secure Handling"],
  },
] as const;

export const STEPS = [
  {
    number: 1,
    title: "Understanding Your Requirements",
    description:
      "Discovery sessions to understand your business goals, accounting needs, and compliance requirements.",
  },
  {
    number: 2,
    title: "Compliance & Execution",
    description:
      "ACRA-compliant accounting, audit, tax, or courier solutions implemented with precision and care.",
  },
  {
    number: 3,
    title: "Continuous Advisory & Support",
    description:
      "Ongoing partnership with proactive guidance and responsive support for your Singapore business.",
  },
] as const;

export const WHY_US = [
  {
    title: "Fully Compliant & Accountable",
    description:
      "ACRA-registered private limited company (UEN: 202626385E), incorporated 11 June 2026. A real, accountable Singapore business.",
  },
  {
    title: "Two Essential Services Under One Roof",
    description:
      "Accounting, Auditing & Tax Consultancy together with Courier & Delivery, acting as one dependable partner for financial and logistics support.",
  },
  {
    title: "Compliance-First Approach",
    description:
      "Operating in line with ACRA and IRAS requirements, ensuring your finances are managed with compliance, care, and professionalism.",
  },
  {
    title: "Transparent & Affordable Pricing",
    description:
      "No hidden charges. Clear, competitive pricing tailored for SMEs, startups, and growing businesses in Singapore.",
  },
  {
    title: "Fast & Reliable Operations",
    description:
      "Whether tax submissions or document delivery, we work around your deadlines with speed and attention to detail.",
  },
  {
    title: "Built for Singapore Businesses",
    description:
      "From GST and ACRA compliance to last-mile delivery across Singapore, providing practical solutions that match real business needs.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "The professionalism demonstrated by True Life Global is exceptional. They handled our GST filing and tax consultancy with deep knowledge of Singapore IRAS regulations.",
    name: "Michael Chen",
    role: "Director, MNC Singapore",
    initials: "MC",
  },
  {
    quote:
      "True Life Global transformed our financial operations with meticulous attention to detail and compliance-first approach. Their ACRA registration gave us full confidence in every engagement.",
    name: "Sarah Thompson",
    role: "CFO, Tech Startup",
    initials: "ST",
  },
  {
    quote:
      "Working with True Life Global has been a game-changer for our Singapore business. Their transparent pricing and ACRA-registered status make them a trusted partner in our success.",
    name: "David Lim",
    role: "Founder, SME Singapore",
    initials: "DL",
  },
  {
    quote:
      "True Life Global delivers exactly what they promise: reliable, compliant, and professional. Their team managed our bookkeeping and payroll with precision, giving us full peace of mind.",
    name: "Katijah Beebi Binte Mohamed Hanifa",
    role: "Business Owner, Singapore",
    initials: "KB",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What services do you provide?",
    answer:
      "True Life Global provides Accounting & Bookkeeping (monthly records, AP/AR, payroll, GST, ACRA compliance), Auditing Services (statutory and internal audits to Singapore standards), and Courier & Logistics Services (secure document and parcel delivery across Singapore).",
  },
  {
    question: "Do you support international clients?",
    answer:
      "Yes, we work with Singapore-incorporated entities regardless of where their directors or shareholders are based. We regularly assist foreign entrepreneurs establishing and managing their Singapore business presence.",
  },
  {
    question: "How do you ensure compliance?",
    answer:
      "Every engagement is executed against current ACRA and IRAS requirements. We stay updated on regulatory changes and proactively inform clients of any compliance obligations, ensuring your business is always audit-ready.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply book a consultation through the contact form on our website or reach out via email or WhatsApp. We will schedule an initial discovery session to understand your needs and propose a tailored solution, typically within one business day.",
  },
  {
    question: "What industries do you specialise in?",
    answer:
      "We primarily serve SMEs and startups across professional services, trading, e-commerce, and logistics. However, our financial expertise extends across diverse sectors. Contact us and we will advise whether we are the right fit for your business.",
  },
] as const;

export const SERVICE_OPTIONS = [
  "Accounting & Bookkeeping",
  "Auditing",
  "Tax Consultancy",
  "Courier & Logistics",
  "Not sure yet",
] as const;
