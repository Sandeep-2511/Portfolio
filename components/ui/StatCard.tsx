"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

interface StatCardProps {
  label: string;
  value: string;
  delay?: number;
}

/**
 * Animated stat card for displaying metrics
 */
const StatCard: FC<StatCardProps> = ({ label, value, delay = 0 }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
    >
      <GlassCard animated className="text-center">
        <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">
          {value}
        </div>
        <p className="text-gray-400 text-sm font-medium">{label}</p>
      </GlassCard>
    </motion.div>
  );
};

export default StatCard;
