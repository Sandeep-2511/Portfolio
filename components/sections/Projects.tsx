"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { ProjectCard, SectionTitle, SectionWrapper } from "@/components/ui";
import { FEATURED_PROJECTS } from "@/data/projects";

/**
 * Featured Projects section - Showcases enterprise-level case studies
 * Features: Project modals with detailed information, tech stack display, animations
 */
const Projects: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <SectionWrapper>
        {/* Section Title */}
        <SectionTitle
          subtitle="Proven Excellence"
          title="Featured Projects"
          description="Projects from my resume that show accessible workflows and practical admin tooling"
        />

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-8 lg:gap-12"
        >
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="mb-4 text-gray-400">
            Want to see more?
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Sandeep-2511"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/50"
          >
            View More on GitHub
          </motion.a>
        </motion.div>
      </SectionWrapper>
    </section>
  );
};

export default Projects;
