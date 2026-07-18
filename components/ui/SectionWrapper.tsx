import type { ReactNode, FC } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

/**
 * Section wrapper for consistent spacing and layout across portfolio sections
 * Ensures responsive padding and centered content with max-width constraints
 */
const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
  id,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 ${className}`}
    >
      <div className="w-full max-w-7xl">{children}</div>
    </section>
  );
};

export default SectionWrapper;
