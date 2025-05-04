interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    github?: string;
    demo?: string | null;
}

interface Job {
    id: number;
    role: string;
    company: string;
    period: string;
    picture: string;
    description: string;
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
        "degree": "Bachelor of Science in Computer Science",
        "institution": "University of the Philippines",
        "period": "2019 – 2023",
        "picture": "/src/assets/miku.png",
        "achievements": [
            "Graduated with honors (Magna Cum Laude)",
            "Thesis: AI-based traffic prediction system"
        ]
    },
    {
        "id": 2,
        "degree": "Advanced Diploma in Web Development",
        "institution": "CodeCamp PH",
        "period": "2018 – 2019",
        "picture": "/src/assets/miku.png",
        "achievements": [
            "Top 5% of cohort",
            "Built 15+ projects with MERN stack"
        ]
    },
    {
        "id": 3,
        "degree": "High School Diploma (STEM Track)",
        "institution": "Manila Science High School",
        "period": "2015 – 2019",
        "picture": "/src/assets/miku.png",
        "achievements": [
            "Robotics competition winner (2018)"
        ]
    }
]

const jobs: Job[] = [
    {
        "id": 1,
        "role": "Full-Stack Developer",
        "company": "TechNova Solutions",
        "period": "2023 – Present",
        "picture": "/src/assets/miku.png",
        "description": "Build and maintain scalable web apps using React, Node.js, and AWS. Lead a team of 3 developers to deliver client projects.",
        "tags": ["React", "Node.js", "AWS", "Agile"]
    },
    {
        "id": 2,
        "role": "Frontend Developer",
        "company": "PixelCraft Studios",
        "period": "2021 – 2023",
        "picture": "/src/assets/miku.png",
        "description": "Designed UI/UX for 10+ client websites using Next.js and Figma. Improved page load speed by 40%.",
        "tags": ["Next.js", "Figma", "Tailwind CSS"]
    },
    {
        "id": 3,
        "role": "Backend Intern",
        "company": "DataDynamo",
        "period": "2020 – 2021",
        "picture": "/src/assets/miku.png",
        "description": "Developed RESTful APIs with Python/Django and optimized database queries for analytics tools.",
        "tags": ["Python", "Django", "PostgreSQL"]
    },
    {
        "id": 4,
        "role": "Freelance Web Developer",
        "company": "Self-Employed",
        "period": "2019 – 2020",
        "picture": "/src/assets/miku.png",
        "description": "Built custom websites for small businesses using WordPress and vanilla JavaScript.",
        "tags": ["WordPress", "JavaScript", "CSS3"]
    },
    {
        "id": 5,
        "role": "IT Support Technician",
        "company": "UrbanTech Solutions",
        "period": "2018 – 2019",
        "picture": "/src/assets/miku.png",
        "description": "Provided tech support and maintained company websites. Automated internal workflows with Python scripts.",
        "tags": ["Helpdesk", "Python", "HTML/CSS"]
    }
]

const projects: Project[] = [
    {
        "id": 1,
        "title": "WeatherWave",
        "description": "A sleek weather app with real-time forecasts and animated backgrounds.",
        "tags": ["React", "OpenWeather API", "Tailwind CSS"],
        "image": "/src/assets/miku.png",
        "github": "https://github.com/yourusername/weatherwave",
        "demo": "https://weatherwave-demo.vercel.app"
    },
    {
        "id": 2,
        "title": "TaskTitan",
        "description": "A productivity app with drag-and-drop task management and Pomodoro timer.",
        "tags": ["TypeScript", "Next.js", "Firebase"],
        "image": "/src/assets/miku.png",
        "github": "https://github.com/yourusername/tasktitan",
        "demo": "https://tasktitan.vercel.app"
    },
    {
        "id": 3,
        "title": "PixelPortfolio",
        "description": "A minimalist portfolio template for creatives, with dark/light mode.",
        "tags": ["Astro", "CSS3", "GSAP"],
        "image": "/src/assets/miku.png",
        "github": "https://github.com/yourusername/pixelportfolio",
        "demo": "https://pixelportfolio.netlify.app"
    },
    {
        "id": 4,
        "title": "RecipeRadar",
        "description": "AI-powered recipe generator based on ingredients you have at home.",
        "tags": ["Python", "Flask", "OpenAI API"],
        "image": "/src/assets/miku.png",
        "github": "https://github.com/yourusername/reciperadar",
        "demo": "https://reciperadar.onrender.com"
    },
    {
        "id": 5,
        "title": "ChatterBox",
        "description": "Real-time chat app with E2E encryption and reaction emojis.",
        "tags": ["Socket.io", "Node.js", "MongoDB"],
        "image": "/src/assets/miku.png",
        "github": "https://github.com/yourusername/chatterbox",
        "demo": "https://chatterbox.fly.dev"
    },
    {
        "id": 6,
        "title": "FitTrack",
        "description": "Fitness tracker with workout logging and progress analytics.",
        "tags": ["React Native", "Express", "PostgreSQL"],
        "image": "/src/assets/miku.png",
        "github": "https://github.com/yourusername/fittrack",
        "demo": null
    },
    {
        "id": 7,
        "title": "NFT Gallery",
        "description": "Showcase and filter NFT collections from OpenSea’s API.",
        "tags": ["Vue.js", "Web3.js", "Pinia"],
        "image": "/src/assets/miku.png",
        "github": "https://github.com/yourusername/nft-gallery",
        "demo": "https://nft-gallery-demo.vercel.app"
    },
    {
        "id": 8,
        "title": "BudgetBuddy",
        "description": "Personal finance manager with expense categorization and charts.",
        "tags": ["Svelte", "D3.js", "Supabase"],
        "image": "/src/assets/miku.png",
        "github": "https://github.com/yourusername/budgetbuddy",
        "demo": "https://budgetbuddy.fly.dev"
    },
    {
        "id": 9,
        "title": "MovieMash",
        "description": "Compare movies side-by-side with ratings, trailers, and trivia.",
        "tags": ["Angular", "TMDB API", "RxJS"],
        "image": "/src/assets/miku.png",
        "github": "https://github.com/yourusername/moviemash",
        "demo": "https://moviemash.netlify.app"
    },
    {
        "id": 10,
        "title": "DevDiaries",
        "description": "A Markdown-powered blog for developers, with syntax highlighting.",
        "tags": ["Astro", "Markdown", "Prism.js"],
        "image": "/src/assets/miku.png",
        "github": "https://github.com/yourusername/devdiaries",
        "demo": "https://devdiaries.vercel.app"
    }
];

const skills: Skill[] = [
    {
        id: 1,
        name: "TypeScript",
        picture: "/src/assets/miku.png"
    },
    {
        id: 2,
        name: "React",
        picture: "/src/assets/miku.png"
    },
    {
        id: 3,
        name: "Node.js",
        picture: "/src/assets/miku.png"
    },
    {
        id: 4,
        name: "GraphQL",
        picture: "/src/assets/miku.png"
    },
    {
        id: 5,
        name: "Tailwind CSS",
        picture: "/src/assets/miku.png"
    },
    {
        id: 6,
        name: "Docker",
        picture: "/src/assets/miku.png"
    },
    {
        id: 7,
        name: "PostgreSQL",
        picture: "/src/assets/miku.png"
    },
    {
        id: 8,
        name: "AWS",
        picture: "/src/assets/miku.png"
    },
    {
        id: 9,
        name: "Jest",
        picture: "/src/assets/miku.png"
    },
    {
        id: 10,
        name: "Git",
        picture: "/src/assets/miku.png"
    }
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