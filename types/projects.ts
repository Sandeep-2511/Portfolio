export interface ProjectTechnology {
  name: string;
  icon?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  description: string;
  problem: string;
  solution: string;
  contribution: string;
  businessImpact: string;
  challenges: string[];
  results: ProjectMetric[];
  technologies: ProjectTechnology[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
