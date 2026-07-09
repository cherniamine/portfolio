"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import AnimatedCounter from "./ui/AnimatedCounter";
import { useLanguage } from "./LanguageProvider";
import { localeContent } from "@/data/translations";

export default function About() {
  const { language } = useLanguage();
  const aboutBlocks = localeContent.about.blocks[language];
  return (
    <section id="about" className="border-t border-line py-24">
      <div className="section-container">
        <SectionTitle
          eyebrow={localeContent.about.eyebrow[language]}
          title={localeContent.about.title[language]}
        />

        <div className="grid gap-14 md:grid-cols-[280px_1fr] items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[9/10] overflow-hidden rounded-2xl border border-line"
          >
            <Image
              src="/images/profile.jpg"
              alt="Cherni Mohamed Amine"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {aboutBlocks.map((block, index) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.42, delay: index * 0.05 }}
                  className="rounded-2xl border border-line bg-surface p-5"
                >
                  <div className="text-sm font-semibold text-text">
                    {block.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-dim">{block.text}</p>
                </motion.div>
              ))}
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}
