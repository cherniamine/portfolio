import type { Metadata } from "next";
import { headers } from "next/headers";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") ?? "";
  const isEnglish = acceptLanguage.toLowerCase().startsWith("en");

  return {
    metadataBase: new URL(siteUrl),
    title: isEnglish
      ? "Cherni Mohamed Amine - Data Science & AI Engineer"
      : "Cherni Mohamed Amine - Ingénieur Data Science & IA",
    description: isEnglish
      ? "Portfolio of Cherni Mohamed Amine, AI and Data Science engineer. AIOps, RAG, LLM, cloud, web and data analytics."
      : "Portfolio de Cherni Mohamed Amine, ingénieur en Intelligence Artificielle et Data Science. AIOps, RAG, LLM, cloud, web et data analytics.",
    keywords: [
      "Data Science",
      "Intelligence Artificielle",
      "AIOps",
      "RAG",
      "FastAPI",
      "Angular",
      "Spring Boot",
      "Azure",
    ],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: isEnglish
        ? "Cherni Mohamed Amine - Data Science & AI Engineer"
        : "Cherni Mohamed Amine - Ingénieur Data Science & IA",
      description: isEnglish
        ? "Portfolio of Cherni Mohamed Amine, AI and Data Science engineer."
        : "Portfolio de Cherni Mohamed Amine, ingénieur en Intelligence Artificielle et Data Science.",
      type: "website",
      url: "/",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: isEnglish
        ? "Cherni Mohamed Amine - Data Science & AI Engineer"
        : "Cherni Mohamed Amine - Ingénieur Data Science & IA",
      description: isEnglish
        ? "Portfolio of Cherni Mohamed Amine, AI and Data Science engineer."
        : "Portfolio de Cherni Mohamed Amine, ingénieur en Intelligence Artificielle et Data Science.",
      images: ["/twitter-image"],
    },
  };
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cherni Mohamed Amine",
  jobTitle: "Ingénieur Data Science & Intelligence Artificielle",
  url: siteUrl,
  image: `${siteUrl}/images/profile.jpg`,
  sameAs: [
    "https://www.linkedin.com/in/cherni-mohamed-amine-40158b2b1",
    "https://github.com/cherniamine",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-body bg-bg text-text antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
