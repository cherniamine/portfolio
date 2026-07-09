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
              <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-4 md:px-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-dim">
                    <FileText size={12} />
                    CV
                  </div>
                  <h2 className="mt-3 text-xl font-semibold md:text-2xl">
                    {cvProfile.name}
                  </h2>
                  <p className="mt-1 max-w-2xl text-sm text-dim">
                    {localeContent.cv.profile.title[siteLanguage]}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-dim transition-colors hover:border-accent hover:text-text"
                  aria-label={localeContent.cv.close[siteLanguage]}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="grid max-h-full min-h-0 gap-0 overflow-hidden lg:grid-cols-[330px_1fr]">
                <div className="overflow-y-auto border-b border-line p-5 lg:max-h-full lg:border-b-0 lg:border-r lg:p-6" style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}>
                  <div className="space-y-5">
                    <div className="rounded-2xl border border-line bg-surface p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                          <Globe size={20} />
                        </div>
                        <div>
                          <div className="text-sm font-medium">{selectedTitle}</div>
                          <div className="text-xs text-dim">{selectedLabel}</div>
                        </div>
                      </div>

                      <p className="mt-4 text-sm leading-6 text-dim">
                        {selectedSummary}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {cvVersions.map((version) => {
                          const active = version.language === language;
                          return (
                            <button
                              key={version.language}
                              type="button"
                              onClick={() => setLanguage(version.language)}
                              className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition-colors ${
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

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-line bg-surface p-4">
                        <div className="text-xs uppercase tracking-widest text-dim">
                          {localeContent.cv.status[siteLanguage]}
                        </div>
                        <div className="mt-2 text-sm font-medium text-text">
                          {localeContent.cv.profile.availability[siteLanguage]}
                        </div>
                      </div>
                      <div className="rounded-2xl border border-line bg-surface p-4">
                        <div className="text-xs uppercase tracking-widest text-dim">
                          {localeContent.cv.updated[siteLanguage]}
                        </div>
                        <div className="mt-2 text-sm font-medium text-text">
                          {localeContent.cv.profile.updatedAt[siteLanguage]}
                        </div>
                      </div>
                      <div className="rounded-2xl border border-line bg-surface p-4">
                        <div className="text-xs uppercase tracking-widest text-dim">
                          {localeContent.cv.location[siteLanguage]}
                        </div>
                        <div className="mt-2 text-sm font-medium text-text">
                          {localeContent.cv.profile.location[siteLanguage]}
                        </div>
                      </div>
                      <div className="rounded-2xl border border-line bg-surface p-4">
                        <div className="text-xs uppercase tracking-widest text-dim">
                          {localeContent.cv.distinction[siteLanguage]}
                        </div>
                        <div className="mt-2 text-sm font-medium text-text">
                          {localeContent.cv.profile.highlight[siteLanguage]}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={selected.href}
                        download={selected.fileName}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
                      >
                        <Download size={16} />
                        {localeContent.cv.download[siteLanguage]}
                      </a>
                      <a
                        href={selected.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-4 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
                      >
                        <ExternalLink size={16} />
                        {localeContent.cv.open[siteLanguage]}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="min-h-0 overflow-hidden p-4 md:p-6">
                  <div className="h-full rounded-2xl border border-line bg-black/30 p-2">
                    <iframe
                      title={`${localeContent.cv.preview[siteLanguage]} ${selectedLabel}`}
                      src={selected.href}
                      className="h-[68vh] w-full rounded-[18px] bg-surface md:h-[74vh]"
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
