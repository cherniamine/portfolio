export type Skill = {
  name: string;
  category: string;
  description: string;
  icon: string;
};

export const skills: Skill[] = [
  {
    name: "Python",
    category: "Langages",
    description: "Data science, automatisation, backend FastAPI",
    icon: "code2",
  },
  {
    name: "JavaScript",
    category: "Langages",
    description: "Interfaces web, logique front-end, React",
    icon: "braces",
  },
  {
    name: "TypeScript",
    category: "Langages",
    description: "Typage robuste pour interfaces et APIs",
    icon: "typescript",
  },
  {
    name: "Java",
    category: "Langages",
    description: "Applications d'entreprise, Spring Boot",
    icon: "coffee",
  },
  {
    name: "SQL / PL-SQL",
    category: "Bases de données",
    description: "Requêtes, reporting et modélisation relationnelle",
    icon: "database",
  },
  {
    name: "MongoDB",
    category: "Bases de données",
    description: "Schémas souples pour produits data et IA",
    icon: "layers3",
  },
  {
    name: "Pandas",
    category: "Data Science & IA",
    description: "Manipulation, nettoyage et analyse de données",
    icon: "pandas",
  },
  {
    name: "NumPy",
    category: "Data Science & IA",
    description: "Calcul scientifique et opérations matricielles",
    icon: "numpy",
  },
  {
    name: "Scikit-Learn",
    category: "Data Science & IA",
    description: "Modèles ML, évaluation et pipelines",
    icon: "scikit",
  },
  {
    name: "Machine Learning",
    category: "Data Science & IA",
    description: "Détection d'anomalies, prédiction et évaluation",
    icon: "brain-circuit",
  },
  {
    name: "FAISS",
    category: "Data Science & IA",
    description: "Recherche sémantique et similarité vectorielle",
    icon: "search",
  },
  {
    name: "RAG / LLM",
    category: "Data Science & IA",
    description: "Sentence Transformers, assistants IA, copilot",
    icon: "message-square-text",
  },
  {
    name: "NLP",
    category: "Data Science & IA",
    description: "Extraction de sens et traitement du langage",
    icon: "search",
  },
  {
    name: "Power BI",
    category: "Data Science & IA",
    description: "KPI, dashboards managers et aide à la décision",
    icon: "bar-chart-3",
  },
  {
    name: "Angular",
    category: "Frontend",
    description: "Applications métier et interfaces responsives",
    icon: "triangle",
  },
  {
    name: "React",
    category: "Frontend",
    description: "Frontend moderne, composants, hooks et UX",
    icon: "atom",
  },
  {
    name: "Spring Boot",
    category: "Backend",
    description: "APIs Java et architectures modulaires",
    icon: "sprout",
  },
  {
    name: "FastAPI",
    category: "Backend",
    description: "Backends Python rapides et documentés",
    icon: "zap",
  },
  {
    name: "Microsoft Azure",
    category: "Cloud & DevOps",
    description: "Azure OpenAI, Cognitive Search, Vision et Speech",
    icon: "cloud",
  },
  {
    name: "Docker",
    category: "Cloud & DevOps",
    description: "Conteneurisation et déploiement reproductible",
    icon: "container",
  },
  {
    name: "Git / GitHub",
    category: "Cloud & DevOps",
    description: "Versioning, collaboration et livraison continue",
    icon: "git-branch",
  },
];

export const skillCategories = [
  "Langages",
  "Data Science & IA",
  "Frontend",
  "Backend",
  "Cloud & DevOps",
  "Bases de données",
];
