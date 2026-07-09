"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import GradientBlob from "./ui/GradientBlob";
import { SplineScene } from "./ui/splite";
import AnimatedCounter from "./ui/AnimatedCounter";
import CvModal from "./CvModal";
import { useLanguage } from "./LanguageProvider";
import { localeContent } from "@/data/translations";

function useTypewriter(words: string[], speed = 70, pause = 1600) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((index) => index + 1);
      }, 150);
    } else {
      timeout = setTimeout(() => {
        const nextLength = deleting ? text.length - 1 : text.length + 1;
        setText(current.slice(0, nextLength));
      }, deleting ? speed / 2 : speed);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const { language } = useLanguage();
  const roles = localeContent.hero.roles[language];
  const typed = useTypewriter(roles);
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative min-h-[92vh] overflow-hidden flex items-center"
      >
        <GradientBlob
          className="w-[420px] h-[420px] top-[-120px] left-[-100px]"
          color="accent"
        />
        <GradientBlob
          className="w-[380px] h-[380px] bottom-[-140px] right-[-80px]"
          color="cyan"
          slow
        />

        <div className="section-container relative z-10 py-24 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-6 flex flex-wrap gap-2"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-xs font-medium text-text">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {localeContent.hero.availability[language]}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="font-display text-5xl font-semibold leading-[1.04] md:text-6xl"
            >
              Cherni Mohamed
              <br />
              Amine
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-5 h-10"
            >
              <span className="font-mono text-lg md:text-xl text-cyan">
                {typed}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-dim"
            >
              {localeContent.hero.intro[language]}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                type="button"
                onClick={() => setCvOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent/90"
              >
                <FileText size={16} />
                {localeContent.hero.ctaResume[language]}
              </button>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
              >
                {localeContent.hero.ctaProjects[language]} <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-medium text-dim transition-colors hover:text-text"
              >
                {localeContent.hero.ctaContact[language]}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.48 }}
              className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {localeContent.hero.stats[language].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-line bg-surface px-4 py-4"
                >
                  <div className="text-xl text-accent">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-widest text-dim">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative mt-6 h-[320px] lg:mt-0 lg:h-[520px]"
          >
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full"
            />
          </motion.div>
        </div>
      </section>

      <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </>
  );
}
