"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Link2, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("idle");
      }
    } catch {
      setStatus("idle");
    }
  }

  return (
    <footer id="contact" className="py-24 border-t border-line">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl md:text-4xl font-semibold max-w-xl mb-12"
        >
          Ouvert aux opportunités où je peux contribuer à des produits data,
           des plateformes IA et des systèmes de supervision à fort impact.
        </motion.h2>

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-12">
          <div className="space-y-5">
            <a
              href="mailto:chernimohamedamine551@gmail.com"
              className="flex items-center gap-3 text-sm hover:text-accent transition-colors"
            >
              <span className="w-9 h-9 rounded-full bg-surface border border-line flex items-center justify-center">
                <Mail size={16} />
              </span>
              chernimohamedamine551@gmail.com
            </a>
            <a
              href="tel:+21658198028"
              className="flex items-center gap-3 text-sm hover:text-accent transition-colors"
            >
              <span className="w-9 h-9 rounded-full bg-surface border border-line flex items-center justify-center">
                <Phone size={16} />
              </span>
              +216 58 198 028
            </a>
            <a
              href="tel:+21695617193"
              className="flex items-center gap-3 text-sm hover:text-accent transition-colors"
            >
              <span className="w-9 h-9 rounded-full bg-surface border border-line flex items-center justify-center">
                <Phone size={16} />
              </span>
              +216 95 617 193
            </a>
            <div className="flex items-center gap-3 text-sm text-dim">
              <span className="w-9 h-9 rounded-full bg-surface border border-line flex items-center justify-center text-text">
                <MapPin size={16} />
              </span>
              Zahrouni, El Hrairia, Tunis, Tunisie
            </div>
            <a
              href="https://www.linkedin.com/in/cherni-mohamed-amine-40158b2b1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm hover:text-accent transition-colors"
            >
              <span className="w-9 h-9 rounded-full bg-surface border border-line flex items-center justify-center">
                <Link2 size={16} />
              </span>
              linkedin.com/in/cherni-mohamed-amine-40158b2b1
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-dim mb-1.5 block">Nom</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-surface border border-line rounded-lg px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="text-xs text-dim mb-1.5 block">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-surface border border-line rounded-lg px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label className="text-xs text-dim mb-1.5 block">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full bg-surface border border-line rounded-lg px-4 py-3 text-sm outline-none focus:border-accent transition-colors resize-none"
                placeholder="Parlez-moi de votre projet"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors disabled:opacity-60"
            >
              <Send size={15} />
              {status === "sent"
                ? "Message envoye"
                : status === "sending"
                ? "Envoi..."
                : "Envoyer le message"}
            </button>
          </form>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-3 text-xs text-dim mt-16 pt-8 border-t border-line">
          <span>© 2026 Cherni Mohamed Amine - Tunis, Tunisie</span>
          <span className="font-mono">Next.js · Tailwind · Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
