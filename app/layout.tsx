import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cherni Mohamed Amine - Ingenieur Data Science & IA",
  description:
    "Portfolio de Cherni Mohamed Amine, ingenieur en Intelligence Artificielle et Data Science. AIOps, RAG, LLM, cloud, web et data analytics.",
  openGraph: {
    title: "Cherni Mohamed Amine - Ingenieur Data Science & IA",
    description:
      "Portfolio de Cherni Mohamed Amine, ingenieur en Intelligence Artificielle et Data Science.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-body bg-bg text-text antialiased">{children}</body>
    </html>
  );
}
