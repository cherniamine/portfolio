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
  { name: "Français", level: "Intermediaire", proficiency: 65 },
  { name: "Anglais", level: "Intermediaire", proficiency: 65 },
];

export const stats = [
  { label: "Stages", value: 5 },
  { label: "Projets IA", value: 7 },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "Diplome", value: 2, suffix: "+" },
];
