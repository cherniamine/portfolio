export type Experience = {
  date: string;
  company: string;
  role: string;
  missions: string[];
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    date: "02/2026 - 06/2026",
    company: "Tunisie Telecom",
    role: "PFE Ingénieur Data Science & IA",
    current: true,
    missions: [
      "Conception et developpement d'une plateforme AIOps pour la supervision intelligente des logs de 5 plateformes telecom critiques.",
      "Detection d'anomalies, Root Cause Analysis et recherche semantique d'incidents avec FAISS et Sentence Transformers.",
      "Boucle de feedback et drift monitoring pour l'amelioration continue des modeles.",
      "Copilot IA, dashboard KPI pour les managers et module de prediction des incidents futurs.",
    ],
  },
  {
    date: "07/2025 - 09/2025",
    company: "Societe Insomea",
    role: "Stagiaire Developpeur IA & Cloud",
    missions: [
      "Plateforme web de creation et de deploiement de chatbots intelligents (texte, voix, image).",
      "Backend Python/FastAPI avec moteur RAG et integration Azure OpenAI, Cognitive Search, Vision et Speech.",
      "Infrastructure cloud Azure securisee et application de la methodologie Agile/Scrum.",
    ],
  },
  {
    date: "09/2024 - 12/2024",
    company: "Societe Info-Z",
    role: "Stagiaire Developpeur Web",
    missions: [
      "Migration du module de domiciliation d'Oracle Forms vers Spring Boot et Angular.",
      "Adaptation d'une solution de commerce exterieur pour les banques et la Banque Centrale.",
      "Interfaces web modernes et responsives.",
    ],
  },
  {
    date: "01/2024 - 03/2024",
    company: "Societe SMI",
    role: "Stagiaire Developpeur Web",
    missions: [
      "Application web de gestion d'evenements avec Java et Spring Boot.",
      "Integration et resolution de problemes techniques.",
    ],
  },
  {
    date: "02/2023 - 06/2024",
    company: "ATB Banque",
    role: "Stagiaire Data Analyst (PFE Licence)",
    missions: [
      "Tableau de bord Power BI pour le suivi des KPI et l'aide a la decision.",
      "Analyse des donnees financieres, optimisation des encaissements et des flux de tresorerie.",
      "Modeles predictifs et algorithmes d'optimisation pour la gestion des liquidites.",
    ],
  },
];
