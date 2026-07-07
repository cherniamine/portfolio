"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Download, ExternalLink, PlayCircle, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import SectionTitle from "./ui/SectionTitle";
import Badge from "./ui/Badge";
import { projects, type Project, type ProjectMedia } from "@/data/projects";

function mediaIcon(kind: ProjectMedia["kind"]) {
  if (kind === "video") return <PlayCircle size={14} />;
  return <ArrowUpRight size={14} />;
}

function MediaPreview({ media }: { media: ProjectMedia }) {
  if (media.kind === "video") {
    return (
      <video
        key={media.src}
        controls
        playsInline
        className="h-full w-full rounded-2xl bg-black object-contain"
      >
        <source src={media.src} />
      </video>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-line bg-surface">
      <Image
        src={media.src}
        alt={media.title}
        fill
        className="object-contain"
      />
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!project) return;
    setSelectedIndex(0);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  const media = project?.media?.[selectedIndex] ?? project?.media?.[0];

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="section-container flex min-h-full items-start py-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="w-full overflow-hidden rounded-3xl border border-line bg-[#0f1016] shadow-2xl">
              <div className="flex items-center justify-between border-b border-line px-6 py-4">
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-dim">
                    {project.org}
                  </div>
                  <h3 className="mt-1 font-display text-xl font-semibold text-text">
                    {project.emoji} {project.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-dim transition-colors hover:border-accent hover:text-text"
                  aria-label="Fermer"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="grid gap-0 lg:grid-cols-[1.5fr_0.9fr]">
                <div className="border-b border-line lg:border-b-0 lg:border-r lg:border-line">
                  <div className="aspect-[16/10] bg-black">
                    {media ? (
                      <MediaPreview media={media} />
                    ) : (
                      <div className="flex h-full items-center justify-center text-dim">
                        Aucun media disponible
                      </div>
                    )}
                  </div>
                  <div className="border-t border-line px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {project.media?.map((item, index) => {
                        const active = index === selectedIndex;
                        return (
                          <button
                            key={item.src}
                            type="button"
                            onClick={() => setSelectedIndex(index)}
                            className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs transition-colors ${
                              active
                                ? "border-accent bg-accent/10 text-text"
                                : "border-line text-dim hover:border-accent/40 hover:text-text"
                            }`}
                          >
                            {mediaIcon(item.kind)}
                            {item.title}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="space-y-6 p-6">
                  <p className="text-sm leading-6 text-dim">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>

                  {project.metrics?.length ? (
                    <div className="grid grid-cols-2 gap-3">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-2xl border border-line bg-surface p-4"
                        >
                          <div className="font-display text-xl font-semibold text-cyan">
                            {metric.value}
                          </div>
                          <div className="mt-1 text-xs text-dim">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {media?.note ? (
                    <div className="rounded-2xl border border-line bg-surface p-4 text-sm text-dim">
                      {media.note}
                    </div>
                  ) : null}

                  {project.media?.length ? (
                    <div className="space-y-3">
                      {project.media.map((item) => (
                        <a
                          key={item.src}
                          href={item.src}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-between rounded-2xl border border-line px-4 py-3 text-sm transition-colors hover:border-accent/50 hover:bg-white/5"
                        >
                          <span className="inline-flex items-center gap-2">
                            {mediaIcon(item.kind)}
                            {item.title}
                          </span>
                          <span className="text-dim">Ouvrir</span>
                        </a>
                      ))}
                    </div>
                  ) : null}

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={project.media?.[0]?.src ?? "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
                    >
                      <ExternalLink size={16} />
                      Voir le media principal
                    </a>
                    <a
                      href="/project-media/cv/cv-cherni-mohamed-amine.pdf"
                      download
                      className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
                    >
                      <Download size={16} />
                      Télécharger le CV
                    </a>
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
                      >
                        <ExternalLink size={16} />
                        GitHub du projet
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projectCountLabel = useMemo(() => `${projects.length} projets`, []);

  return (
    <section id="projects" className="py-24 border-t border-line">
      <div className="section-container">
        <SectionTitle
          eyebrow="04 · Projets"
          title="Projets & réalisations"
          description="Sept projets, sept contextes différents - du monitoring télécom à l'imagerie médicale, en passant par la finance et l'IA générative."
        />

        {featured && (
          <motion.button
            type="button"
            onClick={() => setActiveProject(featured)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-6 grid w-full gap-8 rounded-2xl border border-line bg-gradient-to-br from-[#181822] to-[#12121A] p-8 text-left transition-transform hover:-translate-y-0.5 md:grid-cols-[1.4fr_1fr] md:p-10"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-cyan">
                {featured.org}
              </span>
              <h3 className="mt-3 mb-3 font-display text-2xl font-semibold">
                {featured.emoji} {featured.title}
              </h3>
              <p className="mb-5 text-dim">{featured.description}</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 text-sm text-accent">
                Ouvrir captures, démos et GitHub <ArrowUpRight size={16} />
              </div>
            </div>

            {featured.metrics && (
              <div className="grid grid-cols-2 gap-4">
                {featured.metrics.map((m) => (
                  <div key={m.label} className="text-center md:text-left">
                    <div className="font-display text-2xl font-semibold text-cyan">
                      {m.value}
                    </div>
                    <div className="mt-1 text-xs text-dim">{m.label}</div>
                  </div>
                ))}
              </div>
            )}
          </motion.button>
        )}

        <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-widest text-dim">
          <span>Cliquer pour ouvrir le détail</span>
          <span>{projectCountLabel}</span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <motion.button
              key={project.slug}
              type="button"
              onClick={() => setActiveProject(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="flex min-h-[250px] w-full flex-col rounded-xl border border-line bg-surface p-6 text-left transition-colors hover:border-accent/40"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-soft text-2xl">
                  {project.emoji}
                </div>
                <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-dim">
                  {project.media?.length ?? 0} media
                </span>
              </div>

              <span className="font-mono text-xs uppercase tracking-wide text-dim">
                {project.org}
              </span>
              <h3 className="mb-2 mt-2 text-sm font-semibold">{project.title}</h3>
              <p className="mb-4 flex-1 text-sm text-dim">{project.description}</p>

              {project.metrics && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.metrics.map((m) => (
                    <Badge key={m.label} tone="success">
                      {m.value}
                    </Badge>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
