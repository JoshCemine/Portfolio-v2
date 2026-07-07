const buildUrlBase = "";

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    link?: string;
}

interface JobSubsection {
    title: string;
    role: string;
    bullets: string[];
}

interface Job {
    id: number;
    role: string;
    company: string;
    period: string;
    picture: string;
    bullets?: string[];
    subsections?: JobSubsection[];
    tags: string[];
}

interface Education {
    id: number;
    degree: string;
    institution: string;
    period: string;
    picture: string;
    achievements: string[];
}

interface Skill {
    id: number;
    name: string;
    picture: string;
}

const education: Education[] = [
    {
        "id": 1,
        "degree": "B.S. Computer Science",
        "institution": "University of the Philippines",
        "period": "September 2020 - July 2024",
        "picture": `${buildUrlBase}/experience/UP.png`,
        "achievements": [
            "Graduated Cum Laude",
            "Committee Head of UP Serenata, the school choir that performed in multiple interschool competitions",
            "Science Federation and Google Developer Student Club member"
        ]
    },
    {
        "id": 2,
        "degree": "TVL - Information and Communication Technology",
        "institution": "Tagbilaran City Science High School",
        "period": "August 2018 - July 2020",
        "picture": `${buildUrlBase}/experience/TCSHS.png`,
        "achievements": []
    }
]

const jobs: Job[] = [
    {
        "id": 1,
        "role": "Contract & Project-Based Engagements",
        "company": "Freelance Software Engineer",
        "period": "January 2025 – June 2026",
        "picture": `${buildUrlBase}/experience/Freelance.svg`,
        "subsections": [
            {
                "title": "Clinical Solutions",
                "role": "Lead Developer / Project Manager",
                "bullets": [
                    "Co-led a team of developers and US RNs building a Next.js compliance platform on Vercel and AWS, owning the delivery and feature work",
                    "Built a Python automation suite that lifted the team's peak output from 7–10 handmade reports a day to 100+ (a 10x improvement) across 8 client centers, helping them pass surveys at 100%"
                ]
            },
            {
                "title": "GymBros Inc. (Liftoff App)",
                "role": "Lead Developer",
                "bullets": [
                    "Built and deployed a full-stack Next.js app (React, Node, Supabase) for ad-management workflows, connected to TikTok, Meta, and Google over their REST APIs with retry and rate-limit handling",
                    "Cut ad publishing from 30–40 minutes per platform to about 1 minute by building an ad-creation pipeline on the Meta and TikTok APIs",
                    "Refactored an 8,000-line file into smaller modules and switched 10,000+ item lists to virtualized rendering (TanStack), cutting startup from about 12 minutes to near-instant"
                ]
            },
            {
                "title": "Freelance Clients",
                "role": "Software Engineer",
                "bullets": [
                    "Built a Playwright scraping system with n8n workflows and captcha solvers that delivered bank-repossessed property data into a Next.js dashboard for a real-estate intelligence client",
                    "Built a Next.js and Supabase demo with OpenAI function-calling RAG for The Cultivator, an AI-powered job platform"
                ]
            }
        ],
        "tags": ["NextJS", "Python", "Supabase", "AWS", "Playwright", "n8n"]
    },
    {
        "id": 2,
        "role": "Intern",
        "company": "Devsoft PH",
        "period": "August 2024 – Dec. 2024",
        "picture": `${buildUrlBase}/experience/DevSoftPH.jpg`,
        "bullets": [
            "Provided technical support by debugging Angular and jQuery issues, improving product stability and user experience",
            "Resolved customer-reported problems through code fixes and clear communication, enhancing product adoption",
            "Received advanced mentorship in JavaScript design patterns and MVC architecture, improving code quality"
        ],
        "tags": ["React", "Angular", "JQuery"]
    },
    {
        "id": 3,
        "role": "Intern",
        "company": "Old St. Labs",
        "period": "July 2023 – Sept. 2023",
        "picture": `${buildUrlBase}/experience/OldStLabs.png`,
        "bullets": [
            "Built full-stack apps in an Nx monorepo (NestJS, Next.js) with responsive React and TailwindCSS UIs under senior code review"
        ],
        "tags": ["Nx", "NestJS", "NextJS", "React"]
    },
    {
        "id": 4,
        "role": "Intern",
        "company": "GWION Solutions",
        "period": "March 2020 – June 2020",
        "picture": `${buildUrlBase}/experience/Gwion.jpg`,
        "bullets": [
            "Built custom WordPress themes using PHP and JavaScript using the classic editor workflow",
            "Developed and optimized MySQL database architecture with a focus on improved scalability",
            "Collaborated with clients and mentors to deliver e-commerce solutions that boosted business metrics"
        ],
        "tags": ["WordPress", "PHP", "JavaScript", "JQuery"]
    }
]

