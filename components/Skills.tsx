"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiPython,
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiAngular,
  SiReact,
  SiSpring,
  SiFastapi,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BrainCircuit, MessageSquareText, Search, BarChart3, Cloud } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import { TiltCard } from "./ui/TiltCard";
import { skills } from "@/data/skills";


// logo réel de marque quand il existe, sinon icône générique en repli
const skillLogos: Record<string, { icon: IconType; color: string }> = {
  code2: { icon: SiPython, color: "#3776AB" },
  braces: { icon: SiJavascript, color: "#F7DF1E" },
  coffee: { icon: FaJava, color: "#E76F00" },
  database: { icon: SiMysql, color: "#4479A1" },
  layers3: { icon: SiMongodb, color: "#47A248" },
  "brain-circuit": { icon: BrainCircuit, color: "#7C5CFF" },
  "message-square-text": { icon: MessageSquareText, color: "#22D3EE" },
  search: { icon: Search, color: "#22D3EE" },
  "bar-chart-3": { icon: BarChart3, color: "#F0A93A" },
  triangle: { icon: SiAngular, color: "#DD0031" },
  atom: { icon: SiReact, color: "#61DAFB" },
  sprout: { icon: SiSpring, color: "#6DB33F" },
  zap: { icon: SiFastapi, color: "#009688" },
  cloud: { icon: Cloud, color: "#0089D6" },
  container: { icon: SiDocker, color: "#2496ED" },
  "git-branch": { icon: SiGit, color: "#F05032" },
};

export default function Skills() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const cardMotion = (index: number) => ({
    initial: { opacity: 0, y: 28, scale: 0.96, filter: "blur(4px)" },
    whileInView: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
    viewport: { once: true, amount: 0.35 },
    transition: {
      duration: 0.55,
      delay: index * 0.05,
      ease: "easeOut",
    },
  });

  function scrollByCard(direction: 1 | -1) {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * 260, behavior: "smooth" });
  }

  function updateProgress() {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? (el.scrollLeft / max) * 100 : 0);
  }

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateProgress);
    updateProgress();
    return () => el.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <section id="skills" className="py-24 border-t border-line">
      <div className="section-container">
        <SectionTitle
          eyebrow="02 · Compétences"
          title="Boîte à outils"
          description="Fais défiler avec les flèches pour explorer toutes mes compétences."
        />

        <div className="relative">
          {/* Flèche gauche */}
          <button
            onClick={() => scrollByCard(-1)}
            aria-label="Précédent"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-11 h-11 rounded-full border border-accent/40 bg-surface flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors hidden sm:flex"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Carrousel */}
          <motion.div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-1 py-2"
          >
            {skills.map((skill, index) => {
              const logo = skillLogos[skill.icon] ?? {
                icon: BrainCircuit,
                color: "#7C5CFF",
              };
              const Icon = logo.icon;

              return (
                <TiltCard
                  key={skill.name}
                  className="snap-start shrink-0 w-[220px] border border-line rounded-xl p-5 bg-surface hover:border-accent/50 transition-colors"
                  motionProps={cardMotion(index) as any}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${logo.color}1A` }}
                  >
                    <Icon size={28} color={logo.color} />
                  </div>
                  <div className="font-medium text-sm mb-1">{skill.name}</div>
                  <div className="text-xs text-dim mb-3 line-clamp-2 h-8">
                    {skill.description}
                  </div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[0.7rem] text-dim">
                      Niveau
                    </span>
                    <span className="font-mono text-[0.7rem] text-accent">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-line overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: logo.color,
                      }}
                    />
                  </div>
                </TiltCard>
              );
            })}
          </motion.div>

          {/* Flèche droite */}
          <button
            onClick={() => scrollByCard(1)}
            aria-label="Suivant"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-11 h-11 rounded-full border border-accent/40 bg-surface flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors hidden sm:flex"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Barre de progression du scroll */}
        <div className="h-1 rounded-full bg-line mt-6 overflow-hidden">
          <div
            className="h-full bg-gradient-accent rounded-full transition-all duration-150"
            style={{ width: `${Math.max(progress, 6)}%` }}
          />
        </div>
      </div>
    </section>
  );
}
