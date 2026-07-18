"use client";

import type { FC } from "react";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui";
import { NAV_LINKS } from "@/constants/nav";
import { useNavbarHide } from "@/hooks";

/**
 * Sticky navbar with smooth scroll, mobile menu, and hide-on-scroll functionality
 * Premium dark theme with glassmorphism effect
 */
const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isVisible = useNavbarHide();

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Backdrop with glassmorphism */}
      <div
        className="absolute inset-0 bg-[#030712]/80 backdrop-blur-md border-b border-white/10"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="flex-shrink-0 group"
            onClick={() => handleNavClick("#home")}
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                S
              </div>
              <span className="hidden sm:inline text-lg font-semibold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Sandeep
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Resume Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="/resume.pdf" download>
              <Button
                variant="outline"
                size="sm"
                className="border-blue-500/50 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
              >
                Download Resume
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#030712]/95 backdrop-blur-md">
          <div className="px-4 sm:px-6 py-4 space-y-2 max-w-7xl">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-white/10">
              <a href="/resume.pdf" download className="block">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-blue-500/50 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                >
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
