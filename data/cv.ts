export type CvLanguage = "fr" | "en";

export type CvVersion = {
  language: CvLanguage;
  label: string;
  title: string;
  summary: string;
  fileName: string;
  href: string;
};

export const cvProfile = {
  name: "Cherni Mohamed Amine",
  title: "Ingénieur Data Science & Intelligence Artificielle",
  location: "Tunis, Tunisie",
  availability: "Disponible immédiatement",
  highlight: "Mention Très Bien",
  updatedAt: "Juillet 2026",
};

export const cvVersions: CvVersion[] = [
  {
    language: "fr",
    label: "Français",
    title: "Curriculum Vitae",
    summary:
      "Version en français pour les candidatures locales, les recruteurs francophones et les offres en Tunisie ou en Europe francophone.",
    fileName: "CV Version Français.pdf",
    href: "/project-media/cv/CV%20Version%20Fran%C3%A7ais.pdf",
  },
  {
    language: "en",
    label: "English",
    title: "Resume",
    summary:
      "English version for international recruiters, remote opportunities and cross-border applications.",
    fileName: "CV Version Anglais.pdf",
    href: "/project-media/cv/CV%20Version%20Anglais.pdf",
  },
];
