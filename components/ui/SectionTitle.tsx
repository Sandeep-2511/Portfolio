"use client";

import type { FC } from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

/**
 * Reusable section title component with animations
 */
const SectionTitle: FC<SectionTitleProps> = ({
  title,
  subtitle,
  description,
  centered = true,
}) => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  return (
    <motion.div
      className={`mb-12 ${centered ? "text-center" : ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={titleVariants}
    >
      {subtitle && (
        <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{title}</h2>
      {description && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{description}</p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
