import type { ProjectItem } from "@/types/projects";

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "voice-email-for-blind",
    title: "Voice Email for Blind",
    summary: "Voice-controlled email application for visually impaired users",
    description: "Built an accessible email workflow with speech-to-text, text-to-speech, and voice navigation.",
    problem:
      "Visually impaired users need an email experience that can be operated without relying on a visual interface.",
    solution:
      "Implemented voice-based navigation for composing, sending, and reading emails, backed by secure IMAP and SMTP integrations.",
    contribution:
      "Built the core application flow, integrated speech-to-text and text-to-speech behavior, and connected email protocol operations.",
    businessImpact: "Improved email accessibility by enabling hands-free communication workflows for visually impaired users.",
    challenges: [
      "Designing clear voice navigation flows",
      "Handling compose, send, and read actions through speech commands",
      "Securing mailbox access through IMAP and SMTP",
      "Keeping the workflow simple for non-visual interaction",
    ],
    results: [
      { label: "Access", value: "Voice-first" },
      { label: "Input", value: "Speech" },
      { label: "Output", value: "Audio" },
      { label: "Mail", value: "IMAP/SMTP" },
    ],
    technologies: [
      { name: "Speech-to-Text", icon: "zap" },
      { name: "Text-to-Speech", icon: "zap" },
      { name: "IMAP", icon: "mail" },
      { name: "SMTP", icon: "mail" },
      { name: "Accessibility", icon: "layout" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1584697964190-7383cbee8277?w=1200&h=600&fit=crop",
    githubUrl: "https://github.com/Sandeep-2511/Voice-Email-For-Blind",
    featured: true,
    category: "Accessibility",
  },
  {
    id: "loan-approval-app",
    title: "Loan Approval App",
    summary: "Admin system for managing loan applications and customer records",
    description: "Built a web-based loan administration tool with Angular, TypeScript, and CRUD workflows.",
    problem:
      "Loan application teams need a centralized way to review applications, manage customer records, and keep status data organized.",
    solution:
      "Created an admin-facing web application with full CRUD functionality for loan and customer management.",
    contribution:
      "Implemented Angular and TypeScript screens for creating, reading, updating, and deleting loan application records.",
    businessImpact: "Helped streamline administrative review by making application and customer data easier to manage in one interface.",
    challenges: [
      "Structuring reusable Angular components",
      "Managing form state and validation",
      "Keeping customer and application data organized",
      "Designing clear admin workflows",
    ],
    results: [
      { label: "Workflow", value: "CRUD" },
      { label: "Frontend", value: "Angular" },
      { label: "Language", value: "TypeScript" },
      { label: "Use Case", value: "Admin" },
    ],
    technologies: [
      { name: "Angular", icon: "layout" },
      { name: "TypeScript", icon: "code" },
      { name: "CRUD", icon: "database" },
      { name: "Admin UI", icon: "layout" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop",
    githubUrl: "https://github.com/Sandeep-2511/Loan-Approval-App",
    featured: true,
    category: "Admin Dashboard",
  },
];

export const CONTACT_INFO = {
  email: "potdukhesandeep7@gmail.com",
  phone: "+91 9763220934",
  location: "Bangalore, India",
  availability: "Open to full stack developer opportunities",
  social: [
    { platform: "GitHub", url: "https://github.com/Sandeep-2511", label: "github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/sandeeppotdukhe", label: "linkedin" },
    { platform: "Email", url: "mailto:potdukhesandeep7@gmail.com", label: "email" },
  ],
};
