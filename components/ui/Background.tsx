"use client";

import type { FC } from "react";

const PARTICLES = Array.from({ length: 20 }, (_, index) => ({
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  animationDelay: `${(index * 0.25).toFixed(2)}s`,
  animation: `float ${8 + (index % 5)}s ease-in-out infinite`,
  opacity: 0.15 + (index % 5) * 0.08,
}));

/**
 * Background component with animated gradient blobs, grid pattern, and floating particles
 * Creates a premium glassmorphism backdrop with subtle animations
 */
const Background: FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030712]">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px), linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Animated Gradient Blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-violet-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />
      <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000" />

      {/* Blur Circles */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-violet-400/10 rounded-full filter blur-2xl opacity-10" />
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-tr from-violet-400/10 to-pink-400/10 rounded-full filter blur-2xl opacity-10" />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {PARTICLES.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={particle}
          />
        ))}
      </div>

      {/* Styles for floating particles */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Background;
