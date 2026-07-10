"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  Link2,
  Mail,
  MapPin,
  Phone,
  Send,
  Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "./LanguageProvider";
import { localeContent } from "@/data/translations";

// --- Configuration EmailJS ---
const EMAILJS_SERVICE_ID = "service_qpydlsd";
const EMAILJS_TEMPLATE_ID = "template_wiwuasn";
const EMAILJS_PUBLIC_KEY = "vyxoy6W1WEsaA5Fuf";

const recipientEmail = "chernimohamedamine551@gmail.com";

type ToastTone = "success" | "error" | "info";

type ToastState = {
  id: number;
  title: string;
  description?: string;
  tone: ToastTone;
};

const toneStyles: Record<ToastTone, string> = {
  success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-100",
  error: "border-rose-500/30 bg-rose-500/10 text-rose-100",
  info: "border-cyan-500/30 bg-cyan-500/10 text-cyan-100",
};

const toneIcons: Record<ToastTone, React.ReactNode> = {
  success: <CheckCircle2 size={18} />,
  error: <AlertTriangle size={18} />,
  info: <Send size={18} />,
};

export default function Contact() {
  const { language } = useLanguage();
  const contactContent = localeContent.contact;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [toasts, setToasts] = useState<ToastState[]>([]);

  // Auto‑disparition des toasts
  useEffect(() => {
    if (!toasts.length) return;
    const timer = window.setTimeout(() => {
      setToasts((current) => current.slice(1));
    }, 3200);
    return () => window.clearTimeout(timer);
  }, [toasts]);

  function pushToast(toast: Omit<ToastState, "id">) {
    const id = Date.now() + Math.round(Math.random() * 1000);
    setToasts((current) => [...current, { ...toast, id }]);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      pushToast({
        tone: "error",
        title: contactContent.toast.errorTitle[language],
        description: contactContent.toast.errorDescription[language],
      });
      return;
    }

    setStatus("sending");

    try {
      const templateParams = {
        name: name,
        email: email,
        message: message,
        time: new Date().toLocaleString(language === "fr" ? "fr-FR" : "en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus("sent");
      pushToast({
        tone: "success",
        title: contactContent.toast.successTitle[language],
        description: contactContent.toast.successDescription[language],
      });
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      pushToast({
        tone: "error",
        title: contactContent.toast.openErrorTitle[language],
        description: contactContent.toast.openErrorDescription[language],
      });
    } finally {
      setTimeout(() => setStatus("idle"), 2500);
    }
  }

  return (
    <footer id="contact" className="border-t border-line py-24">
      <div className="section-container relative">
        {/* Toasts */}
        <AnimatePresence>
          {toasts.length > 0 && (
            <div className="pointer-events-none fixed right-4 top-4 z-[120] flex w-[min(92vw,360px)] flex-col gap-3">
              {toasts.map((toast) => (
                <motion.div
                  key={toast.id}
                  initial={{ opacity: 0, y: -12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  className={`pointer-events-auto rounded-2xl border px-4 py-3 shadow-2xl backdrop-blur-md ${toneStyles[toast.tone]}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">{toneIcons[toast.tone]}</div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold">{toast.title}</div>
                      {toast.description ? (
                        <div className="mt-1 text-xs leading-5 opacity-90">
                          {toast.description}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl font-display text-3xl font-semibold md:text-4xl"
        >
          {contactContent.title[language]}
        </motion.h2>

        {/* Badges */}
        <div className="mt-6 flex flex-wrap gap-2">
          {contactContent.availability[language].map((item) => (
            <span
              key={item}
              className="inline-flex items-center rounded-full border border-line bg-surface px-4 py-2 text-xs font-medium text-text"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Contact & Formulaire */}
        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1.3fr]">
          {/* Colonne gauche : coordonnées */}
          <div className="space-y-5">
            <a
              href={`mailto:${recipientEmail}`}
              className="flex items-center gap-3 text-sm transition-colors hover:text-accent"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface">
                <Mail size={16} />
              </span>
              {recipientEmail}
            </a>
            <a
              href="tel:+21658198028"
              className="flex items-center gap-3 text-sm transition-colors hover:text-accent"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface">
                <Phone size={16} />
              </span>
              +216 58 198 028
            </a>
            <a
              href="tel:+21695617193"
              className="flex items-center gap-3 text-sm transition-colors hover:text-accent"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface">
                <Phone size={16} />
              </span>
              +216 95 617 193
            </a>
            <div className="flex items-center gap-3 text-sm text-dim">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-text">
                <MapPin size={16} />
              </span>
              Tunis, Tunisie
            </div>
            <a
              href="https://www.linkedin.com/in/cherni-mohamed-amine-40158b2b1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm transition-colors hover:text-accent"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface">
                <Link2 size={16} />
              </span>
              linkedin.com/in/cherni-mohamed-amine-40158b2b1
            </a>
          </div>

          {/* Colonne droite : formulaire */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs text-dim">
                {contactContent.labels.name[language]}
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                placeholder={contactContent.labels.placeholderName[language]}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs text-dim">
                {contactContent.labels.email[language]}
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                placeholder={contactContent.labels.placeholderEmail[language]}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs text-dim">
                {contactContent.labels.message[language]}
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full resize-none rounded-lg border border-line bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                placeholder={contactContent.labels.placeholderMessage[language]}
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90 disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  {contactContent.labels.submitting[language]}
                </>
              ) : status === "sent" ? (
                <>
                  <CheckCircle2 size={15} />
                  {contactContent.toast.successTitle[language]}
                </>
              ) : status === "error" ? (
                <>
                  <AlertTriangle size={15} />
                  {contactContent.toast.errorTitle[language]}
                </>
              ) : (
                <>
                  <Send size={15} />
                  {contactContent.labels.submit[language]}
                </>
              )}
            </button>
          </form>
        </div>

        {/* Pied de page */}
        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 text-xs text-dim md:flex-row md:justify-between">
          <span>{contactContent.labels.footer[language]}</span>
          <span className="font-mono">
            Open to AI, Data Science & Machine Learning Opportunities
          </span>
        </div>
      </div>
    </footer>
  );
}