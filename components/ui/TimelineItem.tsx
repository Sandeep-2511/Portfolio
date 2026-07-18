"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

interface TimelineItemProps {
  title: string;
  description: string;
  date: string;
  index: number;
}

/**
 * Timeline item component for displaying journey milestones
 */
const TimelineItem: FC<TimelineItemProps> = ({
  title,
  description,
  date,
  index,
}) => {
  const variants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <motion.div
      className="flex items-center gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
    >
      {/* Timeline dot */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="relative w-4 h-4 bg-gradient-to-br from-blue-400 to-violet-500 rounded-full shadow-lg shadow-blue-500/50" />
        {index > 0 && (
          <div className="w-0.5 h-24 bg-gradient-to-b from-blue-500/50 to-violet-500/20 mt-4" />
        )}
      </div>

      {/* Content */}
      <GlassCard className="flex-1">
        <p className="text-blue-400 text-sm font-semibold">{date}</p>
        <h4 className="text-white font-bold text-lg mt-1">{title}</h4>
        <p className="text-gray-400 text-sm mt-2">{description}</p>
      </GlassCard>
    </motion.div>
  );
};

export default TimelineItem;
