"use client";

import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { useLanguage } from "./LanguageProvider";
import { localeContent } from "@/data/translations";

export default function Experience() {
  const { language } = useLanguage();
  const experiences = localeContent.experience.items[language];
  return (
    <section id="experience" className="py-24 border-t border-line">
      <div className="section-container">
        <SectionTitle eyebrow={localeContent.experience.eyebrow[language]} title={localeContent.experience.title[language]} />

        <div className="relative pl-8">
          <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-line" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pb-10 last:pb-0"
            >
              <span
                className={`absolute left-[-33px] top-1 w-3 h-3 rounded-full border-2 ${
                  exp.current
                    ? "bg-accent border-accent shadow-[0_0_12px_#7C5CFF]"
                    : "bg-bg border-accent"
                }`}
              />
              <div className="font-mono text-xs text-accent mb-1">
                {exp.date}
              </div>
              <h3 className="font-semibold text-lg">{exp.company}</h3>
              <div className="text-dim text-sm mb-3">{exp.role}</div>
              <ul className="space-y-1.5">
                {exp.missions.map((mission) => (
                  <li
                    key={mission}
                    className="text-sm text-dim pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-accent"
                  >
                    {mission}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
