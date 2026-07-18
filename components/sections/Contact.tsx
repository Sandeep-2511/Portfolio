"use client";

import type { FC, FormEvent } from "react";
import type { Variants } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Code, Briefcase, MapPin, Download } from "lucide-react";
import { GlassCard, SectionWrapper } from "@/components/ui";
import { CONTACT_INFO } from "@/data/projects";

/**
 * Contact section with form and social links
 * Features: Form submission, glassmorphism cards, social animations
 */
const Contact: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const socialIcons = [
    { icon: Code, label: "GitHub", url: "https://github.com/Sandeep-2511", color: "from-gray-400 to-gray-600" },
    { icon: Briefcase, label: "LinkedIn", url: "https://www.linkedin.com/in/sandeeppotdukhe", color: "from-blue-400 to-blue-600" },
    { icon: Mail, label: "Email", url: `mailto:${CONTACT_INFO.email}`, color: "from-red-400 to-red-600" },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <SectionWrapper>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div className="mb-4 inline-block">
            <span className="text-sm font-semibold tracking-widest text-blue-400 uppercase">Get in touch</span>
          </motion.div>
          <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">Let&apos;s Build Something Great</h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Available for full stack developer opportunities. Let&apos;s connect and build reliable web applications.
          </p>
        </motion.div>

        {/* Main Contact Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <GlassCard className="p-8">
              <h3 className="mb-6 text-2xl font-bold text-white">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-blue-500/50 focus:bg-white/10 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-blue-500/50 focus:bg-white/10 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-blue-500/50 focus:bg-white/10 focus:outline-none"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-blue-500/50 focus:bg-white/10 focus:outline-none resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                {/* Submit Status */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg bg-green-500/20 border border-green-500/50 p-3 text-sm text-green-300"
                  >
                    Message sent successfully! I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg bg-red-500/20 border border-red-500/50 p-3 text-sm text-red-300"
                  >
                    Something went wrong. Please try again.
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-semibold text-white transition-all disabled:opacity-50 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Contact Info Card */}
            <GlassCard className="p-8">
              <h3 className="mb-6 text-2xl font-bold text-white">Contact Information</h3>

              {/* Email */}
              <div className="mb-6 flex items-start gap-4">
                <div className="rounded-lg bg-blue-500/20 p-3">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="font-semibold text-white hover:text-blue-400">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-6 flex items-start gap-4">
                <div className="rounded-lg bg-violet-500/20 p-3">
                  <Mail className="text-violet-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-semibold text-white">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-green-500/20 p-3">
                  <MapPin className="text-green-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-semibold text-white">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </GlassCard>

            {/* Social Links */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Connect with me</h3>
              <div className="grid grid-cols-3 gap-4">
                {socialIcons.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group rounded-lg bg-gradient-to-br ${social.color} p-6 text-center transition-all hover:shadow-lg`}
                    >
                      <Icon size={32} className="mb-2 text-white" />
                      <p className="text-sm font-semibold text-white">{social.label}</p>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Resume Download */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 rounded-lg border border-blue-500/50 bg-blue-500/10 px-6 py-4 font-semibold text-blue-400 transition-all hover:bg-blue-500/20"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </section>
  );
};

export default Contact;
