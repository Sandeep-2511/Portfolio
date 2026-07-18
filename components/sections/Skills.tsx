"use client";

import type { FC } from "react";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { SectionWrapper, SectionTitle, SkillCard } from "@/components/ui";
import { SKILLS_CATEGORIES } from "@/data/sections";

/**
 * Skills section with categorized tech stack displayed as animated glass cards
 */
const Skills: FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <SectionWrapper id="skills" className="relative">
      {/* Section Title */}
      <div className="mb-20">
        <SectionTitle
          subtitle="My Expertise"
          title="Tech Stack"
          description="Technologies I work with and specialize in"
          centered
        />
      </div>

      {/* Skills Categories */}
      <motion.div
        className="space-y-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {SKILLS_CATEGORIES.map((category) => (
          <motion.div
            key={category.name}
            variants={categoryVariants}
            className="space-y-4"
          >
            {/* Category Title */}
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-violet-500 rounded-full" />
              {category.name}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  proficiency={skill.proficiency}
                  index={skillIndex}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-20 pt-12 border-t border-white/10"
      >
        <p className="text-gray-400 text-center max-w-2xl mx-auto">
          I&apos;m constantly learning and adapting to new technologies. My proficiency levels
          reflect my expertise in each tool, based on real-world project experience and continuous development.
        </p>
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;
