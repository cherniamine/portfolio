export type Locale = "fr" | "en";

export const localeContent = {
  nav: {
    links: {
      profile: { fr: "Profil", en: "Profile" },
      skills: { fr: "Compétences", en: "Skills" },
      experience: { fr: "Expériences", en: "Experience" },
      projects: { fr: "Projets", en: "Projects" },
      credentials: { fr: "Certifs", en: "Certs" },
      contact: { fr: "Contact", en: "Contact" },
    },
    contactCta: { fr: "Me contacter", en: "Contact me" },
    menuAria: { fr: "Ouvrir le menu", en: "Open the menu" },
  },
  hero: {
    availability: { fr: "Disponible immédiatement", en: "Available immediately" },
    stats: {
      fr: [
        { label: "Expériences", value: 5 },
        { label: "Projets", value: 7 },
        { label: "Certifications", value: 5 },
        { label: "Diplômes", value: 2 },
      ],
      en: [
        { label: "Experience", value: 5 },
        { label: "Projects", value: 7 },
        { label: "Certifications", value: 5 },
        { label: "Degrees", value: 2 },
      ],
    },
    roles: {
      fr: [
        "Ingénieur Data Science & IA",
        "Développeur Web",
        "Data Analyst",
        "AI & Cloud Developer",
      ],
      en: [
        "Data Science & AI Engineer",
        "Web Developer",
        "Data Analyst",
        "AI & Cloud Developer",
      ],
    },
    intro: {
      fr: "Je conçois des solutions data et IA orientées production : AIOps, RAG, détection d'anomalies, dashboards KPI et applications web métier. Je navigue entre Python, Java, React, Angular, Azure et les usages concrets du terrain.",
      en: "I design production-oriented data and AI solutions: AIOps, RAG, anomaly detection, KPI dashboards, and business web applications. I move seamlessly between Python, Java, React, Angular, Azure, and real-world operational needs.",
    },
    ctaResume: { fr: "Consulter mon CV", en: "View my CV" },
    ctaProjects: { fr: "Voir mes projets", en: "See my projects" },
    ctaContact: { fr: "Me contacter", en: "Contact me" },
  },
  about: {
    eyebrow: { fr: "01 · Profil", en: "01 · Profile" },
    title: {
      fr: "Ingénieur data et IA, avec un pied solide dans le web et le cloud.",
      en: "Data and AI engineer with a solid footing in web and cloud.",
    },
    blocks: {
      fr: [
        {
          title: "Qui suis-je ?",
          text: "Ingénieur en Data Science & Intelligence Artificielle, je conçois des solutions utiles, robustes et orientées production.",
        },
        {
          title: "Mon parcours",
          text: "Banque, cloud, IA générative, web métier et supervision intelligente : j’aime croiser les contraintes réelles avec la technique.",
        },
        {
          title: "Ce que j’aime développer",
          text: "Des plateformes AIOps, des assistants RAG, des dashboards KPI et des interfaces qui aident vraiment à décider.",
        },
        {
          title: "Ce que je recherche",
          text: "Un poste en CDI, CDD, CVP, freelance ou consulting où je peux contribuer à des projets IA, data ou full-stack à fort impact.",
        },
      ],
      en: [
        {
          title: "Who am I?",
          text: "A Data Science & Artificial Intelligence engineer, I design useful, robust, and production-ready solutions.",
        },
        {
          title: "My journey",
          text: "Banking, cloud, generative AI, business web apps, and intelligent supervision: I enjoy bridging real constraints with technology.",
        },
        {
          title: "What I like to build",
          text: "AIOps platforms, RAG assistants, KPI dashboards, and interfaces that truly help people decide.",
        },
        {
          title: "What I am looking for",
          text: "A permanent, fixed-term, freelance, or consulting role where I can contribute to high-impact AI, data, or full-stack projects.",
        },
      ],
    },
  },
  skills: {
    eyebrow: { fr: "02 · Compétences techniques", en: "02 · Technical skills" },
    title: { fr: "Technologies & Outils", en: "Technologies & Tools" },
    description: {
      fr: "Les principales technologies que j'utilise pour concevoir, développer et déployer des solutions Data, IA et Full-Stack.",
      en: "The main technologies I use to design, develop, and deploy Data, AI, and Full-Stack solutions.",
    },
    categoryOrder: ["Langages", "Data Science & IA", "Frontend", "Backend", "Cloud & DevOps", "Bases de données"],
    categoryLabels: {
      fr: {
        Langages: "Langages",
        "Data Science & IA": "Data Science & IA",
        Frontend: "Frontend",
        Backend: "Backend",
        "Cloud & DevOps": "Cloud & DevOps",
        "Bases de données": "Bases de données",
      },
      en: {
        Langages: "Languages",
        "Data Science & IA": "Data Science & AI",
        Frontend: "Frontend",
        Backend: "Backend",
        "Cloud & DevOps": "Cloud & DevOps",
        "Bases de données": "Databases",
      },
    },
    items: {
      fr: [
        { name: "Python", category: "Langages", description: "Data science, automatisation, backend FastAPI", icon: "code2" },
        { name: "JavaScript", category: "Langages", description: "Interfaces web, logique front-end, React", icon: "braces" },
        { name: "TypeScript", category: "Langages", description: "Typage robuste pour interfaces et APIs", icon: "typescript" },
        { name: "Java", category: "Langages", description: "Applications d'entreprise, Spring Boot", icon: "coffee" },
        { name: "SQL / PL-SQL", category: "Bases de données", description: "Requêtes, reporting et modélisation relationnelle", icon: "database" },
        { name: "MongoDB", category: "Bases de données", description: "Schémas souples pour produits data et IA", icon: "layers3" },
        { name: "Oracle", category: "Bases de données", description: "SGBD relationnel utilisé en entreprise et en environnement critique", icon: "oracle" },
        {name: "PostgreSQL",description: "SGBD relationnel open-source, robuste et extensible",icon: "postgresql",category: "Bases de données",},
        { name: "Pandas", category: "Data Science & IA", description: "Manipulation, nettoyage et analyse de données", icon: "pandas" },
        { name: "NumPy", category: "Data Science & IA", description: "Calcul scientifique et opérations matricielles", icon: "numpy" },
        { name: "Scikit-Learn", category: "Data Science & IA", description: "Modèles ML, évaluation et pipelines", icon: "scikit" },
        { name: "Machine Learning", category: "Data Science & IA", description: "Détection d'anomalies, prédiction et évaluation", icon: "brain-circuit" },
        { name: "FAISS", category: "Data Science & IA", description: "Recherche sémantique et similarité vectorielle", icon: "radar" },
        { name: "RAG / LLM", category: "Data Science & IA", description: "Sentence Transformers, assistants IA, copilot", icon: "bot" },
        { name: "NLP", category: "Data Science & IA", description: "Extraction de sens et traitement du langage", icon: "languages" },
        { name: "Power BI", category: "Data Science & IA", description: "KPI, dashboards managers et aide à la décision", icon: "power-bi" },
        { name: "Angular", category: "Frontend", description: "Applications métier et interfaces responsives", icon: "triangle" },
        { name: "React", category: "Frontend", description: "Frontend moderne, composants, hooks et UX", icon: "atom" },
        { name: "Spring Boot", category: "Backend", description: "APIs Java et architectures modulaires", icon: "sprout" },
        { name: "FastAPI", category: "Backend", description: "Backends Python rapides et documentés", icon: "zap" },
        { name: "Microsoft Azure", category: "Cloud & DevOps", description: "Azure OpenAI, Cognitive Search, Vision et Speech", icon: "cloud" },
        { name: "Docker", category: "Cloud & DevOps", description: "Conteneurisation et déploiement reproductible", icon: "container" },
        { name: "Git / GitHub", category: "Cloud & DevOps", description: "Versioning, collaboration et livraison continue", icon: "git-branch" },

      ],
      en: [
        { name: "Python", category: "Langages", description: "Data science, automation, FastAPI backend", icon: "code2" },
        { name: "JavaScript", category: "Langages", description: "Web interfaces, front-end logic, React", icon: "braces" },
        { name: "TypeScript", category: "Langages", description: "Strong typing for interfaces and APIs", icon: "typescript" },
        { name: "Java", category: "Langages", description: "Enterprise applications, Spring Boot", icon: "coffee" },
        { name: "SQL / PL-SQL", category: "Bases de données", description: "Queries, reporting, and relational modeling", icon: "database" },
        { name: "MongoDB", category: "Bases de données", description: "Flexible schemas for data and AI products", icon: "layers3" },
        { name: "Oracle", category: "Bases de données", description: "Enterprise relational database for critical business systems", icon: "oracle" },
        { name: "PostgreSQL", category: "Databases", description: "Open-source relational DBMS, robust and extensible", icon: "postgresql" },
        { name: "Pandas", category: "Data Science & IA", description: "Data manipulation, cleaning, and analysis", icon: "pandas" },
        { name: "NumPy", category: "Data Science & IA", description: "Scientific computing and matrix operations", icon: "numpy" },
        { name: "Scikit-Learn", category: "Data Science & IA", description: "ML models, evaluation, and pipelines", icon: "scikit" },
        { name: "FAISS", category: "Data Science & IA", description: "Semantic search and vector similarity", icon: "radar" },
        { name: "RAG / LLM", category: "Data Science & IA", description: "Sentence Transformers, AI assistants, copilot", icon: "bot" },
        { name: "NLP", category: "Data Science & IA", description: "Meaning extraction and language processing", icon: "languages" },
        { name: "Power BI", category: "Data Science & IA", description: "KPI dashboards and decision support", icon: "power-bi" },
        { name: "Angular", category: "Frontend", description: "Business applications and responsive interfaces", icon: "triangle" },
        { name: "React", category: "Frontend", description: "Modern frontend, components, hooks, and UX", icon: "atom" },
        { name: "Spring Boot", category: "Backend", description: "Java APIs and modular architectures", icon: "sprout" },
        { name: "FastAPI", category: "Backend", description: "Fast, documented Python backends", icon: "zap" },
        { name: "Microsoft Azure", category: "Cloud & DevOps", description: "Azure OpenAI, Cognitive Search, Vision, and Speech", icon: "cloud" },
        { name: "Docker", category: "Cloud & DevOps", description: "Containerization and reproducible deployment", icon: "container" },
        { name: "Git / GitHub", category: "Cloud & DevOps", description: "Versioning, collaboration, and continuous delivery", icon: "git-branch" },
      ],
    },
    categories: {
      fr: {
        lead: {
          Langages: "Langages de travail et bases de code quotidiennes.",
          "Data Science & IA": "Outils data, IA et recherche sémantique.",
          Frontend: "Interfaces métiers et expériences réactives.",
          Backend: "APIs, services métier et orchestration.",
          "Cloud & DevOps": "Déploiement, conteneurisation et outillage cloud.",
          "Bases de données": "Modélisation, requêtage et persistance.",
        },
        accent: {
          Langages: "Portée technique solide sur les couches produit et data.",
          "Data Science & IA": "Du nettoyage à la prédiction, jusqu'aux assistants IA.",
          Frontend: "Angular et React pour des écrans propres et rapides.",
          Backend: "FastAPI et Spring Boot pour des systèmes lisibles.",
          "Cloud & DevOps": "Azure, Docker et Git pour une chaîne de livraison stable.",
          "Bases de données": "Relationnel et NoSQL selon le besoin du produit.",
        },
      },
      en: {
        lead: {
          Langages: "Core working languages and everyday coding foundations.",
          "Data Science & IA": "Data, AI, and semantic search tooling.",
          Frontend: "Business interfaces and reactive experiences.",
          Backend: "APIs, business services, and orchestration.",
          "Cloud & DevOps": "Deployment, containerization, and cloud tooling.",
          "Bases de données": "Modeling, querying, and persistence.",
        },
        accent: {
          Langages: "Strong technical depth across product and data layers.",
          "Data Science & IA": "From cleaning data to prediction and AI assistants.",
          Frontend: "Angular and React for clean, fast interfaces.",
          Backend: "FastAPI and Spring Boot for readable systems.",
          "Cloud & DevOps": "Azure, Docker, and Git for a reliable delivery pipeline.",
          "Bases de données": "Relational and NoSQL depending on product needs.",
        },
      },
    },
  },
  experience: {
    eyebrow: { fr: "03 · Parcours", en: "03 · Journey" },
    title: { fr: "Expériences", en: "Experience" },
    items: {
      fr: [
        {
          date: "02/2026 - 06/2026",
          company: "Tunisie Telecom",
          role: "PFE Ingénieur Data Science & IA",
          current: true,
          missions: [
            "Conception et développement d'une plateforme AIOps pour la supervision intelligente des logs de 5 plateformes telecom critiques.",
            "Détection d'anomalies, Root Cause Analysis et recherche sémantique d'incidents avec FAISS et Sentence Transformers.",
            "Boucle de feedback et drift monitoring pour l'amélioration continue des modèles.",
            "Copilot IA, dashboard KPI pour les managers et module de prédiction des incidents futurs.",
          ],
        },
        {
          date: "07/2025 - 09/2025",
          company: "Société Insomea",
          role: "Stagiaire Développeur IA & Cloud",
          missions: [
            "Plateforme web de création et de déploiement de chatbots intelligents (texte, voix, image).",
            "Backend Python/FastAPI avec moteur RAG et intégration Azure OpenAI, Cognitive Search, Vision et Speech.",
            "Infrastructure cloud Azure sécurisée et application de la méthodologie Agile/Scrum.",
          ],
        },
        {
          date: "09/2024 - 12/2024",
          company: "Société Info-Z",
          role: "Stagiaire Développeur Web",
          missions: [
            "Migration du module de domiciliation d'Oracle Forms vers Spring Boot et Angular.",
            "Adaptation d'une solution de commerce extérieur pour les banques et la Banque Centrale.",
            "Interfaces web modernes et responsives.",
          ],
        },
        {
          date: "01/2024 - 03/2024",
          company: "Société SMI",
          role: "Stagiaire Développeur Web",
          missions: [
            "Application web de gestion d'événements avec Java et Spring Boot.",
            "Intégration et résolution de problèmes techniques.",
          ],
        },
        {
          date: "02/2023 - 06/2024",
          company: "ATB Banque",
          role: "Stagiaire Data Analyst (PFE Licence)",
          missions: [
            "Tableau de bord Power BI pour le suivi des KPI et l'aide à la décision.",
            "Analyse des données financières, optimisation des encaissements et des flux de trésorerie.",
            "Modèles prédictifs et algorithmes d'optimisation pour la gestion des liquidités.",
          ],
        },
      ],
      en: [
        {
          date: "02/2026 - 06/2026",
          company: "Tunisie Telecom",
          role: "Final-Year Project Data Science & AI Engineer",
          current: true,
          missions: [
            "Design and development of an AIOps platform for intelligent supervision of logs across 5 critical telecom platforms.",
            "Anomaly detection, Root Cause Analysis, and semantic incident search with FAISS and Sentence Transformers.",
            "Feedback loop and drift monitoring for continuous model improvement.",
            "AI copilot, KPI dashboard for managers, and future incident prediction module.",
          ],
        },
        {
          date: "07/2025 - 09/2025",
          company: "Insomea",
          role: "AI & Cloud Developer Intern",
          missions: [
            "Web platform for creating and deploying intelligent chatbots (text, voice, image).",
            "Python/FastAPI backend with RAG engine and Azure OpenAI, Cognitive Search, Vision, and Speech integration.",
            "Secure Azure cloud infrastructure and Agile/Scrum delivery.",
          ],
        },
        {
          date: "09/2024 - 12/2024",
          company: "Info-Z",
          role: "Web Developer Intern",
          missions: [
            "Migration of the domiciliation module from Oracle Forms to Spring Boot and Angular.",
            "Adaptation of a trade finance solution for banks and the Central Bank.",
            "Modern and responsive web interfaces.",
          ],
        },
        {
          date: "01/2024 - 03/2024",
          company: "SMI",
          role: "Web Developer Intern",
          missions: [
            "Event management web application with Java and Spring Boot.",
            "Technical integration and problem solving.",
          ],
        },
        {
          date: "02/2023 - 06/2024",
          company: "ATB Bank",
          role: "Data Analyst Intern (Bachelor Final Project)",
          missions: [
            "Power BI dashboard for KPI tracking and decision support.",
            "Financial data analysis, cash collection optimization, and cash flow management.",
            "Predictive models and optimization algorithms for liquidity management.",
          ],
        },
      ],
    },
  },
  projects: {
    eyebrow: { fr: "04 · Projets", en: "04 · Projects" },
    title: { fr: "Projets & réalisations", en: "Projects & case studies" },
    description: {
      fr: "Sept projets, sept contextes différents - du monitoring télécom à l'imagerie médicale, en passant par la finance et l'IA générative.",
      en: "Seven projects, seven different contexts — from telecom monitoring to medical imaging, including finance and generative AI.",
    },
    hint: { fr: "Cliquer pour ouvrir le détail", en: "Click to open the details" },
    count: { fr: (count: number) => `${count} projets`, en: (count: number) => `${count} projects` },
    open: { fr: "Ouvrir captures, démos et GitHub", en: "Open captures, demos and GitHub" },
    media: { fr: "media", en: "media" },
    modal: {
      close: { fr: "Fermer", en: "Close" },
      noMedia: { fr: "Aucun média disponible", en: "No media available" },
      open: { fr: "Ouvrir", en: "Open" },
      viewMain: { fr: "Voir le média principal", en: "View the main media" },
      downloadCv: { fr: "Télécharger le CV", en: "Download CV" },
      github: { fr: "GitHub du projet", en: "Project GitHub" },
    },
    items: {
      fr: [
        {
          slug: "aiops-tunisie-telecom",
          title: "Plateforme AIOps - supervision intelligente des logs",
          org: "PFE · Tunisie Telecom",
          emoji: "🛰️",
          featured: true,
          githubUrl: "https://github.com/cherniamine/telecom-aiops",
          description: "Détection d'anomalies, analyse des causes racines, copilote IA et prédiction des incidents sur 5 plateformes telecom critiques (MMG, SMSC, SMPPS, SMPPC, DMC), avec recherche sémantique FAISS et dashboard multi-rôles.",
          tags: ["Python", "FAISS", "FastAPI", "Angular", "MongoDB", "Ollama"],
          metrics: [
            { label: "Télécom supervisées", value: "5 plateformes" },
            { label: "Analyse intelligente", value: "RCA + FAISS" },
            { label: "Manager • NOC • Engineer", value: "3 dashboards" },
            { label: "Anticipation des incidents", value: "IA prédictive" },
          ],
          media: [
            { kind: "image", src: "/project-media/projects/tt-aiops/captures/noc-overview.png", title: "Vue NOC", note: "Tableau de bord opérationnel avec indicateurs temps réel." },
            { kind: "image", src: "/project-media/projects/tt-aiops/captures/noc-queue.png", title: "File d'attente", note: "Gestion des incidents ouverts et priorisation des actions." },
            { kind: "image", src: "/project-media/projects/tt-aiops/captures/incidents-dashboard.png", title: "Dashboard incidents", note: "Vue synthétique des incidents, alertes et sévérité globale." },
            { kind: "image", src: "/project-media/projects/tt-aiops/captures/manager-kpis.png", title: "KPIs manager", note: "Suivi mensuel des incidents, SLA et performance métier." },
            { kind: "image", src: "/project-media/projects/tt-aiops/captures/incident-copilot.png", title: "Copilote IA", note: "Assistant pour guider l'analyse et les prochaines actions." },
            { kind: "image", src: "/project-media/projects/tt-aiops/captures/incident-rca-topology.png", title: "RCA topologique", note: "Analyse des causes racines et dépendances entre services." },
            { kind: "image", src: "/project-media/projects/tt-aiops/captures/engineer-ml-retrain.png", title: "Vue ingénieur", note: "Métriques ML, drift et cycle de réentraînement supervisé." },
            { kind: "video", src: "/project-media/projects/tt-aiops/demo-manager.mp4", title: "Démo manager", note: "Vue KPI et pilotage pour les responsables." },
            { kind: "video", src: "/project-media/projects/tt-aiops/demo-noc.mp4", title: "Démo NOC", note: "Surveillance opérationnelle et alerting." },
            { kind: "video", src: "/project-media/projects/tt-aiops/demo-engineer.mp4", title: "Démo ingénieur", note: "Analyse détaillée des incidents et RCA." },
          ],
        },
        {
          slug: "social-analytics-rag-chatbot",
          title: "Plateforme d'analyse des réseaux sociaux & chatbot IA (RAG)",
          org: "Projet académique",
          emoji: "💬",
          githubUrl: "https://github.com/cherniamine/Social_Bot",
          description: "Analyse de sentiments et d'émotions en temps réel, détection de topics et chatbot RAG contextuel, avec dashboard analytique et streaming temps réel.",
          tags: ["React 19", "FastAPI", "FAISS", "Sentence-BERT", "TinyLlama"],
          metrics: [
            { label: "latence API", value: "<100ms" },
            { label: "précision NLP", value: ">92%" },
            { label: "chatbot", value: "<2s" },
          ],
          media: [
            { kind: "video", src: "/project-media/projects/social-rag/demo.mp4", title: "Démo interactive", note: "Analyse sociale, topics et chatbot RAG." },
          ],
        },
        {
          slug: "medical-deep-learning",
          title: "Détection automatique de maladies pulmonaires par Deep Learning",
          org: "Projet académique",
          emoji: "🫁",
          githubUrl: "https://github.com/cherniamine/AI-Radiology-Analyzer",
          description: "Classification de radiographies thoraciques (COVID-19, pneumonie virale, opacité pulmonaire, cas normaux) avec interprétabilité des prédictions via Grad-CAM.",
          tags: ["TensorFlow", "Keras", "OpenCV", "Streamlit", "Grad-CAM"],
          metrics: [
            { label: "images", value: "8 464" },
            { label: "accuracy", value: "84,3%" },
          ],
          media: [
            { kind: "video", src: "/project-media/projects/medical/demo.mp4", title: "Démo computer vision", note: "Classification et visualisation des prédictions." },
          ],
        },
        {
  "slug": "insomea-chatbots",
  "title": "Plateforme de chatbots IA",
  "org": "Stage · Société Insomea",
  "emoji": "🤖",
  "githubUrl": "https://github.com/cherniamine/Chatbot-as-a-service",
  "description": "Création et déploiement de chatbots intelligents (texte, voix, image) avec moteur RAG (Azure OpenAI, FAISS) et services Azure Cognitive.",
  "tags": ["Python", "FastAPI", "Azure OpenAI", "RAG", "MongoDB", "FAISS", "Angular"],
  "metrics": [
    { "label": "Précision RAG", "value": "71,2%" },
    { "label": "Latence moyenne", "value": "1,8s" },
    { "label": "Langues supportées", "value": "FR / EN / AR" },
    { "label": "Modalités", "value": "Texte + Voix" }
  ],
  "image": "/images/insomea.png",
  "media": [
    {
      "kind": "video",
      "src": "/project-media/projects/insomea/admin.mp4",
      "title": "Démo Interface Admin",
      "note": "Création et déploiement de chatbots multicanaux, gérer les utilisateurs et uploader les documents pour chaque chatbot pour le rendre actif."
    },
    {
      "kind": "video",
      "src": "/project-media/projects/insomea/user.mp4",
      "title": "Démo Interface Utilisateur",
      "note": "Interface utilisateur pour interagir avec un chatbot et voir l'historique des conversations."
    },
    {
      "kind": "video",
      "src": "/project-media/projects/insomea/inscription-gmail.mp4",
      "title": "Démo Inscription via Gmail",
      "note": "Processus d'inscription et de connexion via un compte Gmail pour accéder à la plateforme."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/login.png",
      "title": "Page de connexion",
      "note": "Authentification sécurisée pour accéder au service de chatbot."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/admin-dashboard.png",
      "title": "Tableau de bord administrateur",
      "note": "Vue d'ensemble des statistiques clés : chatbots, documents, utilisateurs supervisés et statut d'activité."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/Chatbots-list.png",
      "title": "Liste des chatbots",
      "note": "Affichage de tous les chatbots avec leur ID, statut (actif/inactif) et options de gestion."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/chatbot-create.png",
      "title": "Création d'un nouveau chatbot",
      "note": "Formulaire de création avec nom et description pour personnaliser l'assistant."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/Chatbot-Documents-list.png",
      "title": "Gestion des documents d'un chatbot",
      "note": "Sélection d'un chatbot et liste des documents qui lui sont liés avec leurs métadonnées."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/Chatbot-Document-upload.png",
      "title": "Import de documents",
      "note": "Interface de glisser-déposer pour importer des documents (PDF, DOCX, TXT, CSV, MD) jusqu'à 10 Mo."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/chat-history.png",
      "title": "Historique des conversations",
      "note": "Visualisation de l'historique des échanges avec un chatbot, incluant les questions, réponses et résumés."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/chat-interface.png",
      "title": "Interface de conversation",
      "note": "Chat en temps réel avec affichage des sources utilisées pour les réponses."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/Dashboared-ARABE.png",
      "title": "Tableau de bord (version arabe)",
      "note": "Version arabisée du tableau de bord pour une accessibilité multilingue."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/Dashboared-english.png",
      "title": "Tableau de bord (version anglaise)",
      "note": "Version anglaise du tableau de bord avec les indicateurs clés de gestion."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/Profil-Admin.png",
      "title": "Profil administrateur",
      "note": "Gestion du profil, des permissions et des statistiques personnelles."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/Profil-User.png",
      "title": "Profil Utilisateur",
      "note": "Vue du profil utilisateur avec permissions limitées, informations de l'organisation, accès à l'historique des conversations et paramètres de sécurité."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/User-create.png",
      "title": "Création d'un utilisateur",
      "note": "Formulaire d'ajout d'un nouvel utilisateur avec attribution d'un rôle (Admin/User)."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/Users.png",
      "title": "Gestion des utilisateurs supervisés",
      "note": "Liste des utilisateurs avec leurs rôles et actions de supervision."
    }
  ]
},
        {
          slug: "info-z-migration",
          title: "Migration bancaire vers Spring Boot & Angular",
          org: "Stage · Info-Z (sous-traitance SMI)",
          emoji: "🏦",
          githubUrl: "https://github.com/cherniamine/Domiciliation",
          description: "Migration du module de domiciliation d'Oracle Forms vers une architecture moderne pour banques et Banque Centrale.",
          tags: ["Java", "Spring Boot", "Angular", "Microservices", "Keycloak", "Oracle", "Docker"],
          media: [
             {kind: "image",src: "/project-media/projects/info-z/captures/Login.png",title: "Connexion sécurisée",note: "Authentification classique ou SSO via Keycloak."},
            { kind: "image", src: "/project-media/projects/info-z/captures/agency-operation.png", title: "Opération agence", note: "Flux métier principal côté agence." },
            { kind: "image", src: "/project-media/projects/info-z/captures/bct-taking-care.png", title: "Prise en charge BCT", note: "Traitement d'un accord Banque Centrale." },
            { kind: "image", src: "/project-media/projects/info-z/captures/bct-consultation.png", title: "Consultation accord", note: "Visualisation détaillée d'un accord BCT." },
            { kind: "image", src: "/project-media/projects/info-z/captures/verification.png", title: "Vérification", note: "Contrôles et validations métier." },
            { kind: "image", src: "/project-media/projects/info-z/captures/files-list.png", title: "Liste des fichiers", note: "Gestion documentaire et pièces jointes." },
          ],
        },
        {
          slug: "smi-events",
          title: "Application de gestion d'événements",
          org: "Stage · Société SMI",
          emoji: "🎟️",
          githubUrl: "https://github.com/cherniamine/Gestion-Event",
          description: "Application web complète pour la création et la gestion d'événements, développée en Java et Spring Boot.",
          tags: ["Java", "Spring Boot","Angular"],
          media: [
            { kind: "image", src: "/project-media/projects/smi/captures/login.png", title: "Connexion", note: "Point d'entrée sécurisé de l'application." },
            { kind: "image", src: "/project-media/projects/smi/captures/monthly-view.png", title: "Vue mensuelle", note: "Calendrier des événements sur une période complète." },
            { kind: "image", src: "/project-media/projects/smi/captures/to-do-list.png", title: "Liste des tâches", note: "Gestion des tâches à accomplir." },
            { kind: "image", src: "/project-media/projects/smi/captures/events-list.png", title: "Liste des événements", note: "Vue synthétique des événements planifiés." },
            { kind: "image", src: "/project-media/projects/smi/captures/event-form.png", title: "Formulaire événement", note: "Création et modification d'un événement." },
            { kind: "image", src: "/project-media/projects/smi/captures/event-modif.png", title: "Modification événement", note: "Mise à jour des détails d'un événement existant." },
            { kind: "image", src: "/project-media/projects/smi/captures/profil.png", title: "Profil utilisateur", note: "Gestion des informations personnelles." },
            { kind: "image", src: "/project-media/projects/smi/captures/visual-notification.png", title: "Notification visuelle", note: "Alerte visuelle pour les événements à venir." },
            { kind: "image", src: "/project-media/projects/smi/captures/mail-notification.png", title: "Notification par courriel", note: "Alerte par courriel pour les événements à venir." },
            
            
          ],
        },
        {
         slug: "atb-dashboard",
  title: "Dashboard financier & modèles prédictifs",
  org: "Stage PFE · ATB Banque",
  emoji: "📊",
  githubUrl: "https://github.com/cherniamine/Dashboard-ATB-",
  description: "Dashboard Power BI & ETL Python avec modèles prédictifs pour l'optimisation de la gestion des liquidités bancaires.",
  tags: ["Python", "Power BI", "ETL", "Predictive Analytics", "SQL"],
  image: "/images/atb-dashboard.png",
  media: [
    {
      kind: "image",
      src: "/project-media/projects/atb/dashboard.jpg",
      title: "Tableau de bord",
      note: "Vue consolidée des KPI : chargement/distribution, durée de conservation et carte interactive du réseau.",
    },
    {
      kind: "image",
      src: "/project-media/projects/atb/forecast.jpg",
      title: "Prévision",
      note: "Prévisions Power BI alimentées par des scripts Python (ARIMA et régression linéaire) pour anticiper les besoins en billets, le déficit, les stocks et la durée de conservation.",
    },
    {
      kind: "image",
      src: "/project-media/projects/atb/gab-deficit.jpg",
      title: "Déficit GABs",
      note: "Suivi temporel du déficit réseau sur 4 ans (2019-2022) avec détection des pics anormaux.",
    },
    {
      kind: "image",
      src: "/project-media/projects/atb/batches-by-agency.png",
      title: "Billes par agence",
      note: "Comparatif détaillé des billets chargés vs distribués par agence.",
    },
  ],
        },
      ],
      en: [
        {
          slug: "aiops-tunisie-telecom",
          title: "AIOps Platform - intelligent log supervision",
          org: "Final-year project · Tunisie Telecom",
          emoji: "🛰️",
          featured: true,
          githubUrl: "https://github.com/cherniamine/telecom-aiops",
          description: "Anomaly detection, root cause analysis, AI copilot, and incident prediction across 5 critical telecom platforms (MMG, SMSC, SMPPS, SMPPC, DMC), powered by FAISS semantic search and a multi-role dashboard.",
          tags: ["Python", "FAISS", "FastAPI", "Angular", "MongoDB", "Ollama"],
          metrics: [
            { label: "Supervised telecom platforms", value: "5 platforms" },
            { label: "Intelligent analysis", value: "RCA + FAISS" },
            { label: "Manager • NOC • Engineer", value: "3 dashboards" },
            { label: "Incident anticipation", value: "Predictive AI" },
          ],
          media: [
            { kind: "image", src: "/project-media/projects/tt-aiops/captures/noc-overview.png", title: "NOC view", note: "Operational dashboard with real-time indicators." },
            { kind: "image", src: "/project-media/projects/tt-aiops/captures/noc-queue.png", title: "Queue", note: "Open incident management and action prioritization." },
            { kind: "image", src: "/project-media/projects/tt-aiops/captures/incidents-dashboard.png", title: "Incident dashboard", note: "Synthetic view of incidents, alerts, and overall severity." },
            { kind: "image", src: "/project-media/projects/tt-aiops/captures/manager-kpis.png", title: "Manager KPIs", note: "Monthly tracking of incidents, SLA, and business performance." },
            { kind: "image", src: "/project-media/projects/tt-aiops/captures/incident-copilot.png", title: "AI copilot", note: "Assistant to guide analysis and next actions." },
            { kind: "image", src: "/project-media/projects/tt-aiops/captures/incident-rca-topology.png", title: "Topological RCA", note: "Root cause analysis and dependencies between services." },
            { kind: "image", src: "/project-media/projects/tt-aiops/captures/engineer-ml-retrain.png", title: "Engineer view", note: "ML metrics, drift, and supervised retraining cycle." },
            { kind: "video", src: "/project-media/projects/tt-aiops/demo-manager.mp4", title: "Manager demo", note: "KPI view and management oversight." },
            { kind: "video", src: "/project-media/projects/tt-aiops/demo-noc.mp4", title: "NOC demo", note: "Operational monitoring and alerting." },
            { kind: "video", src: "/project-media/projects/tt-aiops/demo-engineer.mp4", title: "Engineer demo", note: "Detailed incident analysis and RCA." },
          ],
        },
        {
          slug: "social-analytics-rag-chatbot",
          title: "Social media analytics platform & AI chatbot (RAG)",
          org: "Academic project",
          emoji: "💬",
          githubUrl: "https://github.com/cherniamine/Social_Bot",
          description: "Real-time sentiment and emotion analysis, topic detection, and contextual RAG chatbot with analytics dashboard and real-time streaming.",
          tags: ["React 19", "FastAPI", "FAISS", "Sentence-BERT", "TinyLlama"],
          metrics: [
            { label: "API latency", value: "<100ms" },
            { label: "NLP accuracy", value: ">92%" },
            { label: "chatbot", value: "<2s" },
          ],
          media: [
            { kind: "video", src: "/project-media/projects/social-rag/demo.mp4", title: "Interactive demo", note: "Social analysis, topics, and RAG chatbot." },
          ],
        },
        {
          slug: "medical-deep-learning",
          title: "Automatic pulmonary disease detection with Deep Learning",
          org: "Academic project",
          emoji: "🫁",
          githubUrl: "https://github.com/cherniamine/AI-Radiology-Analyzer",
          description: "Classification of chest X-rays (COVID-19, viral pneumonia, pulmonary opacity, normal cases) with prediction interpretability via Grad-CAM.",
          tags: ["TensorFlow", "Keras", "OpenCV", "Streamlit", "Grad-CAM"],
          metrics: [
            { label: "images", value: "8,464" },
            { label: "accuracy", value: "84.3%" },
          ],
          media: [
            { kind: "video", src: "/project-media/projects/medical/demo.mp4", title: "Computer vision demo", note: "Classification and prediction visualization." },
          ],
        },
        {
  "slug": "insomea-chatbots",
  "title": "AI Chatbot Platform",
  "org": "Internship · Insomea Company",
  "emoji": "🤖",
  "githubUrl": "https://github.com/cherniamine/Chatbot-as-a-service",
  "description": "Creation and deployment of intelligent chatbots (text, voice, image) with RAG engine (Azure OpenAI, FAISS) and Azure Cognitive Services.",
  "tags": ["Python", "FastAPI", "Azure OpenAI", "RAG", "MongoDB", "FAISS", "Angular"],
  "metrics": [
    { "label": "RAG Accuracy", "value": "71.2%" },
    { "label": "Average Latency", "value": "1.8s" },
    { "label": "Supported Languages", "value": "FR / EN / AR" },
    { "label": "Modalities", "value": "Text + Voice" }
  ],
  "image": "/images/insomea.png",
  "media": [
    {
      "kind": "video",
      "src": "/project-media/projects/insomea/admin.mp4",
      "title": "Admin Interface Demo",
      "note": "Create and deploy multichannel chatbots, manage users, and upload documents for each chatbot to make it active."
    },
    {
      "kind": "video",
      "src": "/project-media/projects/insomea/user.mp4",
      "title": "User Interface Demo",
      "note": "User interface to interact with a chatbot and view conversation history."
    },
    {
      "kind": "video",
      "src": "/project-media/projects/insomea/inscription-gmail.mp4",
      "title": "Gmail Sign-up Demo",
      "note": "Sign-up and login process via a Gmail account to access the platform."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/login.png",
      "title": "Login Page",
      "note": "Secure authentication to access the chatbot service."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/admin-dashboard.png",
      "title": "Admin Dashboard",
      "note": "Overview of key statistics: chatbots, documents, supervised users, and activity status."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/Chatbots-list.png",
      "title": "Chatbot List",
      "note": "Display of all chatbots with their ID, status (active/inactive), and management options."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/chatbot-create.png",
      "title": "Create a New Chatbot",
      "note": "Creation form with name and description to customize the assistant."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/Chatbot-Documents-list.png",
      "title": "Chatbot Document Management",
      "note": "Select a chatbot and view the list of linked documents with their metadata."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/Chatbot-Document-upload.png",
      "title": "Document Upload",
      "note": "Drag-and-drop interface to upload documents (PDF, DOCX, TXT, CSV, MD) up to 10 MB."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/chat-history.png",
      "title": "Conversation History",
      "note": "View the history of exchanges with a chatbot, including questions, answers, and summaries."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/chat-interface.png",
      "title": "Chat Interface",
      "note": "Real-time chat with display of sources used for responses."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/Dashboared-ARABE.png",
      "title": "Dashboard (Arabic Version)",
      "note": "Arabic version of the dashboard for multilingual accessibility."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/Dashboared-english.png",
      "title": "Dashboard (English Version)",
      "note": "English version of the dashboard with key management indicators."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/Profil-Admin.png",
      "title": "Admin Profile",
      "note": "Profile management, permissions, and personal statistics."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/Profil-User.png",
      "title": "User Profile",
      "note": "User profile view with limited permissions, organization information, conversation history access, and security settings."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/User-create.png",
      "title": "Create a User",
      "note": "Form to add a new user with role assignment (Admin/User)."
    },
    {
      "kind": "image",
      "src": "/project-media/projects/insomea/captures/Users.png",
      "title": "Supervised User Management",
      "note": "List of users with their roles and supervision actions."
    }
  ]
},
        {
          slug: "info-z-migration",
          title: "Banking migration to Spring Boot & Angular",
          org: "Internship · Info-Z (SMI subcontracting)",
          emoji: "🏦",
          githubUrl: "https://github.com/cherniamine/Domiciliation",
          description: "Migration of the domiciliation module from Oracle Forms to a modern architecture for banks and the Central Bank.",
          tags: ["Java", "Spring Boot", "Angular", "Microservices", "Keycloak", "Oracle", "Docker"],
          media: [
            {kind: "image",src: "/project-media/projects/info-z/captures/Login.png",title: "Secure login",note: "Classic authentication or SSO via Keycloak."},
            { kind: "image", src: "/project-media/projects/info-z/captures/agency-operation.png", title: "Agency operation", note: "Main business flow on the agency side." },
            { kind: "image", src: "/project-media/projects/info-z/captures/bct-taking-care.png", title: "BCT support", note: "Processing of a Central Bank agreement." },
            { kind: "image", src: "/project-media/projects/info-z/captures/bct-consultation.png", title: "Agreement consultation", note: "Detailed visualization of a BCT agreement." },
            { kind: "image", src: "/project-media/projects/info-z/captures/verification.png", title: "Verification", note: "Business controls and validations." },
            { kind: "image", src: "/project-media/projects/info-z/captures/files-list.png", title: "Files list", note: "Document management and attachments." },
          ],
        },
        {
          slug: "smi-events",
          title: "Event management application",
          org: "Internship · SMI",
          emoji: "🎟️",
          githubUrl: "https://github.com/cherniamine/Gestion-Event",
          description: "Complete web application for creating and managing events, developed in Java and Spring Boot.",
          tags: ["Java", "Spring Boot", "Angular"],
          media: [
            { kind: "image", src: "/project-media/projects/smi/captures/login.png", title: "Login", note: "Secure entry point for the application." },
            { kind: "image", src: "/project-media/projects/smi/captures/monthly-view.png", title: "Monthly view", note: "Event calendar over a complete period." },
            { kind: "image", src: "/project-media/projects/smi/captures/to-do-list.png", title: "To-do list", note: "Managing tasks to be completed." },
            { kind: "image", src: "/project-media/projects/smi/captures/events-list.png", title: "Events list", note: "Synthetic view of planned events." },
            { kind: "image", src: "/project-media/projects/smi/captures/event-form.png", title: "Event form", note: "Create and modify an event." },
            { kind: "image", src: "/project-media/projects/smi/captures/event-modif.png", title: "Event modification", note: "Update details of an existing event." },
            { kind: "image", src: "/project-media/projects/smi/captures/profil.png", title: "User profile", note: "Managing personal information." },
            { kind: "image", src: "/project-media/projects/smi/captures/visual-notification.png", title: "Visual notification", note: "Visual alert for upcoming events." },
            { kind: "image", src: "/project-media/projects/smi/captures/mail-notification.png", title: "Email notification", note: "Email alert for upcoming events." },
            
            
          ],
        },
        {
           slug: "atb-dashboard",
  title: "Financial dashboard & predictive models",
  org: "Internship final project · ATB Bank",
  emoji: "📊",
  githubUrl: "https://github.com/cherniamine/Dashboard-ATB-",
  description: "Power BI dashboard & Python ETL with predictive models for banking cash management optimization.",
  tags: ["Python", "Power BI", "ETL", "Predictive Analytics", "SQL"],
  image: "/images/atb-dashboard.png",
  media: [
    {
      kind: "image",
      src: "/project-media/projects/atb/dashboard.jpg",
      title: "Dashboard",
      note: "Consolidated KPI view: loading/distribution, average retention time, and interactive network map.",
    },
    {
      kind: "image",
      src: "/project-media/projects/atb/forecast.jpg",
      title: "Forecast",
      note: "Power BI forecasts powered by Python scripts (ARIMA and linear regression) to anticipate cash demand, deficit, stock levels, and retention time.",
    },
    {
      kind: "image",
      src: "/project-media/projects/atb/gab-deficit.jpg",
      title: "ATM deficit",
      note: "4-year (2019-2022) network deficit tracking with anomaly spike detection.",
    },
    {
      kind: "image",
      src: "/project-media/projects/atb/batches-by-agency.png",
      title: "Batches by agency",
      note: "Detailed per-agency comparison of loaded vs distributed banknotes.",
    },
  ],
        },
      ],
    },
  },
  certifications: {
    eyebrow: { fr: "05 · Certifications & formation", en: "05 · Certifications & education" },
    title: { fr: "Crédibilité académique et professionnelle", en: "Academic and professional credibility" },
    certifications: { fr: "Certifications", en: "Certifications" },
    languages: { fr: "Langues", en: "Languages" },
    education: { fr: "Formation", en: "Education" },
    items: {
      fr: [
        { title: "Building RAG Agents with LLMs", org: "NVIDIA", icon: "brain" },
        { title: "CCNA - Introduction to Networks", org: "Cisco", icon: "network" },
        { title: "Certification 21st Century Skills", org: "Honoris", icon: "graduation" },
        { title: "Coding and Data Analytic Certification", org: "Honoris", icon: "analytics" },
        { title: "Certificate of the GO Piscine competition", org: "Université Centrale", icon: "trophy" },
      ],
      en: [
        { title: "Building RAG Agents with LLMs", org: "NVIDIA", icon: "brain" },
        { title: "CCNA - Introduction to Networks", org: "Cisco", icon: "network" },
        { title: "21st Century Skills Certification", org: "Honoris", icon: "graduation" },
        { title: "Coding and Data Analytics Certification", org: "Honoris", icon: "analytics" },
        { title: "Certificate of the GO Piscine competition", org: "Centrale University", icon: "trophy" },
      ],
    },
    languageItems: {
      fr: [
        { name: "Arabe", level: "Maternelle", proficiency: 100 },
        { name: "Français", level: "Intermédiaire", proficiency: 65 },
        { name: "Anglais", level: "Intermédiaire", proficiency: 65 },
      ],
      en: [
        { name: "Arabic", level: "Native", proficiency: 100 },
        { name: "French", level: "Intermediate", proficiency: 65 },
        { name: "English", level: "Intermediate", proficiency: 65 },
      ],
    },
    educationItems: {
      fr: [
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
          highlight: "Socle académique en data",
        },
      ],
      en: [
        {
          year: "2026",
          degree: "Computer Engineering degree",
          focus: "Data Science & Artificial Intelligence",
          school: "Centrale University",
          highlight: "High Distinction",
        },
        {
          year: "2023",
          degree: "National Bachelor's degree",
          focus: "Big Data and Data Analytics",
          school: "Centrale University",
          highlight: "Academic foundation in data",
        },
      ],
    },
  },
  contact: {
    title: {
      fr: "Discutons de votre prochain projet IA. Je peux contribuer en CDI, CDD, CVP, freelance ou consulting selon le besoin.",
      en: "Let’s discuss your next AI project. I can contribute in permanent, fixed-term, freelance, or consulting roles depending on the need.",
    },
    toast: {
      successTitle: { fr: "Messagerie ouverte", en: "Mail client opened" },
      successDescription: {
        fr: "Votre message est prêt à être envoyé à mon adresse.",
        en: "Your message is ready to be sent to my email address.",
      },
      errorTitle: { fr: "Message non envoyé", en: "Message not sent" },
      errorDescription: {
        fr: "Veuillez remplir tous les champs avant d'envoyer.",
        en: "Please fill out all fields before sending.",
      },
      openErrorTitle: { fr: "Ouverture impossible", en: "Unable to open" },
      openErrorDescription: {
        fr: "Impossible d'ouvrir votre messagerie pour le moment.",
        en: "Your mail client could not be opened at the moment.",
      },
    },
    labels: {
      name: { fr: "Nom", en: "Name" },
      email: { fr: "Email", en: "Email" },
      message: { fr: "Message", en: "Message" },
      placeholderName: { fr: "Votre nom", en: "Your name" },
      placeholderEmail: { fr: "votre@email.com", en: "your@email.com" },
      placeholderMessage: {
        fr: "Parlez-moi de votre opportunité ou de votre projet",
        en: "Tell me about your opportunity or project",
      },
      submit: { fr: "Envoyer le message", en: "Send the message" },
      submitting: { fr: "Ouverture...", en: "Opening..." },
      footer: {
        fr: "© 2026 Cherni Mohamed Amine - Tunis, Tunisie",
        en: "© 2026 Cherni Mohamed Amine - Tunis, Tunisia",
      },
    },
    availability: { fr: ["CDI", "CDD", "CVP", "Freelance", "Consulting"], en: ["Permanent", "Fixed-term", "Freelance", "Consulting"] },
  },
  cv: {
    close: { fr: "Fermer", en: "Close" },
    status: { fr: "Statut", en: "Status" },
    updated: { fr: "Dernière mise à jour", en: "Last updated" },
    location: { fr: "Localisation", en: "Location" },
    distinction: { fr: "Distinction", en: "Distinction" },
    download: { fr: "Télécharger", en: "Download" },
    open: { fr: "Ouvrir", en: "Open" },
    preview: { fr: "Aperçu", en: "Preview" },
    profile: {
      title: {
        fr: "Ingénieur Data Science & Intelligence Artificielle",
        en: "Data Science & Artificial Intelligence Engineer",
      },
      location: { fr: "Tunis, Tunisie", en: "Tunis, Tunisia" },
      availability: { fr: "Disponible immédiatement", en: "Available immediately" },
      highlight: { fr: "Mention Très Bien", en: "High Honors" },
      updatedAt: { fr: "Juillet 2026", en: "July 2026" },
    },
    versions: {
      fr: {
        label: { fr: "Français", en: "French" },
        title: { fr: "Curriculum Vitae", en: "Curriculum Vitae" },
        summary: {
          fr: "Version en français pour les candidatures locales, les recruteurs francophones et les offres en Tunisie ou en Europe francophone.",
          en: "French version for local applications, francophone recruiters and opportunities in Tunisia or francophone Europe.",
        },
      },
      en: {
        label: { fr: "Anglais", en: "English" },
        title: { fr: "Resume", en: "Resume" },
        summary: {
          fr: "Version anglaise pour les recruteurs internationaux, les opportunités à distance et les candidatures transfrontalières.",
          en: "English version for international recruiters, remote opportunities and cross-border applications.",
        },
      },
    },
  },
};
