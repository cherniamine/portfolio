"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mb-12"
    >
      <span className="font-mono text-xs uppercase tracking-widest text-accent">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3 text-text">
        {title}
      </h2>
      {description && (
        <p className="text-dim mt-3 text-base">{description}</p>
      )}
    </motion.div>
  );
}
