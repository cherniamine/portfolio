export type Skill = {
  name: string;
  level: number;
  category: string;
  description: string;
  icon: string;
};

export const skills: Skill[] = [
  {
    name: "Python",
    level: 92,
    category: "Langages",
    description: "Data science, automatisation, backend FastAPI",
    icon: "code2",
  },
  {
    name: "JavaScript",
    level: 84,
    category: "Langages",
    description: "Interfaces web, logique front-end, React",
    icon: "braces",
  },
  {
    name: "Java",
    level: 82,
    category: "Langages",
    description: "Applications d'entreprise, Spring Boot",
    icon: "coffee",
  },
  {
    name: "SQL / PL-SQL",
    level: 85,
    category: "Bases de donnees",
    description: "Requetes, reporting et modelisation relationnelle",
    icon: "database",
  },
  {
    name: "MongoDB",
    level: 78,
    category: "Bases de donnees",
    description: "Schemas souples pour produits data et IA",
    icon: "layers3",
  },
  {
    name: "Machine Learning",
    level: 88,
    category: "Data Science & IA",
    description: "Detection d'anomalies, prediction et evaluation",
    icon: "brain-circuit",
  },
  {
    name: "RAG / LLM",
    level: 86,
    category: "Data Science & IA",
    description: "FAISS, Sentence Transformers, assistants IA",
    icon: "message-square-text",
  },
  {
    name: "NLP",
    level: 82,
    category: "Data Science & IA",
    description: "Recherche semantique et traitement du langage",
    icon: "search",
  },
  {
    name: "Power BI",
    level: 80,
    category: "Data Science & IA",
    description: "KPI, dashboards managers et aide a la decision",
    icon: "bar-chart-3",
  },
  {
    name: "Angular",
    level: 84,
    category: "Developpement Web",
    description: "Applications metier et interfaces responsives",
    icon: "triangle",
  },
  {
    name: "React",
    level: 86,
    category: "Developpement Web",
    description: "Frontend moderne, composants, hooks et UX",
    icon: "atom",
  },
  {
    name: "Spring Boot",
    level: 82,
    category: "Developpement Web",
    description: "APIs Java et architectures modulaires",
    icon: "sprout",
  },
  {
    name: "FastAPI",
    level: 87,
    category: "Developpement Web",
    description: "Backends Python rapides et documentes",
    icon: "zap",
  },
  {
    name: "Microsoft Azure",
    level: 82,
    category: "Cloud & DevOps",
    description: "Azure OpenAI, Cognitive Search, Vision et Speech",
    icon: "cloud",
  },
  {
    name: "Docker",
    level: 76,
    category: "Cloud & DevOps",
    description: "Conteneurisation et deploiement reproductible",
    icon: "container",
  },
  {
    name: "Git / GitHub",
    level: 88,
    category: "Cloud & DevOps",
    description: "Versioning, collaboration et livraison continue",
    icon: "git-branch",
  },
];

export const skillCategories = [
  "Langages",
  "Data Science & IA",
  "Developpement Web",
  "Cloud & DevOps",
  "Bases de donnees",
];
