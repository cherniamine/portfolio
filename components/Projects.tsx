"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Download, ExternalLink, PlayCircle, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import SectionTitle from "./ui/SectionTitle";
import Badge from "./ui/Badge";
import { TiltCard } from "./ui/TiltCard";
import { projectIcons, type Project, type ProjectMedia } from "@/data/projects";
import { useLanguage } from "./LanguageProvider";
import { localeContent } from "@/data/translations";

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
      <Image src={media.src} alt={media.title} fill className="object-contain" />
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
  const { language } = useLanguage();
  const reducedMotion = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!project) return;

    previouslyFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setSelectedIndex((current) => (current + 1) % (project.media?.length ?? 1));
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setSelectedIndex((current) => (current - 1 + (project.media?.length ?? 1)) % (project.media?.length ?? 1));
      }

      if (event.key === "Tab") {
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables || focusables.length === 0) {
          event.preventDefault();
          return;
        }
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    dialogRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedRef.current?.focus();
    };
  }, [project, onClose]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [project?.slug]);

  const media = project?.media?.[selectedIndex] ?? project?.media?.[0];

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.25 }}
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: reducedMotion ? 0 : 0.25 }}
            className="section-container flex min-h-full items-start py-8"
            onClick={(event) => event.stopPropagation()}
          >
            <motion.div
              layoutId={`project-card-surface-${project.slug}`}
              className="w-full overflow-hidden rounded-3xl border border-line bg-[#0f1016] shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-line px-6 py-4">
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-dim">{project.org}</div>
                  <h3 className="mt-1 font-display text-xl font-semibold text-text">
                    {project.emoji} {project.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-dim transition-colors hover:border-accent hover:text-text"
                  aria-label={localeContent.projects.modal.close[language]}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="grid gap-0 lg:grid-cols-[1.5fr_0.9fr]">
                <div className="border-b border-line lg:border-b-0 lg:border-r lg:border-line">
                  <div className="aspect-[16/10] bg-black p-2">
                    {media ? (
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={media.src}
                          initial={{ opacity: 0, x: 40 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -40 }}
                          transition={{ duration: reducedMotion ? 0 : 0.35, ease: "easeInOut" }}
                          className="h-full w-full"
                        >
                          <MediaPreview media={media} />
                        </motion.div>
                      </AnimatePresence>
                    ) : (
                      <div className="flex h-full items-center justify-center text-dim">
                        {localeContent.projects.modal.noMedia[language]}
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

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: reducedMotion ? 0 : 0.1, duration: reducedMotion ? 0 : 0.25 }}
                  className="space-y-6 p-6"
                >
                  <p className="text-sm leading-6 text-dim">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <motion.div key={tag} whileHover={{ y: -2, scale: 1.04 }} transition={{ duration: 0.2 }}>
                        <Badge>{tag}</Badge>
                      </motion.div>
                    ))}
                  </div>

                  {project.metrics?.length ? (
                    <div className="grid grid-cols-2 gap-3">
                      {project.metrics.map((metric, index) => (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: reducedMotion ? 0 : 0.12 + index * 0.04, duration: reducedMotion ? 0 : 0.2 }}
                          className="rounded-2xl border border-line bg-surface p-4"
                        >
                          <div className="font-display text-xl font-semibold text-cyan">{metric.value}</div>
                          <div className="mt-1 text-xs text-dim">{metric.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  ) : null}

                  {media?.note ? (
                    <div className="rounded-2xl border border-line bg-surface p-4 text-sm text-dim">{media.note}</div>
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
                          <span className="text-dim">{localeContent.projects.modal.open[language]}</span>
                        </a>
                      ))}
                    </div>
                  ) : null}

                  <div className="flex flex-wrap gap-3 pt-2">
                    <motion.a
                      href={project.media?.[0]?.src ?? "#"}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
                    >
                      <ExternalLink size={16} />
                      {localeContent.projects.modal.viewMain[language]}
                    </motion.a>
                    <motion.a
                      href="/project-media/cv/cv-cherni-mohamed-amine.pdf"
                      download
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
                    >
                      <Download size={16} />
                      {localeContent.projects.modal.downloadCv[language]}
                    </motion.a>
                    {project.githubUrl ? (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                        className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
                      >
                        <ExternalLink size={16} />
                        {localeContent.projects.modal.github[language]}
                      </motion.a>
                    ) : null}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProjectCard({
  project,
  index,
  featured,
  hoveredIndex,
  onHoverChange,
  onOpen,
  language,
}: {
  project: Project;
  index: number;
  featured?: boolean;
  hoveredIndex: number | null;
  onHoverChange: (index: number | null) => void;
  onOpen: (project: Project) => void;
  language: "fr" | "en";
}) {
  const reducedMotion = useReducedMotion();
  const glowRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: "50%", y: "50%" });
  const supportsInteractiveHover = typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const isDimmed = supportsInteractiveHover && hoveredIndex !== null && hoveredIndex !== index;
  const iconMeta = projectIcons[project.slug] ?? projectIcons.default;
  const ProjectIcon = iconMeta.icon;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!supportsInteractiveHover || reducedMotion || !glowRef.current) return;
    const rect = glowRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setPointer({ x: `${x}px`, y: `${y}px` });
  };

  const handlePointerLeave = () => {
    if (!supportsInteractiveHover) return;
    setPointer({ x: "50%", y: "50%" });
    onHoverChange(null);
  };

  const glowStyle = { ["--x" as string]: pointer.x, ["--y" as string]: pointer.y } as CSSProperties;

  const cardContent = (
    <>
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          ...glowStyle,
          background: "radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(124, 92, 255, 0.16), transparent 44%)",
        }}
      />
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-lg"
            style={{ backgroundColor: `${iconMeta.color}1A`, color: iconMeta.color }}
          >
            <ProjectIcon size={22} />
          </div>
          <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-dim">
            {project.media?.length ?? 0} {localeContent.projects.media[language]}
          </span>
        </div>

        <span className="font-mono text-xs uppercase tracking-wide text-dim">{project.org}</span>
        <h3 className="mb-2 mt-2 text-sm font-semibold">{project.title}</h3>
        <p className="mb-4 flex-1 text-sm text-dim">{project.description}</p>

        {project.metrics && (
          <div className="mb-4 flex flex-wrap gap-2">
            {project.metrics.map((metric) => (
              <Badge key={metric.label} tone="success">
                {metric.value}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <motion.div key={tag} whileHover={{ y: -2, scale: 1.04 }} transition={{ duration: 0.2 }}>
              <Badge>{tag}</Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );

  if (featured) {
    return (
      <TiltCard
        className={`group relative z-10 mb-6 grid w-full gap-8 overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-[#181822] to-[#12121A] p-8 text-left transition-transform md:grid-cols-[1.4fr_1fr] md:p-10 ${
          isDimmed ? "opacity-90" : "opacity-100"
        }`}
        motionProps={{
          role: "button",
          tabIndex: 0,
          onKeyDown: (event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              onOpen(project);
            }
          },
          onClick: () => onOpen(project),
          onPointerEnter: () => {
            if (supportsInteractiveHover) {
              onHoverChange(index);
            }
          },
          onPointerMove: handlePointerMove,
          onPointerLeave: handlePointerLeave,
          initial: reducedMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.97 },
          whileInView: reducedMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 },
          viewport: { once: true, margin: "-80px" },
          transition: reducedMotion ? { duration: 0 } : { duration: 0.45, type: "spring", stiffness: 220, damping: 18 },
          whileHover: reducedMotion ? undefined : { y: -8, scale: 1.01, rotateX: 1.5, rotateY: -1.5, boxShadow: "0 30px 70px rgba(3, 7, 18, 0.35)" },
          whileTap: reducedMotion ? undefined : { scale: 0.98 },
          layoutId: `project-card-surface-${project.slug}`,
        }}
      >
        <div className="relative z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan">{project.org}</span>
          <h3 className="mt-3 mb-3 font-display text-2xl font-semibold">
            {project.emoji} {project.title}
          </h3>
          <p className="mb-5 text-dim">{project.description}</p>
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <motion.div key={tag} whileHover={{ y: -2, scale: 1.04 }} transition={{ duration: 0.2 }}>
                <Badge>{tag}</Badge>
              </motion.div>
            ))}
          </div>
          <div className="inline-flex items-center gap-2 text-sm text-accent">
            {localeContent.projects.open[language]} <ArrowUpRight size={16} />
          </div>
        </div>

        {project.metrics && (
          <div className="relative z-10 grid grid-cols-2 gap-4">
            {project.metrics.map((metric, metricIndex) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reducedMotion ? 0 : 0.1 + metricIndex * 0.04, duration: reducedMotion ? 0 : 0.2 }}
                className="text-center md:text-left"
              >
                <div className="font-display text-2xl font-semibold text-cyan">{metric.value}</div>
                <div className="mt-1 text-xs text-dim">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        )}
      </TiltCard>
    );
  }

  return (
    <TiltCard
      className={`group relative z-10 flex min-h-[250px] w-full flex-col overflow-hidden rounded-xl border border-line bg-surface p-6 text-left transition-colors hover:border-accent/40 ${
        isDimmed ? "opacity-90" : "opacity-100"
      }`}
      motionProps={{
        role: "button",
        tabIndex: 0,
        onKeyDown: (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onOpen(project);
          }
        },
        onClick: () => onOpen(project),
        onPointerEnter: () => {
          if (supportsInteractiveHover) {
            onHoverChange(index);
          }
        },
        onPointerMove: handlePointerMove,
        onPointerLeave: handlePointerLeave,
        initial: reducedMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.97 },
        whileInView: reducedMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 },
        viewport: { once: true, margin: "-60px" },
        transition: reducedMotion ? { duration: 0 } : { duration: 0.45, delay: index * 0.08, type: "spring", stiffness: 220, damping: 18 },
        whileHover: reducedMotion ? undefined : { y: -8, scale: 1.02, rotateX: 1.5, rotateY: -1.5, boxShadow: "0 24px 55px rgba(3, 7, 18, 0.3)" },
        whileTap: reducedMotion ? undefined : { scale: 0.98 },
        layoutId: `project-card-surface-${project.slug}`,
      }}
    >
      {cardContent}
    </TiltCard>
  );
}

