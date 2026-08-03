import { COMPANY, FAQ_ITEMS } from "@/lib/constants";

export default function JsonLd() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": COMPANY.name,
    "image": "https://truelifeglobal.com/og-image.png",
    "@id": "https://truelifeglobal.com/#organization",
    "url": "https://truelifeglobal.com",
    "telephone": COMPANY.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1003 Toa Payoh Industrial Park, #07-1501",
      "addressLocality": "Singapore",
      "postalCode": "319075",
      "addressCountry": "SG"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "13:00"
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY.name,
    "alternateName": COMPANY.shortName,
    "url": "https://truelifeglobal.com",
    "logo": "https://truelifeglobal.com/apple-touch-icon.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": COMPANY.phone,
      "contactType": "customer service",
      "areaServed": "SG",
      "availableLanguage": "en"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1003 Toa Payoh Industrial Park, #07-1501",
      "addressLocality": "Singapore",
      "postalCode": "319075",
      "addressCountry": "SG"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
