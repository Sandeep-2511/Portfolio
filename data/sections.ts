/**
 * Static data for About, Skills, and Experience sections
 */

import type { TimelineEvent, StatCard, SkillCategory, ExperienceItem } from "@/types/sections";

// About Timeline
export const ABOUT_TIMELINE: TimelineEvent[] = [
  {
    title: "Computer Science Foundation",
    description: "Started B.Tech in Computer Science at Bajaj Institute of Technology, Wardha",
    date: "2018",
  },
  {
    title: "Graduated in Computer Science",
    description: "Completed B.Tech and moved into full stack engineering",
    date: "2022",
  },
  {
    title: "Capgemini - Mercedes Client",
    description: "Delivered Angular and .NET Core features in agile enterprise teams",
    date: "2022",
  },
  {
    title: "Diligent Corporation",
    description: "Building React, ASP.NET Core, SQL Server, and AWS solutions for enterprise products",
    date: "2024",
  },
];

// Stats for About Section
export const ABOUT_STATS: StatCard[] = [
  { label: "Years Experience", value: "3.9" },
  { label: "Enterprise Roles", value: "2" },
  { label: "Certifications", value: "3" },
  { label: "Cloud Platforms", value: "AWS" },
];

// Skills by Category
export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    name: "Backend",
    skills: [
      { name: "ASP.NET Core", icon: "code", proficiency: 90, category: "backend" },
      { name: "Web API", icon: "code", proficiency: 88, category: "backend" },
      { name: ".NET Framework", icon: "code", proficiency: 84, category: "backend" },
      { name: "MVC", icon: "code", proficiency: 82, category: "backend" },
      { name: "Entity Framework", icon: "code", proficiency: 85, category: "backend" },
      { name: "SQL Server", icon: "database", proficiency: 90, category: "backend" },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React.js", icon: "code", proficiency: 90, category: "frontend" },
      { name: "Angular", icon: "code", proficiency: 88, category: "frontend" },
      { name: "TypeScript", icon: "code", proficiency: 88, category: "frontend" },
      { name: "JavaScript", icon: "code", proficiency: 86, category: "frontend" },
      { name: "HTML5", icon: "code", proficiency: 90, category: "frontend" },
      { name: "CSS3", icon: "palette", proficiency: 88, category: "frontend" },
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "AWS EC2", icon: "cloud", proficiency: 84, category: "cloud" },
      { name: "AWS S3", icon: "cloud", proficiency: 84, category: "cloud" },
      { name: "AWS RDS", icon: "database", proficiency: 82, category: "cloud" },
      { name: "AWS Lambda", icon: "zap", proficiency: 78, category: "cloud" },
      { name: "Azure DevOps", icon: "git-branch", proficiency: 82, category: "cloud" },
      { name: "CI/CD", icon: "zap", proficiency: 82, category: "cloud" },
    ],
  },
  {
    name: "Engineering",
    skills: [
      { name: "REST APIs", icon: "terminal", proficiency: 90, category: "engineering" },
      { name: "Microservices", icon: "box", proficiency: 80, category: "engineering" },
      { name: "LINQ", icon: "database", proficiency: 88, category: "engineering" },
      { name: "Stored Procedures", icon: "database", proficiency: 84, category: "engineering" },
      { name: "SOLID", icon: "code", proficiency: 84, category: "engineering" },
      { name: "Unit Testing", icon: "zap", proficiency: 78, category: "engineering" },
    ],
  },
];

// Experience
export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    company: "Diligent Corporation",
    position: "Full Stack Developer - Community Team",
    duration: "June 2024 - Present",
    description: "Building and modernizing enterprise web applications with React, ASP.NET Core, SQL Server, and AWS.",
    responsibilities: [
      "Built and enhanced React UI modules using reusable components to improve workflows across enterprise screens",
      "Designed REST APIs in ASP.NET Core with validation, exception handling, and token-based security",
      "Optimized LINQ queries and SQL Server stored procedures for high-volume datasets",
      "Used AWS EC2, S3, RDS, and Lambda for hosting, storage, database connectivity, and automation tasks",
    ],
    achievements: [
      "Reduced backend response time by removing unnecessary joins and tuning data access paths",
      "Migrated legacy modules from .NET Framework to .NET Core",
      "Improved maintainability by replacing incompatible libraries and modernizing configuration",
    ],
    technologies: ["React.js", "ASP.NET Core", "Web API", "SQL Server", "LINQ", "AWS"],
    isLatest: true,
  },
  {
    company: "Capgemini",
    position: "Full Stack Developer",
    duration: "Aug 2022 - June 2024",
    description: "Delivered client-facing enterprise features for Mercedes using Angular, .NET Core, and SQL Server.",
    responsibilities: [
      "Delivered end-to-end features with Angular and .NET Core in a client-facing environment",
      "Designed reusable REST APIs following SOLID principles and repository patterns",
      "Supported CI/CD improvements using Azure DevOps, Jenkins, and GitHub Actions",
      "Collaborated in sprint planning, code reviews, QA handoffs, and stable release delivery",
    ],
    achievements: [
      "Contributed to consistent on-time delivery for Mercedes client work",
      "Improved service-layer clarity and maintainability through reusable API patterns",
      "Accelerated release cycles through CI/CD automation support",
    ],
    technologies: ["Angular", "TypeScript", "ASP.NET Core", "MVC", "SQL Server", "Azure DevOps", "Jenkins"],
  },
];
