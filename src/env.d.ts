/// <reference types="astro/client" />

export interface Project {
  name: string;
  id?: string;
  skills?: string[];
  screenshots?: string[];
  thumbnail: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
  video?: string;
  learnings?: string[];
}
