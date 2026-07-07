"use client";

import { motion } from "framer-motion";
import type { ComponentType } from "react";
import {
  Atom,
  BarChart3,
  BrainCircuit,
  Braces,
  Cloud,
  Code2,
  Coffee,
  Container,
  Database,
  GitBranch,
  Layers3,
  MessageSquareText,
  Search,
  Sprout,
  Triangle,
  Zap,
} from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import { skills, skillCategories } from "@/data/skills";

const skillIcons = {
  code2: Code2,
  braces: Braces,
  coffee: Coffee,
  database: Database,
  layers3: Layers3,
  "brain-circuit": BrainCircuit,
  "message-square-text": MessageSquareText,
  search: Search,
  "bar-chart-3": BarChart3,
  triangle: Triangle,
  atom: Atom,
  sprout: Sprout,
  zap: Zap,
  cloud: Cloud,
  container: Container,
  "git-branch": GitBranch,
} as const;

const categoryIcons: Record<string, ComponentType<{ size?: number }>> = {
  "Langages": Code2,
  "Data Science & IA": BrainCircuit,
  "Developpement Web": Atom,
  "Cloud & DevOps": Cloud,
  "Bases de donnees": Database,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-line">
      <div className="section-container">
        <SectionTitle
          eyebrow="02 · Compétences"
          title="Boîte à outils"
          description="Survolez une compétence pour voir son niveau et son contexte d'utilisation."
        />

        <div className="space-y-12">
          {skillCategories.map((category) => {
            const CategoryIcon = categoryIcons[category];

            return (
              <div key={category}>
                <h3 className="font-mono text-xs uppercase tracking-widest text-dim mb-4 flex items-center gap-2">
                  {CategoryIcon ? <CategoryIcon size={13} /> : null}
                  {category}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill, i) => {
                      const SkillIcon =
                        skillIcons[skill.icon as keyof typeof skillIcons];

                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 14 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{ duration: 0.4, delay: i * 0.05 }}
                          whileHover={{ y: -3 }}
                          className="group border border-line rounded-xl p-5 bg-surface hover:border-accent/50 transition-colors"
                        >
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div className="flex items-center gap-3 min-w-0">
                              <span className="w-9 h-9 rounded-lg bg-accent-soft border border-accent/20 flex items-center justify-center text-accent shrink-0">
                                {SkillIcon ? <SkillIcon size={18} /> : null}
                              </span>
                              <span className="font-medium text-sm truncate">
                                {skill.name}
                              </span>
                            </div>
                            <span className="font-mono text-xs text-dim shrink-0">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-1.5 rounded-full bg-line overflow-hidden mb-3">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: i * 0.05 }}
                              className="h-full rounded-full bg-gradient-accent"
                            />
                          </div>
                          <p className="text-xs text-dim opacity-0 group-hover:opacity-100 transition-opacity">
                            {skill.description}
                          </p>
                        </motion.div>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
