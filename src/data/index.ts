import type { Project } from "../env";

export const NEIGHBOURLY_ID = 'neighbourly'
export const AT_WHAT_COST_ID = 'at-what-cost'

export const icons = {
  'React': '/icons/React.svg',
  'Express': '/icons/Express.svg',
  'MaterialUI': '/icons/MaterialUI.svg',
  'MongoDB': '/icons/MongoDB.svg',
  'NextJS': '/icons/NextJS.svg',
  'Prisma': '/icons/Prisma.svg',
  'Redux': '/icons/Redux.svg',
  'TailwindCSS': '/icons/TailwindCSS.svg',
  'TypeScript': '/icons/TypeScript.svg',
}

export const projects: Project[] = [
  {
    name: "Neighbourly",
    id: NEIGHBOURLY_ID,
    thumbnail: "/project_previews/neighbourly.png",
    description:
      "A web app that allows users to trade or give away essentials to their neighbours. The app aims to create new relationships between neighbours, leading to stronger communities. Users can upload and manage their listings, browse a marketplace to find items and communicate with other users through an instant messaging feature. The minimum viable product focuses on the trade of food and ingredients, but future updates will endeavour to create a general marketplace where neighbours can list anything to help their community (i.e school uniforms, baby clothes, services).",
    githubLink: "https://github.com/Vyonyx/neighbourly",
    liveLink: "https://neighbourly.vercel.app/",
    skills: ['TypeScript', 'NextJS', 'Redux', 'TailwindCSS', 'MongoDB']
  },
  {
    name: "At What Cost",
    id: AT_WHAT_COST_ID,
    thumbnail: "/project_previews/AWC-Preview.png",
    description:
      "A full-stack web app that helps users break down their monthly spending habits. Users can upload a bank statement in .CSV format to display a list of transactions to that they can apply filters. The app processes the user's filters and displays a cost breakdown that gives instant feedback about where a user's money is going.",
    githubLink: "https://github.com/Vyonyx/at-what-cost-FE",
    liveLink: "https://at-what-cost-fe.vercel.app/",
    skills: ['TypeScript', 'React', 'Redux', 'MaterialUI', 'Express', 'Prisma']
  },
];

export const miscProjects: Project[] = [
  {
    name: "CV Builder",
    thumbnail: "/project_previews/cv-builder.png",
    description:
      "My first React project. This frontend app allows users to quickly build a CV and save the output as a PDF.",
    githubLink: "https://github.com/Vyonyx/cv-maker",
  },
  {
    name: "Analog Clock",
    thumbnail: "/project_previews/clock.png",
    description:
      "An experimental frontend project using destructured assets to create a realistic analogue clock.",
    githubLink: "https://github.com/shaneel-kumar/clock",
    liveLink: "https://shaneel-kumar.github.io/clock/",
  },
  {
    name: "Weather App",
    thumbnail: "/project_previews/weather.png",
    description:
      "A simple frontend project that consumes a weather API. Made with vanilla Javascript and handpicked assets.",
    githubLink: "https://github.com/Vyonyx/weather-app",
    liveLink: "https://vyonyx.github.io/weather-app/",
  },
];

export const architectureProject: Project = {
  name: "Emergent Ecologies",
  thumbnail: "/swarm-hero.jpg",
  description:
    "My architectural thesis explores simulating a demographic and mapping their interactions to create visual feedback that architects can use to inform their design.",
};

export interface Experience {
  title: string;
  company: string;
  year: string;
  description: string;
}

export const experience: Experience[] = [
  {
    title: "Full Stack Web Developer",
    company: "Dev Academy Aotearoa",
    year: "Aug - Dec 2022",
    description: `Graduated from an intense 15 week bootcamp that taught modern web development and what it is like to work in teams. We learnt various frontend and backend technologies and how to work in an agile setting. There was also an emphasis on learning soft skills to help improve the people side of tech and how to work with various personalities.`,
  },
  {
    title: "Architectural Graduate (Intermediate)",
    company: "Prime Designs",
    year: "Sep 2020 - Aug 2022",
    description: `I took projects from client consultation to building consent submission and construction management, working on projects that fell into a wide spectrum of difficulty. I also managed client expectations, coordinated external consultants and helped project manage successful outcomes.`,
  },
  {
    title: "Architectural Graduate (Team Lead)",
    company: "Design Network Architecture",
    year: "Jan 2019 - Mar 2020",
    description: `Responsible for leading a team of 3 junior developers while they learnt the workflow and building consent process. This was my first role in a leadership position where I found a natural ability to coordinate a team towards an outcome and how to work with different personalities. I was promoted twice in a year to land the team lead position, progressing from junior to intermediate technician prior.`,
  },
];

export interface Technical {
  skill: string;
  description: string;
}

export const technical: Technical[] = [
  {
    skill: "Javascript",
    description: `Used to create 30+ projects. From web apps to games with complex DOM manipulations`,
  },
  {
    skill: "Typescript",
    description: `Used to build type-safe web apps and improve my developer experience`,
  },
  {
    skill: "React.js",
    description: `Used to create 10+ projects with dynamic user interactions. Also used Next.js (React/meta framework)`,
  },
  {
    skill: "Redux",
    description: `Used to manage client side state and dynamically sync external data`,
  },
  {
    skill: "Git",
    description: `Used to version control projects from the earliest stages of my learning`,
  },
  {
    skill: "SQL",
    description: `Used as the primary database type on full stack projects. Familiar with SQLite3 and Postgres`,
  },
  {
    skill: "MongoDB",
    description: `Used as primary 'document' database. Familiar with Mongo Atlas and various query builders`,
  },
  {
    skill: "Express",
    description: `Used to build servers for full stack projects (database APIs & traditional HTTP servers)`,
  },
  {
    skill: "Figma/Adobe Suite",
    description: `Used to plan and wireframe mobile-first designs, and to create custom assets`,
  },
];

