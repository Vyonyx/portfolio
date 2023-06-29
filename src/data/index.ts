import type { Project } from "../env";

export const NEIGHBOURLY_ID = "neighbourly";
export const AT_WHAT_COST_ID = "at-what-cost";

export const icons = {
  React: {
    path: "/icons/React.svg",
    link: "https://react.dev/",
  },
  Express: {
    path: "/icons/Express.svg",
    link: "https://expressjs.com/",
  },
  MaterialUI: {
    path: "/icons/MaterialUI.svg",
    link: "https://mui.com/",
  },
  MongoDB: {
    path: "/icons/MongoDB.svg",
    link: "https://www.mongodb.com/",
  },
  NextJS: {
    path: "/icons/NextJS.svg",
    link: "https://nextjs.org/",
  },
  Prisma: {
    path: "/icons/Prisma.svg",
    link: "https://www.prisma.io/",
  },
  Redux: {
    path: "/icons/Redux.svg",
    link: "https://redux.js.org/",
  },
  TailwindCSS: {
    path: "/icons/TailwindCSS.svg",
    link: "https://tailwindcss.com/",
  },
  TypeScript: {
    path: "/icons/TypeScript.svg",
    link: "https://www.typescriptlang.org/",
  },
};

const nSSL = "/project_screenshots/neighbourly/";
const awcSSL = "/project_screenshots/at-what-cost/";

export const projects: Project[] = [
  {
    name: "Neighbourly",
    id: NEIGHBOURLY_ID,
    thumbnail: "/project_previews/Neighbourly-recording.webm",
    description:
      "A web app that allows users to trade or give away essentials to their neighbours. The app aims to create new relationships between neighbours, leading to stronger communities. Users can upload and manage their listings, browse a marketplace to find items and communicate with other users through an instant messaging feature. The minimum viable product focuses on the trade of food and ingredients, but future updates will endeavour to create a general marketplace where neighbours can list anything to help their community (i.e school uniforms, baby clothes, services).",
    githubLink: "https://github.com/Vyonyx/neighbourly",
    liveLink: "https://neighbourly.vercel.app/",
    skills: ["TypeScript", "NextJS", "Redux", "TailwindCSS", "MongoDB"],
    screenshots: [
      nSSL + "home.png",
      nSSL + "marketplace.png",
      nSSL + "listing.png",
      nSSL + "pantry.png",
      nSSL + "messages.png",
    ],
    video: "/video-walkthroughs/neighbourly-recording.mov",
    learnings: [
      "Storing user uploaded images was a new experience for me as I had not dealt with cloud based simple storage before. The upload process involved streaming an image from a user's file system to a cloud API (DigitalOcean), which would then send back a url. This url was then stored in a database (Google Cloud), along with the rest of the user's details. Gracefully handling errors was important during this process as it required promises from two different APIs. I found the implementation simple as I was dealing with two well designed APIs and the experience made me more confident when using cloud services.",
      "Another learning occured after I had implemented the Ably API for the instant messaging feature. Dealing with Ably's SDK syntax was difficult because the library used design patterns that I was not familiar with. I had to study the documentation in depth and experiment with the API before commiting to it's use. This process taught me the importance of reseach during the planning stage and the importance of developing a simple proof of concept before starting the project (if using technologies that I am not familiar with). This experience gave me more confidence when working with new technologies as I was confident in my ability to iterate and experiment with code that I was not entirely familiar with.",
    ],
  },
  {
    name: "At What Cost",
    id: AT_WHAT_COST_ID,
    thumbnail: "/project_previews/At-What-Cost-recording.webm",
    description:
      "A full-stack web app that helps users break down their monthly SReflectionjpending habits. Users can upload a bank statement in .CSV format to display a list of transactions to that they can apply filters. The app processes the user's filters and displays a cost breakdown that gives instant feedback about where a user's money is going.",
    githubLink: "https://github.com/Vyonyx/at-what-cost-FE",
    liveLink: "https://at-what-cost-fe.vercel.app/",
    skills: ["TypeScript", "React", "Redux", "MaterialUI", "Express", "Prisma"],
    screenshots: [
      awcSSL + "home.png",
      awcSSL + "dashboard.png",
      awcSSL + "modal.png",
    ],
    video: "/video-walkthroughs/at_what_cost_recording.mov",
    learnings: [
      "This project was my first attempt at trying to host an Express server online. I researched a few services, trying to find a free/cheap option that was also simple to use. I chose to host my server and an instance of Postgresql on a 'Platform as a Service' called Railway. It took me a few days to get the different services online and working together. This experience highlighted the problems that containerisation solves and I am excited to use docker on future projects that have a similar architecture.",
      "I chose to try Auth0 for this project as it was a universal API for authorisation, and while it worked in development, it unfortunately failed in production. The root of the issue was an error occuring between Auth0 validating a user and the callback to my website. I tried solving this issue for a week and eventually made the decision to use another authorisation method as there was no feedback (logs, stack trace, etc) that I could use to solve the problem definitively. The documentation and help available online was limited as the technology versions were new and lacked documentation (React 18, React Router 6 and Auth0). I chose to implement authorisation using JSON web tokens in the end and managed to get it working in production. This experience taught me that it is risky to use new versions of technologies without testing integration in production beforhand.",
    ],
  },
];

export const frontendProjects: Project[] = [
  {
    name: "URL Shortening API",
    thumbnail: "/project_previews/URL-Shortening-API-recording.webm",
    description:
      "A simple webpage that allows user's to shorten urls. The user's urls are shortened using an API and stored in local storage. This project is based on Frontend Mentor's project specifications.",
    githubLink: "https://github.com/Vyonyx/URLShorteningAPI-feMentor-Vue",
    liveLink: "https://vyonyx.github.io/URLShorteningAPI-feMentor-Vue/",
  },
  {
    name: "NFT Card Preview",
    thumbnail: "/project_previews/NFT-Card-recording.webm",
    description:
      "Card component created from design specifications, based on a challenge from Frontend Mentor. The specs outlined subtle type variations and hover states form various aspects of the component.",
    githubLink: "https://github.com/Vyonyx/NFTPreviewCard-feMentors-Vue",
    liveLink: "https://vyonyx.github.io/NFTPreviewCard-feMentors-Vue/",
  },
  {
    name: "Age Calcuator",
    thumbnail: "/project_previews/Age-Calculator-recording.webm",
    description:
      "Age calcuator created from design specifications from Frontend Mentor. The specs outlined form validation error states, styling (colors, hover, error, etc) and two size variations.",
    githubLink: "https://github.com/Vyonyx/AgeCalculator-feMentors-Vue",
    liveLink: "https://vyonyx.github.io/AgeCalculator-feMentors-Vue/",
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
