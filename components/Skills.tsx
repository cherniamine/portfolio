"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiAngular,
  SiDocker,
  SiFastapi,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiSpring,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import {
  BarChart3,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  MessageSquareText,
  Search,
  Sparkles,
  Triangle,
  Zap,
} from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import { useLanguage } from "./LanguageProvider";
import { localeContent } from "@/data/translations";

type SkillIcon = {
  icon?: IconType;
  color?: string;
  imageSrc?: string;
};

const skillLogos: Record<string, SkillIcon> = {
  code2: { icon: SiPython, color: "#3776AB" },
  braces: { icon: SiJavascript, color: "#F7DF1E" },
  typescript: { icon: SiTypescript, color: "#3178C6" },
  coffee: { icon: FaJava, color: "#E76F00" },
  database: { icon: SiMysql, color: "#4479A1" },
  layers3: { icon: SiMongodb, color: "#47A248" },
  pandas: { icon: SiPandas, color: "#150458" },
  numpy: { icon: SiNumpy, color: "#4D77CF" },
  scikit: { icon: SiScikitlearn, color: "#F7931E" },
  "brain-circuit": { icon: BrainCircuit, color: "#7C5CFF" },
  search: { icon: Search, color: "#22D3EE" },
  "message-square-text": { icon: MessageSquareText, color: "#22D3EE" },
  "bar-chart-3": { icon: BarChart3, color: "#F0A93A" },
  "power-bi": { imageSrc: "/images/logos/powerbi.svg", color: "#F2C811" },
  oracle: { imageSrc: "/images/logos/oracle.svg", color: "#C74634" },
  triangle: { icon: SiAngular, color: "#DD0031" },
  atom: { icon: SiReact, color: "#61DAFB" },
  sprout: { icon: SiSpring, color: "#6DB33F" },
  zap: { icon: SiFastapi, color: "#009688" },
  cloud: { icon: Cloud, color: "#0089D6" },
  container: { icon: SiDocker, color: "#2496ED" },
  "git-branch": { icon: SiGit, color: "#F05032" },
};

const categoryIcons: Record<string, IconType> = {
  Langages: Code2,
  "Data Science & IA": Sparkles,
  Frontend: Triangle,
  Backend: Zap,
  "Cloud & DevOps": Cloud,
  "Bases de données": Database,
};

export default function Skills() {
  const { language } = useLanguage();
  const groupedSkills = localeContent.skills.categoryOrder.map((category) => ({
    category,
    items: localeContent.skills.items[language].filter((skill) => skill.category === category),
  }));

  return (
    <section id="skills" className="border-t border-line py-24">
      <div className="section-container">
        <SectionTitle
          eyebrow={localeContent.skills.eyebrow[language]}
          title={localeContent.skills.title[language]}
          description={localeContent.skills.description[language]}
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {groupedSkills.map((group, index) => {
            const copy = localeContent.skills.categories[language];
            const CategoryIcon = categoryIcons[group.category];
            const lead = copy.lead[group.category as keyof typeof copy.lead];
            const accent = copy.accent[group.category as keyof typeof copy.accent];

            return (
              <motion.article
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <CategoryIcon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{localeContent.skills.categoryLabels[language][group.category as keyof (typeof localeContent.skills.categoryLabels)[typeof language]]}</h3>
                    <p className="mt-1 text-sm text-dim">{lead}</p>
                  </div>
                </div>

                <p className="mb-5 text-sm leading-6 text-dim">{accent}</p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {group.items.map((skill) => {
                    const logo = skillLogos[skill.icon] ?? {
                      icon: Sparkles,
                      color: "#7C5CFF",
                    };
                    const Icon = logo.icon;

                    return (
                      <div
                        key={skill.name}
                        className="rounded-2xl border border-line bg-[#10111a] p-4 transition-colors hover:border-accent/50"
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl"
                            style={{ backgroundColor: `${logo.color ?? "#7C5CFF"}1A` }}
                          >
                            {logo.imageSrc ? (
                              <Image
                                src={logo.imageSrc}
                                alt={`${skill.name} logo`}
                                width={24}
                                height={24}
                                className="h-6 w-6 object-contain"
                              />
                            ) : Icon ? (
                              <Icon size={22} color={logo.color} />
                            ) : null}
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-medium">{skill.name}</div>
                            <div className="mt-1 text-xs leading-5 text-dim">
                              {skill.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
