import { Project } from "@/app/types/project";

export const projectsData: Project[] = [
    {
        id: "en-cours",
        title: "En cours",
        category: "Next.js",
        description:
            "Projet actuellement en développement. Un nouveau projet passionnant utilisant les dernières technologies du web moderne.",
        color: "from-[#d9885a] to-[#f2c38f]",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        highlights: [
            "Architecture App Router",
            "Server Components",
            "Animations fluides",
        ],
    },
    {
        id: "nspy",
        title: "Nspy (Demo)",
        category: "React / Node.js",
        description:
            "Application de surveillance et d'analyse de données en temps réel avec dashboard interactif et visualisations avancées.",
        image: "/nspy.png",
        href: "https://projet-personnel-rust.vercel.app/",
        color: "from-[#6366f1] to-[#8b5cf6]",
        stack: ["React", "Node.js", "Express", "PostgreSQL"],
        highlights: [
            "Dashboard temps réel",
            "API RESTful",
            "Authentification JWT",
            "Déploiement Vercel",
        ],
    },
    {
        id: "adalicious",
        title: "Adalicious kebab – Gestion de restaurant (Demo)",
        category: "React (Vite) + Node.js (Express)",
        description:
            "Système complet de gestion de restaurant avec menu dynamique, gestion des commandes et interface d'administration.",
        image: "/adali.png",
        href: "https://adalicious-front.vercel.app/",
        color: "from-[#10b981] to-[#34d399]",
        stack: ["React", "Vite", "Node.js", "Express", "MongoDB"],
        highlights: [
            "Gestion des menus",
            "Système de commandes",
            "Panel admin",
            "Design responsive",
        ],
    },
    {
        id: "mobel",
        title: "Möbel – E-commerce de meubles (Demo)",
        category: "React / Node.js",
        description:
            "Plateforme e-commerce complète pour la vente de meubles avec panier, filtres et interface utilisateur moderne.",
        image: "/mobel.png",
        href: "https://moble-front.vercel.app/#",
        color: "from-[#f59e0b] to-[#fbbf24]",
        stack: ["React", "Node.js", "Express", "Stripe"],
        highlights: [
            "Catalogue produits",
            "Panier d'achat",
            "Filtres avancés",
            "Paiement sécurisé",
        ],
    },
    {
        id: "space-dev",
        title: "Space Dev – Explorateur spatial",
        category: "JavaScript / API NASA",
        description:
            "Application de visualisation de données spatiales utilisant l'API NASA pour explorer l'univers.",
        image: "/space.png",
        href: "https://github.com/adatechschool/projet-dataviz-api-spacedevs",
        color: "from-[#0ea5e9] to-[#38bdf8]",
        stack: ["JavaScript", "HTML", "CSS", "NASA API"],
        highlights: [
            "Intégration API NASA",
            "Visualisation de données",
            "Interface interactive",
        ],
    },
    {
        id: "mugiwara-quiz",
        title: "Mugiwara Quiz",
        category: "HTML/CSS/JavaScript",
        description:
            "Quiz interactif sur le thème de One Piece avec système de score et animations.",
        href: "https://github.com/adatechschool/projet-quiz-mugiwara",
        color: "from-[#ef4444] to-[#f87171]",
        stack: ["HTML", "CSS", "JavaScript"],
        highlights: ["Quiz interactif", "Système de score", "Animations CSS"],
    },
];
