"use client";

import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { certifications, languages } from "@/data/certifications";

export default function Certifications() {
  return (
    <section className="py-24 border-t border-line">
      <div className="section-container">
        <SectionTitle
          eyebrow="05 · Certifications & langues"
          title="Formations complémentaires"
        />

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12">
          <div className="space-y-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center justify-between border-b border-line pb-3 last:border-none"
              >
                <span className="flex items-center gap-3 text-sm">
                  <span className="text-lg">{cert.emoji}</span>
                  {cert.title}
                </span>
                <span className="font-mono text-xs text-dim whitespace-nowrap">
                  {cert.org}
                </span>
              </motion.div>
            ))}
          </div>

          <div>
            {languages.map((lang) => (
              <div key={lang.name} className="mb-5">
                <div className="flex justify-between text-sm mb-1.5">
                  <span>{lang.name}</span>
                  <span className="font-mono text-xs text-dim">
                    {lang.level}
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-line overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="h-full rounded-full bg-accent"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
