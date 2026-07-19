"use client";

import type { FC } from "react";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { SectionWrapper, SectionTitle, StatCard, TimelineItem } from "@/components/ui";
import { ABOUT_STATS, ABOUT_TIMELINE } from "@/data/sections";
import Image from "next/image";

/**
 * About section with professional introduction, statistics, and journey timeline
 */
const About: FC = () => {
  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <SectionWrapper id="about" className="relative">
      {/* Section Title */}
      <div className="mb-20">
        <SectionTitle
          subtitle="Get to Know Me"
          title="About Me"
          centered
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
        {/* Left Side - Profile Image */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageVariants}
        >
          {/* Glowing Background Circles */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="absolute w-80 h-80 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl" />
            <div className="absolute w-80 h-80 bg-violet-500/20 rounded-full mix-blend-multiply filter blur-3xl -right-20" />
          </div>

          {/* Glass Card with Image */}
          <motion.div
            animate="animate"
            variants={floatingVariants}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-3xl blur-2xl" />

            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-1 overflow-hidden shadow-2xl">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/30 to-violet-500/30">
                <Image
                    src="/images/profile.jpeg"
                    alt="Sandeep"
                    fill
                    priority
                    className="object-cover"
                    />
              </div>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 border border-blue-500/30 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border border-violet-500/30 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={contentVariants}
          className="space-y-6"
        >
          {/* Introduction */}
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              I&apos;m a Full Stack Developer with 3.10 years of experience building and modernizing
              enterprise web applications across React.js, Angular, ASP.NET Core, SQL Server, and AWS.
              My work focuses on practical systems that are maintainable, performant, and clear for users.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I specialize in REST API design, performance optimization, legacy .NET Framework to
              .NET Core migration, and CI/CD automation with Azure DevOps, Jenkins, and GitHub Actions.
              I also hold AWS Cloud Practitioner, Azure Fundamentals, and Cisco cybersecurity certifications.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {ABOUT_STATS.map((stat, index) => (
              <StatCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Journey Timeline */}
      <div className="mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-2">My Journey</h3>
          <p className="text-gray-400">Key milestones in my professional career</p>
        </motion.div>

        <div className="space-y-6">
          {ABOUT_TIMELINE.map((event, index) => (
            <TimelineItem
              key={event.title}
              title={event.title}
              description={event.description}
              date={event.date}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
