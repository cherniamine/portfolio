export type Certification = {
  title: string;
  org: string;
  emoji: string;
};

export const certifications: Certification[] = [
  { title: "Building RAG Agents with LLMs", org: "NVIDIA", emoji: "🧠" },
  { title: "CCNA - Introduction to Networks", org: "Cisco", emoji: "🌐" },
  { title: "Certification 21st Century Skills", org: "Honoris", emoji: "🎓" },
  { title: "Coding and Data Analytic Certification", org: "Honoris", emoji: "📈" },
  { title: "Certificate of the GO Piscine competition", org: "Université Centrale", emoji: "🏆" },
];

export type LanguageItem = {
  name: string;
  level: string;
  proficiency: number;
};

export const languages: LanguageItem[] = [
  { name: "Arabe", level: "Maternelle", proficiency: 100 },
  { name: "Français", level: "Intermédiaire", proficiency: 65 },
  { name: "Anglais", level: "Intermédiaire", proficiency: 65 },
];

export const stats = [
  { label: "Expériences", value: 5 },
  { label: "Projets", value: 7 },
  { label: "Certifications", value: 5 },
  { label: "Diplômes", value: 2 },
];

export const education = [
  {
    year: "2026",
    degree: "Diplôme d'ingénieur en informatique",
    focus: "Data Science & Intelligence Artificielle",
    school: "Université Centrale",
    highlight: "Mention Très Bien",
  },
  {
    year: "2023",
    degree: "Licence nationale",
    focus: "Big Data et Analyse des données",
    school: "Université Centrale",
    highlight: "Fondations en Data",
  },
];