export default function Projects() {
  const { language } = useLanguage();
  const reducedMotion = useReducedMotion();
  const projectItems = localeContent.projects.items[language] as Project[];
  const featured = projectItems.find((p) => p.featured) ?? null;
  const rest = projectItems.filter((p) => !p.featured);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projectCountLabel = useMemo(() => localeContent.projects.count[language](projectItems.length), [language, projectItems.length]);

  return (
    <section id="projects" className="py-24 border-t border-line">
      <div className="section-container">
        <SectionTitle
          eyebrow={localeContent.projects.eyebrow[language]}
          title={localeContent.projects.title[language]}
          description={localeContent.projects.description[language]}
        />

        {featured && (
          <ProjectCard
            project={featured}
            index={-1}
            featured
            hoveredIndex={hoveredIndex}
            onHoverChange={setHoveredIndex}
            onOpen={setActiveProject}
            language={language}
          />
        )}

        <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-widest text-dim">
          <span>{localeContent.projects.hint[language]}</span>
          <span>{projectCountLabel}</span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              hoveredIndex={hoveredIndex}
              onHoverChange={setHoveredIndex}
              onOpen={setActiveProject}
              language={language}
            />
          ))}
        </div>
      </div>

      <ProjectModal key={activeProject?.slug ?? "none"} project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
