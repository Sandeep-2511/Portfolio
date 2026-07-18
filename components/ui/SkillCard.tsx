"use client";

import type { FC, ReactElement } from "react";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { Code, Database, Cloud, Zap, GitBranch, Box, Layout, Palette, Terminal } from "lucide-react";
import GlassCard from "./GlassCard";

interface SkillCardProps {
  name: string;
  icon: string;
  proficiency: number;
  index?: number;
}

/**
 * Animated skill card with proficiency indicator
 */
const SkillCard: FC<SkillCardProps> = ({ name, icon, proficiency, index = 0 }) => {
  const iconMap: Record<string, ReactElement> = {
    code: <Code className="w-6 h-6" />,
    database: <Database className="w-6 h-6" />,
    cloud: <Cloud className="w-6 h-6" />,
    zap: <Zap className="w-6 h-6" />,
    "git-branch": <GitBranch className="w-6 h-6" />,
    box: <Box className="w-6 h-6" />,
    layout: <Layout className="w-6 h-6" />,
    palette: <Palette className="w-6 h-6" />,
    terminal: <Terminal className="w-6 h-6" />,
  } as const;

  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.05,
        ease: "easeOut",
      },
    },
  };

  const containerVariants: Variants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)" },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      whileHover="hover"
      className="h-full"
    >
      <motion.div variants={containerVariants}>
        <GlassCard animated className="h-full flex flex-col">
          {/* Icon */}
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-400 mb-4">
            {iconMap[icon] || <Code className="w-6 h-6" />}
          </div>

          {/* Name */}
          <h4 className="text-white font-bold mb-3">{name}</h4>

          {/* Proficiency Bar */}
          <div className="mt-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Proficiency</span>
              <span className="text-xs font-semibold text-blue-400">{proficiency}%</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-violet-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${proficiency}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.05 + 0.2, ease: "easeOut" }}
              />
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
