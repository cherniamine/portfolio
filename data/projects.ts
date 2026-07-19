import {
  Activity,
  BarChart3,
  Bot,
  CalendarDays,
  Landmark,
  MessageSquareText,
  Radar,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type ProjectMedia = {
  kind: "image" | "video";
  src: string;
  title: string;
  note?: string;
};

export type Project = {
  slug: string;
  title: string;
  org: string;
  emoji: string;
  featured?: boolean;
  githubUrl?: string;
  description: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  image?: string;
  media?: ProjectMedia[];
};

export type ProjectIconMeta = {
  icon: LucideIcon;
  color: string;
};

export const projectIcons: Record<string, ProjectIconMeta> = {
  "aiops-tunisie-telecom": { icon: Radar, color: "#7C5CFF" },
  "social-analytics-rag-chatbot": { icon: MessageSquareText, color: "#22D3EE" },
  "medical-deep-learning": { icon: Activity, color: "#F97316" },
  "insomea-chatbots": { icon: Bot, color: "#06B6D4" },
  "info-z-migration": { icon: Landmark, color: "#8B5CF6" },
  "smi-events": { icon: CalendarDays, color: "#0EA5E9" },
  "atb-dashboard": { icon: BarChart3, color: "#F59E0B" },
  default: { icon: Sparkles, color: "#7C5CFF" },
};

export const projects: Project[] = [
  {
    slug: "aiops-tunisie-telecom",
    title: "Plateforme AIOps - supervision intelligente des logs",
    org: "PFE · Tunisie Telecom",
    emoji: "🛰️",
    featured: true,
    githubUrl: "https://github.com/cherniamine/telecom-aiops",
    description:
      "Détection d'anomalies, analyse des causes racines, copilote IA et prédiction des incidents sur 5 plateformes telecom critiques (MMG, SMSC, SMPPS, SMPPC, DMC), avec recherche sémantique FAISS et dashboard multi-rôles.",
    tags: ["Python", "FAISS", "FastAPI", "Angular", "MongoDB", "Ollama"],
    metrics: [
          { value: "5 plateformes", label: "Télécom supervisées" },
          { value: "RCA + FAISS", label: "Analyse intelligente" },
          { value: "3 dashboards", label: "Manager • NOC • Engineer" },
          { value: "IA prédictive", label: "Anticipation des incidents" },
        ],
    image: "/images/aiops.png",
    media: [
      {
        kind: "image",
        src: "/project-media/projects/tt-aiops/captures/noc-overview.png",
        title: "Vue NOC",
        note: "Tableau de bord opérationnel avec indicateurs temps réel.",
      },
      {
        kind: "image",
        src: "/project-media/projects/tt-aiops/captures/noc-queue.png",
        title: "File d'attente",
        note: "Gestion des incidents ouverts et priorisation des actions.",
      },
      {
        kind: "image",
        src: "/project-media/projects/tt-aiops/captures/incidents-dashboard.png",
        title: "Dashboard incidents",
        note: "Vue synthétique des incidents, alertes et sévérité globale.",
      },
      {
        kind: "image",
        src: "/project-media/projects/tt-aiops/captures/manager-kpis.png",
        title: "KPIs manager",
        note: "Suivi mensuel des incidents, SLA et performance métier.",
      },
      {
        kind: "image",
        src: "/project-media/projects/tt-aiops/captures/incident-copilot.png",
        title: "Copilote IA",
        note: "Assistant pour guider l'analyse et les prochaines actions.",
      },
      {
        kind: "image",
        src: "/project-media/projects/tt-aiops/captures/incident-rca-topology.png",
        title: "RCA topologique",
        note: "Analyse des causes racines et dépendances entre services.",
      },
      {
        kind: "image",
        src: "/project-media/projects/tt-aiops/captures/engineer-ml-retrain.png",
        title: "Vue ingénieur",
        note: "Métriques ML, drift et cycle de réentraînement supervisé.",
      },
      {
        kind: "video",
        src: "/project-media/projects/tt-aiops/demo-manager.mp4",
        title: "Démo manager",
        note: "Vue KPI et pilotage pour les responsables.",
      },
      {
        kind: "video",
        src: "/project-media/projects/tt-aiops/demo-noc.mp4",
        title: "Démo NOC",
        note: "Surveillance opérationnelle et alerting.",
      },
      {
        kind: "video",
        src: "/project-media/projects/tt-aiops/demo-engineer.mp4",
        title: "Démo ingénieur",
        note: "Analyse détaillée des incidents et RCA.",
      },
    ],
  },
  {
    slug: "social-analytics-rag-chatbot",
    title: "Plateforme d'analyse des réseaux sociaux & chatbot IA (RAG)",
    org: "Projet académique",
    emoji: "💬",
    githubUrl: "https://github.com/cherniamine/Social_Bot",
    description:
      "Analyse de sentiments et d'émotions en temps réel, détection de topics et chatbot RAG contextuel, avec dashboard analytique et streaming temps réel.",
    tags: ["React 19", "FastAPI", "FAISS", "Sentence-BERT", "TinyLlama"],
    metrics: [
      { label: "latence API", value: "<100ms" },
      { label: "précision NLP", value: ">92%" },
      { label: "chatbot", value: "<2s" },
    ],
    image: "/images/social-rag.png",
    media: [
      {
        kind: "video",
        src: "/project-media/projects/social-rag/demo.mp4",
        title: "Démo interactive",
        note: "Analyse sociale, topics et chatbot RAG.",
      },
    ],
  },
  {
    slug: "medical-deep-learning",
    title: "Détection automatique de maladies pulmonaires par Deep Learning",
    org: "Projet académique",
    emoji: "🫁",
    githubUrl: "https://github.com/cherniamine/AI-Radiology-Analyzer",
    description:
      "Classification de radiographies thoraciques (COVID-19, pneumonie virale, opacité pulmonaire, cas normaux) avec interprétabilité des prédictions via Grad-CAM.",
    tags: ["TensorFlow", "Keras", "OpenCV", "Streamlit", "Grad-CAM"],
    metrics: [
      { label: "images", value: "8 464" },
      { label: "accuracy", value: "84,3%" },
    ],
    image: "/images/medical-ai.png",
    media: [
      {
        kind: "video",
        src: "/project-media/projects/medical/demo.mp4",
        title: "Démo computer vision",
        note: "Classification et visualisation des prédictions.",
      },
    ],
  },
  {
  "slug": "insomea-chatbots",
  "title": "Plateforme de chatbots IA",
  "org": "Stage · Société Insomea",
  "emoji": "🤖",
  "githubUrl": "https://github.com/cherniamine/Chatbot-as-a-service",
  "description": "Création et déploiement de chatbots intelligents (texte, voix, image) avec moteur RAG et services Azure Cognitive.",
  "tags": ["Python", "FastAPI", "Azure OpenAI", "RAG"],
  "metrics": [
    { "label": "Précision RAG", "value": "71,2%" },
    { "label": "Latence moyenne", "value": "1,8s" },
    { "label": "Langues supportées (Français, Anglais, Arabe)", "value": "3" },
    { "label": "Modalités (Texte et Voix)", "value": "2" }
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
      "src": "/project-media/projects/insomea/captures/chatbots.png",
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
      "src": "/project-media/projects/insomea/captures/Chatbots-list.png",
      "title": "Liste détaillée des chatbots",
      "note": "Présentation complète des chatbots avec identifiants et statut (actif/inactif)."
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
    },
    
  ]
},
  {
    slug: "info-z-migration",
    title: "Migration bancaire vers Spring Boot & Angular",
    org: "Stage · Société Info-Z",
    emoji: "🏦",
    githubUrl: "https://github.com/cherniamine/Domiciliation",
    description:
      "Migration du module de domiciliation d'Oracle Forms vers une architecture moderne pour banques et Banque Centrale.",
    tags: ["Java", "Spring Boot" ,"Oracle", "Docker", "Angular" ],
    image: "/images/info-z.png",
    media: [
      {
        kind: "image",
        src: "/project-media/projects/info-z/captures/agency-operation.png",
        title: "Opération agence",
        note: "Flux métier principal côté agence.",
      },
      {
        kind: "image",
        src: "/project-media/projects/info-z/captures/bct-taking-care.png",
        title: "Prise en charge BCT",
        note: "Traitement d'un accord Banque Centrale.",
      },
      {
        kind: "image",
        src: "/project-media/projects/info-z/captures/bct-consultation.png",
        title: "Consultation accord",
        note: "Visualisation détaillée d'un accord BCT.",
      },
      {
        kind: "image",
        src: "/project-media/projects/info-z/captures/verification.png",
        title: "Vérification",
        note: "Contrôles et validations métier.",
      },
      {
        kind: "image",
        src: "/project-media/projects/info-z/captures/files-list.png",
        title: "Liste des fichiers",
        note: "Gestion documentaire et pièces jointes.",
      },
    ],
  },
  {
    slug: "smi-events",
    title: "Application de gestion d'événements",
    org: "Stage · Société SMI",
    emoji: "🎟️",
    githubUrl: "https://github.com/cherniamine/Gestion-Event",
    description:
      "Application web complète pour la création et la gestion d'événements, développée en Java et Spring Boot.",
    tags: ["Java", "Spring Boot", "Angular"],
    image: "/images/smi-events.png",
    media: [
      {
        kind: "image",
        src: "/project-media/projects/smi/captures/login.png",
        title: "Connexion",
        note: "Point d'entrée sécurisé de l'application.",
      },
      {
        kind: "image",
        src: "/project-media/projects/smi/captures/monthly-view.png",
        title: "Vue mensuelle",
        note: "Calendrier des événements sur une période complète.",
      },
      { 
        kind: "image",
        src: "/project-media/projects/smi/captures/to-do-list.png",
        title: "Liste des tâches",
        note: "Gestion des tâches à accomplir.",
      },
      {
        kind: "image",
        src: "/project-media/projects/smi/captures/events-list.png",
        title: "Liste des événements",
        note: "Vue synthétique des événements planifiés.",
      },
      {
        kind: "image",
        src: "/project-media/projects/smi/captures/event-form.png",
        title: "Formulaire événement",
        note: "Création et modification d'un événement.",
      },
      {
        kind: "image",
        src: "/project-media/projects/smi/captures/event-modif.png",
        title: "Modification d'événement",
        note: "Modification d'un événement.",
      },
      { 
        kind: "image",
        src: "/project-media/projects/smi/captures/visual-notification.png",
        title: "Notification visuelle",
        note: "alert visuelle pour les événements à venir.",
      },
        { 
        kind: "image",
        src: "/project-media/projects/smi/captures/mail-notification.png",
        title: "Notification par courriel",
        note: "Alerte par courriel pour les événements à venir.",
      },
      
      { 
        kind: "image",
        src: "/project-media/projects/smi/captures/profil.png",
        title: "Profil utilisateur",
        note: "Gestion des informations personnelles.",
      },

      
    ],
  },
{
    slug: "atb-dashboard",
    title: "Dashboard financier & modèles prédictifs",
    org: "Stage PFE · ATB Banque",
    emoji: "📊",
    githubUrl: "https://github.com/cherniamine/Dashboard-ATB-",
    description:
      "Dashboard Power BI & ETL Python avec modèles prédictifs pour l'optimisation de la gestion des liquidités bancaires.",
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
];
