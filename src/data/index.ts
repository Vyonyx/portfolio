export interface Project {
  name: string;
  thumbnail: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
}

export const projects: Project[] = [
  {
    name: 'Neighbourly',
    thumbnail: 'https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    description: 'Marketplace for neighbours to barter and give away food, building stronger relationships with those around you.',
    githubLink: 'https://github.com/Vyonyx/neighbourly',
    liveLink: 'https://github.com/Vyonyx/neighbourly',
  },
  {
    name: 'At What Cost',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    description: 'Budget tracking app used to understand what you\'re spending money on so you can make informed decisions about your finances.',
    githubLink: 'https://github.com/Vyonyx/neighbourly',
    liveLink: '',
  },
  
  {
    name: 'Neighbourly',
    thumbnail: 'https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    description: 'Marketplace for neighbours to barter and give away food, building stronger relationships with those around you.',
    githubLink: 'https://github.com/Vyonyx/neighbourly',
    liveLink: 'https://github.com/Vyonyx/neighbourly',
  },
]

export const miscProjects: Project[] = [
  {
    name: 'CV Builder',
    thumbnail: 'https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    description: 'Marketplace for neighbours to barter and give away food, building stronger relationships with those around you.',
    githubLink: 'https://github.com/Vyonyx/cv-builder',
  },
  {
    name: 'Minesweeper',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    description: 'Budget tracking app used to understand what you\'re spending money on so you can make informed decisions about your finances.',
    githubLink: 'https://github.com/Vyonyx/neighbourly',
  },
  {
    name: 'CV Builder',
    thumbnail: 'https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    description: 'Marketplace for neighbours to barter and give away food, building stronger relationships with those around you.',
    githubLink: 'https://github.com/Vyonyx/cv-builder',
  },
]

export const architectureProject: Project =  {
  name: 'Emergent Ecologies',
  thumbnail: '/swarm-hero.jpg',
  description: 'My architectural thesis on the use of simulation to study demographic interactions and create a built environment using the visual data.'
}

export interface Experience {
  title: string;
  company: string;
  year: string;
  description: string;
}

export const experience: Experience[] = [
  {
    title: 'Full Stack Web Developer',
    company: 'Dev Academy Aotearoa',
    year: 'Aug - Dec 2022',
    description: `Graduated from an intense 15 week web development bootcamp that mimics what it’s like to work in development teams. The programme heavily focused on learning a modern web dev stack and how we can work in teams to deliver products through the agile methodology. There was also emphasis on learning soft skills that help us navigate working in a variety of teams.`
  },
  {
    title: 'Architectural Graduate (Intermediate)',
    company: 'Prime Designs',
    year: 'Sep 2020 - Aug 2022',
    description: `I took projects from client consultation to building consent submission, working on projects that fell into a wide spectrum of difficulty. The role involved leading my own projects by coordinating with external consultants/engineers to collate and deliver a set of construction documents. I also managed client expectations, deadlines and answered builder’s queries during construction phase.`
  },
  {
    title: 'Architectural Graduate (Team Lead)',
    company: 'Design Network Architecture',
    year: 'Jan 2019 - Mar 2020',
    description: `I was responsible for project managing a team of 3 junior developers while they learned the workflow/process and also provided mentorship and upskilling sessions on an individual basis. This was my first role in a leadership position where I found a natural ability to coordinate a team towards an outcome and how to work with different types of people. This position was also a 2nd promotion from starting as a junior, to intermediate, and then finally team lead. I was told that my quick progression over the year was due to my technical proficiency and the delivery of high quality work in an efficient manner.`
  },
]

export interface Technical {
  skill: string;
  description: string;
}

export const technical: Technical[] = [
  {
    skill: 'Javascript',
    description: `Used to create 30+ projects. From games, to web sites and apps using vanilla DOM manipulation`
  },
  {
    skill: 'Typescript',
    description: `Used to build more resilient web apps and improve my developer experience`
  },
  {
    skill: 'React.js',
    description: `Used to create 10+ projects with dynamic user interactions. Also used Next.js (React/meta framework)`
  },
  {
    skill: 'Redux',
    description: `Used to managed frontend states and dynamically show loading states of async data`
  },
  {
    skill: 'Git',
    description: `Used to version control, from early frontend JS projects to learning full stack development`
  },
  {
    skill: 'SQLite3',
    description: `Used as primary database on full stack projects. Familiar with table joins, queries and CRUD operations`
  },
  {
    skill: 'MongoDB',
    description: `Used as primary database on personal full stack projects. Familiar with queries and CRUD operations`
  },
  {
    skill: 'Express',
    description: `Used to build backends for full stack projects (APIs and communication with databases)`
  },
  {
    skill: 'Figma/Adobe Suite',
    description: `Used to wireframe designs and create custom assets`
  },
]