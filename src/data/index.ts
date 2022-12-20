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