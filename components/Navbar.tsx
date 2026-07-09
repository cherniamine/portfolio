"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { localeContent } from "@/data/translations";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const links = [
    { href: "#about", label: localeContent.nav.links.profile[language] },
    { href: "#skills", label: localeContent.nav.links.skills[language] },
    { href: "#experience", label: localeContent.nav.links.experience[language] },
    { href: "#projects", label: localeContent.nav.links.projects[language] },
    { href: "#credentials", label: localeContent.nav.links.credentials[language] },
    { href: "#contact", label: localeContent.nav.links.contact[language] },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-bg/80 border-b border-line">
      <div className="section-container flex items-center justify-between py-3 md:py-4">
        <a href="#home" className="font-display font-semibold text-lg">
          Cherni<span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-7 text-sm text-dim">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-text transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
              className="rounded-full border border-line px-3 py-2 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              {language === "fr" ? "EN" : "FR"}
            </button>
            <a
              href="#contact"
              className="inline-flex items-center whitespace-nowrap rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/90 shadow-sm shadow-accent/20 mt-2 mb-2"
            >
              {localeContent.nav.contactCta[language]}
            </a>
          </div>
        </div>

        <button
          className="md:hidden text-text"
          onClick={() => setOpen(!open)}
          aria-label={localeContent.nav.menuAria[language]}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line px-6 py-4 flex flex-col gap-4 text-dim">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-text transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setLanguage(language === "fr" ? "en" : "fr");
              setOpen(false);
            }}
            className="inline-flex items-center justify-start rounded-full border border-line px-3 py-2 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
          >
            {language === "fr" ? "English" : "Français"}
          </button>
        </div>
      )}
    </nav>
  );
}
