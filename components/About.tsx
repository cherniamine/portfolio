"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import AnimatedCounter from "./ui/AnimatedCounter";
import { stats } from "@/data/certifications";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-line">
      <div className="section-container">
        <SectionTitle
          eyebrow="01 - Profil"
          title="Ingenieur data et IA, avec un pied solide dans le web et le cloud."
        />

        <div className="grid md:grid-cols-[280px_1fr] gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden border border-line aspect-[9/10]"
          >
            <Image
              src="/images/profile.jpg"
              alt="Cherni Mohamed Amine"
              fill
              className="object-cover"
            />
          </motion.div>

          <div>
            <div className="space-y-4 text-dim max-w-2xl mb-10">
              <p>
                Diplome National d'Ingenieur en Informatique, specialite
                Intelligence Artificielle et Data Science, obtenu a
                l'Universite Centrale Tunisie en 2026, apres une Licence
                Nationale en Big Data et Analyse de Donnees decrochee en 2023.
              </p>
              <p>
                Mon parcours m'a amene de la banque au cloud, en passant par
                l'IA generative et les applications metier. Aujourd'hui, je
                me concentre sur des systemes utiles en production : AIOps,
                supervision intelligente, dashboards KPI et assistants IA.
                Je fais aussi du frontend avec React pour construire des
                interfaces propres et rapides.
              </p>
              <p>
                Je travaille bien quand il faut croiser la technique avec des
                contraintes reelles : volumetrie, latence, explication des
                modeles et besoins metiers.
              </p>
              <p>
                Centres d'interet: boxe, musculation, technologie, innovation,
                voyages et decouverte de cultures.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-line rounded-xl p-5 bg-surface"
                >
                  <div className="text-2xl text-accent">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix ?? ""}
                    />
                  </div>
                  <div className="text-xs text-dim mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
