import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://truelifeglobal.com"),
  title: {
    default: "True Life Global | Accounting, Audit & Courier Services in Singapore",
    template: "%s | True Life Global",
  },
  description:
    "ACRA-registered Singapore firm offering accounting, bookkeeping, audit, tax consultancy, and courier logistics for SMEs. Book a free consultation.",
  keywords: [
    "Singapore accounting",
    "ACRA registered",
    "bookkeeping Singapore",
    "audit services Singapore",
    "tax consultancy Singapore",
    "courier services Singapore",
    "SME accounting",
    "True Life Global",
  ],
  authors: [{ name: "True Life Global Pte. Ltd." }],
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://truelifeglobal.com",
    siteName: "True Life Global",
    title: "True Life Global | Accounting, Audit & Courier Services in Singapore",
    description:
      "ACRA-registered Singapore firm offering accounting, bookkeeping, audit, tax consultancy, and courier logistics for SMEs. Book a free consultation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "True Life Global | Accounting, Audit & Courier Services in Singapore",
    description:
      "ACRA-registered Singapore firm offering accounting, bookkeeping, audit, tax consultancy, and courier logistics for SMEs.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

// Inline script to prevent dark mode flash on initial load
const darkModeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    } catch(e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: darkModeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
