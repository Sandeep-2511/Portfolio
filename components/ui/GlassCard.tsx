import type { ReactNode, FC } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  noBorder?: boolean;
  animated?: boolean;
}

/**
 * Reusable glass card component with frosted glass effect
 */
const GlassCard: FC<GlassCardProps> = ({
  children,
  className = "",
  noBorder = false,
  animated = false,
}) => {
  const baseClasses =
    "relative bg-white/10 backdrop-blur-md rounded-2xl p-6 overflow-hidden";

  const borderClasses = noBorder ? "" : "border border-white/20";

  const animatedClasses = animated ? "hover:bg-white/15 transition-all duration-300" : "";

  const fullClasses = `${baseClasses} ${borderClasses} ${animatedClasses} ${className}`;

  return (
    <div className={fullClasses}>
      {/* Animated glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassCard;