const projects: Project[] = [
    {
        "id": 1,
        "title": "Self-Hosted n8n AI Assistant",
        "description": "An AI agent running on a private Linux server that labels and triages my email and surfaces urgent items to me through the Telegram API.",
        "tags": ["n8n", "Linux", "Telegram API"],
        "image": "",
        "link": "https://n8n.smols.work/"
    },
    {
        "id": 2,
        "title": "Repossessed Cars Scraping App",
        "description": "Web scraping app automating data extraction from bank repositories, with Supabase integration and dual authentication (credentials and Google OAuth).",
        "tags": ["Supabase", "OAuth", "Web Scraping"],
        "image": "",
        "link": "https://github.com/JoshCemine/my-dashboard-app"
    },
    {
        "id": 3,
        "title": "This Portfolio Website",
        "description": "Designed in Figma and built with Astro, React, and TailwindCSS. Deployed on a DigitalOcean droplet using Nginx, later migrated to Oracle Cloud.",
        "tags": ["Astro", "React", "TailwindCSS"],
        "image": `${buildUrlBase}/projects/Portfoliov2.png`,
        "link": "https://github.com/JoshCemine/Portfolio-v2"
    },
    {
        "id": 4,
        "title": "Project Ceboom",
        "description": "A collaborative MERN-stack app for finding optimal city routes. I led DevOps and deployment, configuring AWS infrastructure for high availability.",
        "tags": ["ReactJS", "ExpressJS", "AWS"],
        "image": `${buildUrlBase}/projects/Ceboom.png`,
        "link": "https://github.com/sansqed/project-ceboom"
    },
    {
        "id": 5,
        "title": "College of Science Automatic Request System",
        "description": "Full-stack web app automating school form requests with real-time approval tracking. I engineered the ExpressJS REST API and managed the AWS deployment.",
        "tags": ["ReactJS", "ExpressJS", "AWS"],
        "image": `${buildUrlBase}/projects/CROMA.jpg`,
        "link": "https://github.com/johnochea/croma"
    },
    {
        "id": 6,
        "title": "CROCS vs PNGs",
        "description": "A Godot tower defense game with wave-based enemy mechanics. I implemented the multiplayer synchronization and weapon systems.",
        "tags": ["Godot"],
        "image": `${buildUrlBase}/projects/CrocsVsPng.jpg`,
        "link": "https://github.com/naixsu/crocpng"
    }
];

const skills: Skill[] = [
    { "id": 1, "name": "TypeScript", "picture": "" },
    { "id": 2, "name": "JavaScript", "picture": "" },
    { "id": 3, "name": "Python", "picture": "" },
    { "id": 4, "name": "SQL", "picture": "" },
    { "id": 5, "name": "Java", "picture": "" },
    { "id": 6, "name": "React", "picture": "" },
    { "id": 7, "name": "NextJS", "picture": "" },
    { "id": 8, "name": "Node", "picture": "" },
    { "id": 9, "name": "NestJS", "picture": "" },
    { "id": 10, "name": "Express", "picture": "" },
    { "id": 11, "name": "TailwindCSS", "picture": "" },
    { "id": 12, "name": "AWS", "picture": "" },
    { "id": 13, "name": "Vercel", "picture": "" },
    { "id": 14, "name": "Supabase", "picture": "" },
    { "id": 15, "name": "PostgreSQL", "picture": "" },
    { "id": 16, "name": "Docker", "picture": "" },
    { "id": 17, "name": "Linux", "picture": "" },
    { "id": 18, "name": "Git", "picture": "" },
    { "id": 19, "name": "AI Agents", "picture": "" },
    { "id": 20, "name": "n8n", "picture": "" },
    { "id": 21, "name": "Playwright", "picture": "" }
];

export {
    type Project,
    projects,
    type Job,
    jobs,
    type Education,
    education,
    type Skill,
    skills
}
