import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO = ({
  title = "PaPa Trading - India's Leading Trading Education & Tools Platform",
  description = "Master stock trading with PaPa Trading's professional mentorship, Pro Trend Indicator, and Scanner Suite. Learn from NISM-certified analysts. Join 1000+ successful traders across India. Get 95% accurate trading signals for NSE, BSE, Forex & Crypto.",
  keywords = "stock trading course, trading mentorship India, Pro Trend Indicator, stock scanner, intraday trading, swing trading, technical analysis, trading education, NISM certified, NSE trading, BSE trading, forex trading, cryptocurrency trading, trading signals, stock market course, learn trading India",
  image = "https://images.unsplash.com/photo-1639768939489-025b90ba9f23",
  url = "https://papatrading.com",
}: SEOProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "PaPa Trading",
    description: description,
    url: url,
    logo: image,
    sameAs: [
      "https://twitter.com/papatrading",
      "https://facebook.com/papatrading",
      "https://instagram.com/papatrading",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9594160436",
      contactType: "Customer Service",
      email: "work.vaibhavraut@gmail.com",
      availableLanguage: ["English", "Hindi"],
    },
    offers: {
      "@type": "Offer",
      description: "Elite Trading Mentorship Program",
      price: "29999",
      priceCurrency: "INR",
    },
  };

  const courseStructuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Elite Trading Mentorship Program",
    description: "Comprehensive 1-month trading course with 8 live sessions by NISM-certified analysts",
    provider: {
      "@type": "Organization",
      name: "PaPa Trading",
    },
    offers: {
      "@type": "Offer",
      price: "29999",
      priceCurrency: "INR",
    },
    educationalLevel: "Beginner to Advanced",
    courseCode: "PAPA-ELITE-2025",
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="PaPa Trading" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="PaPa Trading" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <script type="application/ld+json">{JSON.stringify(courseStructuredData)}</script>
    </Helmet>
  );
};

export default SEO;