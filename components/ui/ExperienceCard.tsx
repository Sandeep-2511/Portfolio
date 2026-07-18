"use client";

import type { FC } from "react";
import type { Variants } from "framer-motion";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { GlassCard } from "@/components/ui";
import type { ExperienceItem } from "@/types/sections";

interface ExperienceCardProps {
  item: ExperienceItem;
  index: number;
}

/**
 * Experience timeline card with expandable details
 */
const ExperienceCard: FC<ExperienceCardProps> = ({ item, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isLeft = index % 2 === 0;

  const containerVariants: Variants = {
    hidden: { opacity: 0, x: isLeft ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  const expandVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={`flex ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 items-stretch mb-12`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Timeline Dot */}
      <div className="hidden lg:flex flex-col items-center flex-shrink-0">
        <div className="relative w-6 h-6">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-violet-500 rounded-full shadow-lg shadow-blue-500/50" />
          <div className="absolute inset-2 bg-[#030712] rounded-full" />
        </div>
        {index < 2 && (
          <div className="w-1 h-16 bg-gradient-to-b from-blue-500/50 to-transparent mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 lg:w-1/2">
        <GlassCard animated className="h-full">
          {/* Header */}
          <div className="mb-4">
            {item.isLatest && (
              <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-500/20 rounded-full mb-2">
                Current
              </span>
            )}
            <h3 className="text-2xl font-bold text-white">{item.position}</h3>
            <p className="text-blue-400 font-semibold mt-1">{item.company}</p>
            <p className="text-gray-400 text-sm mt-1">{item.duration}</p>
          </div>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed mb-4">{item.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium text-blue-300 bg-blue-500/20 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Expand Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-semibold"
          >
            {isExpanded ? "Show Less" : "Show More"}
            <ChevronUp
              className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-0" : "rotate-180"}`}
            />
          </button>

          {/* Expandable Details */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={expandVariants}
                className="overflow-hidden mt-4 pt-4 border-t border-white/10"
              >
                {/* Responsibilities */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold text-sm mb-2">Key Responsibilities</h4>
                  <ul className="space-y-1">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-white font-semibold text-sm mb-2">Key Achievements</h4>
                  <ul className="space-y-1">
                    {item.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-gray-400 text-sm flex items-start gap-2"
                      >
                        <span className="text-violet-400 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </GlassCard>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
