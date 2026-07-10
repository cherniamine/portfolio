"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, ExternalLink, FileText, Globe, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cvProfile, cvVersions, type CvLanguage } from "@/data/cv";
import { useLanguage } from "./LanguageProvider";
import { localeContent } from "@/data/translations";

type CvModalProps = {
  open: boolean;
  onClose: () => void;
};

function getDefaultLanguage(): CvLanguage {
  if (typeof navigator !== "undefined") {
    return navigator.language.toLowerCase().startsWith("en") ? "en" : "fr";
  }
  return "fr";
}

export default function CvModal({ open, onClose }: CvModalProps) {
  const { language: siteLanguage } = useLanguage();
  const [language, setLanguage] = useState<CvLanguage>(getDefaultLanguage);

  const selected = cvVersions.find((version) => version.language === language) ?? cvVersions[0];
  const selectedVersion = localeContent.cv.versions[language];
  const selectedLabel = selectedVersion.label[siteLanguage];
  const selectedTitle = selectedVersion.title[siteLanguage];
  const selectedSummary = selectedVersion.summary[siteLanguage];

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] overflow-y-auto bg-black/75 backdrop-blur-sm overscroll-contain"
          style={{ WebkitOverflowScrolling: "touch" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="section-container flex min-h-full items-start py-4 md:py-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="w-full max-h-[calc(100vh-2rem)] overflow-hidden rounded-[24px] border border-line bg-[#10111a] shadow-2xl md:max-h-[calc(100vh-4rem)]">
              {/* EN-TÊTE - version mobile optimisée */}
              <div className="border-b border-line px-4 py-4 md:px-6 md:py-5">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  {/* Colonne gauche : badge, nom, titre */}
                  <div className="min-w-0 flex-1">
                    <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-dim">
                      <FileText size={12} />
                      CV
                    </div>
                    <h2 className="mt-2 text-lg font-semibold leading-tight md:mt-3 md:text-2xl">
                      {cvProfile.name}
                    </h2>
                    <p className="mt-0.5 max-w-2xl text-xs text-dim md:mt-1 md:text-sm">
                      {localeContent.cv.profile.title[siteLanguage]}
                    </p>
                  </div>

                  {/* Colonne droite : boutons + fermeture */}
                  <div className="flex shrink-0 flex-wrap items-center gap-2 md:gap-3">
                    {/* Télécharger */}
                    <a
                      href={selected.href}
                      download={selected.fileName}
                      className="inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-accent/90 md:gap-2 md:px-4 md:py-2.5 md:text-sm"
                    >
                      <Download size={14} className="md:size-16" />
                      <span className="text-[11px] md:text-sm">{localeContent.cv.download[siteLanguage]}</span>
                    </a>

                    {/* Ouvrir */}
                    <a
                      href={selected.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full border border-line px-3 py-2 text-xs font-medium text-text transition-colors hover:border-accent hover:text-accent md:gap-2 md:px-4 md:py-2.5 md:text-sm"
                    >
                      <ExternalLink size={14} className="md:size-16" />
                      <span className="text-[11px] md:text-sm">{localeContent.cv.open[siteLanguage]}</span>
                    </a>

                    {/* Fermeture */}
                    <button
                      type="button"
                      onClick={onClose}
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-dim transition-colors hover:border-accent hover:text-text md:h-10 md:w-10"
                      aria-label={localeContent.cv.close[siteLanguage]}
                    >
                      <X size={16} className="md:size-18" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Contenu principal : grille */}
              <div className="grid max-h-full min-h-0 gap-0 overflow-hidden lg:grid-cols-[330px_1fr]">
                {/* Panneau gauche : informations */}
                <div
                  className="overflow-y-auto border-b border-line p-4 lg:max-h-full lg:border-b-0 lg:border-r lg:p-6"
                  style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
                >
                  <div className="space-y-4 lg:space-y-5">
                    {/* Sélecteur de langue + résumé */}
                    <div className="rounded-2xl border border-line bg-surface p-3 lg:p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent lg:h-12 lg:w-12">
                          <Globe size={18} className="lg:size-20" />
                        </div>
                        <div>
                          <div className="text-xs font-medium lg:text-sm">{selectedTitle}</div>
                          <div className="text-[10px] text-dim lg:text-xs">{selectedLabel}</div>
                        </div>
                      </div>

                      <p className="mt-3 text-xs leading-5 text-dim lg:mt-4 lg:text-sm lg:leading-6">
                        {selectedSummary}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5 lg:mt-4 lg:gap-2">
                        {cvVersions.map((version) => {
                          const active = version.language === language;
                          return (
                            <button
                              key={version.language}
                              type="button"
                              onClick={() => setLanguage(version.language)}
                              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[10px] font-medium transition-colors lg:gap-2 lg:px-3 lg:py-2 lg:text-xs ${
                                active
                                  ? "border-accent bg-accent/10 text-text"
                                  : "border-line text-dim hover:border-accent/50 hover:text-text"
                              }`}
                            >
                              {localeContent.cv.versions[version.language].label[siteLanguage]}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Indicateurs rapides */}
                    <div className="grid grid-cols-2 gap-2 lg:gap-3">
                      <div className="rounded-2xl border border-line bg-surface p-3 lg:p-4">
                        <div className="text-[9px] uppercase tracking-widest text-dim lg:text-xs">
                          {localeContent.cv.status[siteLanguage]}
                        </div>
                        <div className="mt-1.5 text-xs font-medium text-text lg:mt-2 lg:text-sm">
                          {localeContent.cv.profile.availability[siteLanguage]}
                        </div>
                      </div>
                      <div className="rounded-2xl border border-line bg-surface p-3 lg:p-4">
                        <div className="text-[9px] uppercase tracking-widest text-dim lg:text-xs">
                          {localeContent.cv.updated[siteLanguage]}
                        </div>
                        <div className="mt-1.5 text-xs font-medium text-text lg:mt-2 lg:text-sm">
                          {localeContent.cv.profile.updatedAt[siteLanguage]}
                        </div>
                      </div>
                      <div className="rounded-2xl border border-line bg-surface p-3 lg:p-4">
                        <div className="text-[9px] uppercase tracking-widest text-dim lg:text-xs">
                          {localeContent.cv.location[siteLanguage]}
                        </div>
                        <div className="mt-1.5 text-xs font-medium text-text lg:mt-2 lg:text-sm">
                          {localeContent.cv.profile.location[siteLanguage]}
                        </div>
                      </div>
                      <div className="rounded-2xl border border-line bg-surface p-3 lg:p-4">
                        <div className="text-[9px] uppercase tracking-widest text-dim lg:text-xs">
                          {localeContent.cv.distinction[siteLanguage]}
                        </div>
                        <div className="mt-1.5 text-xs font-medium text-text lg:mt-2 lg:text-sm">
                          {localeContent.cv.profile.highlight[siteLanguage]}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Panneau droit : aperçu PDF */}
                <div className="min-h-0 overflow-hidden p-3 md:p-4 lg:p-6">
                  <div className="h-full rounded-2xl border border-line bg-black/30 p-1.5 md:p-2">
                    <iframe
                      title={`${localeContent.cv.preview[siteLanguage]} ${selectedLabel}`}
                      src={selected.href}
                      className="h-[50vh] w-full rounded-[14px] bg-surface md:h-[68vh] md:rounded-[18px] lg:h-[74vh]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}