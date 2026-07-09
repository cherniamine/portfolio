"use client";

import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { useLanguage } from "./LanguageProvider";
import { localeContent } from "@/data/translations";

export default function Certifications() {
  const { language } = useLanguage();
  const certifications = localeContent.certifications.items[language];
  const languages = localeContent.certifications.languageItems[language];
  const education = localeContent.certifications.educationItems[language];
  return (
    <section id="credentials" className="border-t border-line py-24">
      <div className="section-container">
        <SectionTitle
          eyebrow={localeContent.certifications.eyebrow[language]}
          title={localeContent.certifications.title[language]}
        />

        <div className="grid gap-12 md:grid-cols-[1.2fr_0.9fr]">
          <div className="space-y-3">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-dim">
              {localeContent.certifications.certifications[language]}
            </h3>
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center justify-between gap-4 border-b border-line pb-3 last:border-none"
              >
                <span className="flex items-center gap-3 text-sm">
                  <span className="text-lg">{cert.emoji}</span>
                  {cert.title}
                </span>
                <span className="whitespace-nowrap font-mono text-xs text-dim">
                  {cert.org}
                </span>
              </motion.div>
            ))}

            <div className="mt-8">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-dim">
                {localeContent.certifications.languages[language]}
              </h3>
              {languages.map((lang) => (
                <div key={lang.name} className="mb-5">
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span>{lang.name}</span>
                    <span className="font-mono text-xs text-dim">
                      {lang.level}
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-line">
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

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-dim">
              {localeContent.certifications.education[language]}
            </h3>
            <div className="space-y-4">
              {education.map((item, index) => (
                <motion.article
                  key={item.year}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-2xl border border-line bg-surface p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-widest text-accent">
                        {item.year}
                      </div>
                      <h4 className="mt-2 text-lg font-semibold">{item.degree}</h4>
                      <p className="mt-1 text-sm text-dim">{item.focus}</p>
                    </div>
                    <span className="rounded-full border border-line px-3 py-1 text-[10px] uppercase tracking-widest text-dim">
                      {item.highlight}
                    </span>
                  </div>

                  <div className="mt-4 text-sm text-text">{item.school}</div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
