"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "Profil" },
  { href: "#skills", label: "Compétences" },
  { href: "#experience", label: "Expériences" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-bg/80 border-b border-line">
      <div className="section-container flex items-center justify-between py-4">
        <a href="#home" className="font-display font-semibold text-lg">
          Cherni<span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-dim">
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

        <a
          href="#contact"
          className="hidden md:inline-block bg-accent text-white text-sm px-5 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
        >
          Me contacter
        </a>

        <button
          className="md:hidden text-text"
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
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
        </div>
      )}
    </nav>
  );
}
