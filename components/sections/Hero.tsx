"use client";

import type { FC, ReactElement } from "react";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { Code, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui";
import { useTyping } from "@/hooks";
import Image from "next/image";
import { TYPING_WORDS, TYPING_SPEED, TYPING_DELETE_SPEED, TYPING_DELAY_BETWEEN_WORDS, SOCIAL_LINKS } from "@/constants/nav";

/**
 * Hero section with typing animation, CTA buttons, social links, and animated profile card
 * Features responsive layout with glassmorphic profile image container
 */
const Hero: FC = () => {
  const typedText = useTyping({
    words: TYPING_WORDS,
    typingSpeed: TYPING_SPEED,
    deletingSpeed: TYPING_DELETE_SPEED,
    delayBetweenWords: TYPING_DELAY_BETWEEN_WORDS,
  });

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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const getSocialIcon = (iconName: string) => {
    const iconMap: Record<string, ReactElement> = {
      github: <Code className="w-5 h-5" />,
      linkedin: <Briefcase className="w-5 h-5" />,
      mail: <Mail className="w-5 h-5" />,
    };
    return iconMap[iconName] || null;
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 pt-24"
    >
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg font-semibold text-blue-400">Hi, Welcome</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Sandeep Potdukhe
                </span>
              </h1>
            </motion.div>

            {/* Typing Animation */}
            <motion.div variants={itemVariants} className="h-16 flex items-center">
              <p className="text-2xl sm:text-3xl font-semibold text-gray-300">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 max-w-lg leading-relaxed"
            >
              Full Stack Developer with 3.10 years of experience building and modernizing
              enterprise web applications using React.js, Angular, ASP.NET Core, SQL Server,
              and AWS.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <a href="/resume.pdf" download>
                <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white border-0">
                  Download Resume
                </Button>
              </a>
              <Link href="#projects">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-blue-500/50 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                >
                  View Projects
                </Button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                  aria-label={link.label}
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            className="relative h-full min-h-[500px] lg:min-h-[600px] flex items-center justify-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Glowing Background Circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-80 h-80 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl" />
              <div className="absolute w-80 h-80 bg-violet-500/20 rounded-full mix-blend-multiply filter blur-3xl -right-20" />
            </div>

            {/* Glass Card with Profile Image */}
            <motion.div
              className="relative z-10 w-full max-w-sm"
              animate="animate"
              variants={floatingVariants}
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-3xl blur-2xl" />

              {/* Glass Card */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-1 overflow-hidden shadow-2xl">
                {/* Image Container */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/30 to-violet-500/30 flex items-center justify-center">
                  {/* Placeholder Icon */}
                  <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="text-gray-600 text-6xl font-bold">SP</div>
                  </div>

                  {/* Image (when available) */}
                  {
                  <Image
                    src="/images/profile.jpeg"
                    alt="Sandeep"
                    fill
                    className="object-cover"
                    priority
                  />
                  }
                </div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 border border-blue-500/30 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 border border-violet-500/30 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
