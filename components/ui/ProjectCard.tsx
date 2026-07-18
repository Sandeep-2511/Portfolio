"use client";

import type { FC } from "react";
import type { Variants } from "framer-motion";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code, X } from "lucide-react";
import type { ProjectItem } from "@/types/projects";
import GlassCard from "./GlassCard";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

/**
 * ProjectCard component displays project case study details
 * Features: Image zoom, modal preview, tech stack display, expandable details
 */
export const ProjectCard: FC<ProjectCardProps> = ({ project, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const borderVariants = {
    hover: {
      borderColor: "rgba(59, 130, 246, 0.5)",
      boxShadow: "0 0 30px rgba(59, 130, 246, 0.3), inset 0 0 30px rgba(59, 130, 246, 0.05)",
    },
  };

  return (
    <>
      <motion.div
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          variants={borderVariants}
          whileHover="hover"
          className="group relative overflow-hidden rounded-2xl border border-white/10 transition-all duration-300"
        >
          {/* Image Container */}
          <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-900/20 to-violet-900/20">
            <motion.img
              variants={imageVariants}
              whileHover="hover"
              src={project.imageUrl}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          {/* Content */}
          <div className="relative p-6 backdrop-blur-md bg-white/5">
            {/* Category Badge */}
            {project.category && (
              <div className="mb-3 inline-block">
                <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
                  {project.category}
                </span>
              </div>
            )}

            {/* Title */}
            <h3 className="mb-2 text-2xl font-bold text-white">{project.title}</h3>

            {/* Summary */}
            <p className="mb-4 text-sm text-gray-300 line-clamp-2">{project.summary}</p>

            {/* Tech Stack */}
            <div className="mb-4 flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <motion.span
                  key={tech.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-block rounded-full bg-gradient-to-r from-blue-500/20 to-violet-500/20 px-3 py-1 text-xs font-medium text-blue-300 border border-blue-500/30"
                >
                  {tech.name}
                </motion.span>
              ))}
              {project.technologies.length > 3 && (
                <span className="inline-block rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-400">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>

            {/* Results Highlight */}
            <div className="mb-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
              {project.results.slice(0, 2).map((result) => (
                <div key={result.label}>
                  <p className="text-xs text-gray-400">{result.label}</p>
                  <p className="font-bold text-blue-400">{result.value}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="flex-1 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2 font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/50"
              >
                Read More
              </motion.button>

              {project.liveUrl && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-blue-500/50 bg-blue-500/10 p-2 text-blue-400 transition-all hover:bg-blue-500/20"
                  title="Live Demo"
                >
                  <ExternalLink size={20} />
                </motion.a>
              )}

              {project.githubUrl && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-violet-500/50 bg-violet-500/10 p-2 text-violet-400 transition-all hover:bg-violet-500/20"
                  title="GitHub"
                >
                  <Code size={20} />
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-gradient-to-b from-blue-950/20 via-[#030712] to-violet-950/20 p-8 backdrop-blur-xl"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 p-2 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </motion.button>

              {/* Modal Content */}
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <h2 className="mb-2 text-3xl font-bold text-white">{project.title}</h2>
                  <p className="text-gray-300">{project.description}</p>
                </div>

                {/* Image */}
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  src={project.imageUrl}
                  alt={project.title}
                  className="h-80 w-full rounded-xl object-cover"
                />

                {/* Problem & Solution */}
                <div className="grid gap-6 md:grid-cols-2">
                  <GlassCard>
                    <h3 className="mb-3 font-bold text-sm uppercase tracking-widest text-red-400">Problem</h3>
                    <p className="text-gray-300">{project.problem}</p>
                  </GlassCard>
                  <GlassCard>
                    <h3 className="mb-3 font-bold text-sm uppercase tracking-widest text-green-400">Solution</h3>
                    <p className="text-gray-300">{project.solution}</p>
                  </GlassCard>
                </div>

                {/* Contribution & Impact */}
                <div className="grid gap-6 md:grid-cols-2">
                  <GlassCard>
                    <h3 className="mb-3 font-bold text-sm uppercase tracking-widest text-blue-400">My Contribution</h3>
                    <p className="text-gray-300">{project.contribution}</p>
                  </GlassCard>
                  <GlassCard>
                    <h3 className="mb-3 font-bold text-sm uppercase tracking-widest text-violet-400">Business Impact</h3>
                    <p className="text-gray-300">{project.businessImpact}</p>
                  </GlassCard>
                </div>

                {/* Challenges */}
                <GlassCard>
                  <h3 className="mb-4 font-bold text-sm uppercase tracking-widest text-yellow-400">Challenges</h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-300">
                        <span className="text-yellow-400">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                {/* Results Grid */}
                <div>
                  <h3 className="mb-4 font-bold text-sm uppercase tracking-widest text-green-400">Results</h3>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {project.results.map((result) => (
                      <GlassCard key={result.label}>
                        <p className="text-xs text-gray-400">{result.label}</p>
                        <p className="mt-2 text-lg font-bold text-green-400">{result.value}</p>
                      </GlassCard>
                    ))}
                  </div>
                </div>

                {/* All Technologies */}
                <div>
                  <h3 className="mb-4 font-bold text-sm uppercase tracking-widest text-blue-400">Technology Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech.name}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="rounded-full bg-gradient-to-r from-blue-500/20 to-violet-500/20 px-4 py-2 text-sm font-medium text-blue-300 border border-blue-500/30"
                      >
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4 border-t border-white/10 pt-6">
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/50"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-500 px-6 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-violet-500/50"
                    >
                      <Code size={18} />
                      GitHub
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
