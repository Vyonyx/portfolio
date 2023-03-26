/// <reference types="astro/client" />

export interface Project {
  name: string;
  id?: string;
  thumbnail: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
}
