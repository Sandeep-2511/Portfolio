"use client";

import type { FC } from "react";
import { useEffect, useState } from "react";

const ScrollProgress: FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent" aria-hidden="true">
      <div
        className="h-full origin-left bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 shadow-[0_0_18px_rgba(96,165,250,0.45)] transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
};

export default ScrollProgress;
