"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { Code, Briefcase, Mail, ArrowUp } from "lucide-react";

/**
 * Modern minimal footer with navigation, social links, and back-to-top button
 */
const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Code, href: "https://github.com", label: "GitHub" },
    { icon: Briefcase, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
  ];

  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-t from-blue-950/5 via-[#030712] to-transparent backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-4 lg:gap-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <div className="mb-4 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2">
              <div className="h-8 w-8 rounded-lg bg-white/20 flex items-center justify-center font-bold text-white">
                S
              </div>
              <span className="font-bold text-white">Sandeep</span>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Full Stack Developer passionate about building scalable. applications with modern technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* More Links */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 font-semibold text-white">Portfolio</h3>
            <ul className="space-y-2">
              {footerLinks.slice(3).map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 font-semibold text-white">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                    className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-gray-400 transition-all hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="my-12 h-px origin-left bg-gradient-to-r from-white/10 via-blue-500/20 to-transparent"
        />

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          {/* Copyright */}
          <motion.p variants={itemVariants} className="text-sm text-gray-500">
            © {currentYear} Sandeep. All rights reserved.
          </motion.p>

          {/* Back to Top Button */}
          <motion.button
            variants={itemVariants}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg border border-blue-500/50 bg-blue-500/10 p-2.5 text-blue-400 transition-all hover:bg-blue-500/20"
            title="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>

          {/* Credits */}
          <motion.p variants={itemVariants} className="text-sm text-gray-500">
            Crafted with Next.js • Styled with Tailwind CSS
          </motion.p>
        </motion.div>
      </div>

      {/* Gradient Background */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-blue-950/10 to-transparent" />
    </footer>
  );
};

export default Footer;
