/**
 * About, Skills, and Experience section data and types
 */

export interface TimelineEvent {
  title: string;
  description: string;
  date: string;
}

export interface StatCard {
  label: string;
  value: string;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  icon: string;
  proficiency: number; // 0-100
  category: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  isLatest?: boolean;
}
