"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import GradientBlob from "./ui/GradientBlob";
import { SplineScene } from "./ui/splite";

const roles = [
  "Ingenieur Data Science & IA",
  "Developpeur Web",
  "Data Analyst",
  "AI & Cloud Developer",
];

function useTypewriter(words: string[], speed = 70, pause = 1600) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        speed
      );
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        speed / 2
      );
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[92vh] flex items-center"
    >
      <GradientBlob className="w-[420px] h-[420px] top-[-120px] left-[-100px]" color="accent" />
      <GradientBlob
        className="w-[380px] h-[380px] bottom-[-140px] right-[-80px]"
        color="cyan"
        slow
      />

      <div className="section-container relative z-10 py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        {/* Colonne texte */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent bg-accent-soft px-4 py-2 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Disponible pour de nouvelles opportunites
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-semibold text-5xl md:text-6xl leading-[1.05] mb-6"
          >
            Cherni Mohamed
            <br />
            Amine
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="h-10 mb-6"
          >
            <span className="font-mono text-lg md:text-xl text-cyan">
              {typed}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-dim text-lg max-w-xl mb-10"
          >
            Je conçois des solutions data et IA orientées production : AIOps,
            RAG, detection d&apos;anomalies, dashboards KPI et applications web
            metier. Je navigue entre Python, Java, React, Angular, Azure et les
            usages concrets du terrain.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="/project-media/cv/cv-cherni-mohamed-amine.pdf"
              download
              className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              <Download size={16} /> Telecharger le CV
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-line px-6 py-3.5 rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Voir mes projets <ArrowRight size={16} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-dim hover:text-text transition-colors"
            >
              Contact
            </a>
          </motion.div>
        </div>
        

        {/* Colonne robot 3D — masquée sur mobile pour la perf */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative h-[520px]"
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}