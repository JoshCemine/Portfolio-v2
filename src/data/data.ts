const buildUrlBase = "portfolio";

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    github?: string;
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
        "degree": "B.S. Computer Science",
        "institution": "University of the Philippines",
        "period": "September 2020 - July 2024",
        "picture": `/${buildUrlBase}/experience/UP.png`,
        "achievements": [
            "GPA: 1.6",
            "Committee Head of UP Serenata, the school choir that performed in multiple interschool competitions",
            "Science Federation and Google Developer Student Club member"
        ]
    },
    {
        "id": 2,
        "degree": "TVL - Information and Communication Technology",
        "institution": "Tagbilaran City Science High School",
        "period": "August 2018 - July 2020",
        "picture": `/${buildUrlBase}/experience/TCSHS.png`,
        "achievements": []
    }
]

const jobs: Job[] = [
    {
        "id": 1,
        "role": "Intern",
        "company": "Devsoft PH",
        "period": "August 2024 – Dec. 2024",
        "picture": `/${buildUrlBase}/experience/DevSoftPH.jpg`,
        "description": "Provided technical support by troubleshooting customer issues and debugging Express.js and jQuery-related problems in the company’s product, improving user experience.",
        "tags": ["React", "Angular", "JQuery"]
    },
    {
        "id": 2,
        "role": "Intern",
        "company": "Old St. Labs",
        "period": "July 2023 – Sept. 2023",
        "picture": `/${buildUrlBase}/experience/OldStLabs.png`,
        "description": "Collaborated with senior developers to build a full-stack application, enhancing frontend design and integrating RESTful APIs using React, Express.js, NestJS, and Nx Workspace.",
        "tags": ["React", "Express", "Nest", "NxWorkspace"]
    },
    {
        "id": 3,
        "role": "Intern",
        "company": "GWION Solutions",
        "period": "March 2020 – June 2020",
        "picture": `/${buildUrlBase}/experience/Gwion.jpg`,
        "description": "Developed the frontend for a real estate platform (property sales & rentals) using WordPress, implementing custom theme modifications for improved UI/UX.",
        "tags": ["WordPress", "PHP", "JavaScript", "JQuery"]
    }
]

const projects: Project[] = [
    {
        "id": 1,
        "title": "Project Ceboom",
        "description": "React and Express project for optimal city routing.",
        "tags": ["ReactJS", "ExpressJS", "AWS"],
        "image": `/${buildUrlBase}/projects/Ceboom.png`,
        "github": "https://github.com/sansqed/project-ceboom"
    },
    {
        "id": 2,
        "title": "College of Science Automatic Request System",
        "description": "School form request web app with real-time approval tracking and progress monitoring.",
        "tags": ["ReactJS", "ExpressJS", "AWS"],
        "image": `/${buildUrlBase}/projects/CROMA.jpg`,
        "github": "https://github.com/johnochea/croma"
    },
    {
        "id": 3,
        "title": "CROCS vs PNGs",
        "description": "A Godot tower defense game.",
        "tags": ["Godot"],
        "image": `/${buildUrlBase}/projects/CrocsVsPng.jpg`,
        "github": "https://github.com/naixsu/crocpng"
    }
];

const skills: Skill[] = [
    {
        "id": 1,
        "name": "HTML",
        "picture": ""
    },
    {
        "id": 2,
        "name": "CSS",
        "picture": ""
    },
    {
        "id": 3,
        "name": "JavaScript",
        "picture": ""
    },
    {
        "id": 4,
        "name": "TypeScript",
        "picture": ""
    },
    {
        "id": 5,
        "name": "Node",
        "picture": ""
    },
    {
        "id": 6,
        "name": "React",
        "picture": ""
    },
    {
        "id": 7,
        "name": "Angular",
        "picture": ""
    },
    {
        "id": 8,
        "name": "Express",
        "picture": ""
    },
    {
        "id": 9,
        "name": "NextJS",
        "picture": ""
    },
    {
        "id": 10,
        "name": "Astro",
        "picture": ""
    },
    {
        "id": 11,
        "name": "TailwindCSS",
        "picture": ""
    },
    {
        "id": 12,
        "name": "PHP",
        "picture": ""
    },
    {
        "id": 13,
        "name": "Wordpress",
        "picture": ""
    },
    {
        "id": 14,
        "name": "MongoDB",
        "picture": ""
    },
    {
        "id": 15,
        "name": "SQL",
        "picture": ""
    },
    {
        "id": 16,
        "name": "Python",
        "picture": ""
    },
    {
        "id": 17,
        "name": "Numpy",
        "picture": ""
    },
    {
        "id": 18,
        "name": "Pandas",
        "picture": ""
    },
    {
        "id": 19,
        "name": "Godot",
        "picture": ""
    },
    {
        "id": 20,
        "name": "Git",
        "picture": ""
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