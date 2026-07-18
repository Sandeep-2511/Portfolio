"use client";

import type { FC } from "react";
import { SectionWrapper, SectionTitle, ExperienceCard } from "@/components/ui";
import { EXPERIENCE_ITEMS } from "@/data/sections";

/**
 * Experience section with vertical timeline of professional roles
 */
const Experience: FC = () => {
  return (
    <SectionWrapper id="experience" className="relative">
      {/* Section Title */}
      <div className="mb-20">
        <SectionTitle
          subtitle="Work History"
          title="Professional Experience"
          description="Enterprise full stack work across product and client-facing teams"
          centered
        />
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line (Desktop) */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-violet-500 to-transparent opacity-20" />

        {/* Experience Items */}
        <div className="space-y-8">
          {EXPERIENCE_ITEMS.map((item, index) => (
            <ExperienceCard key={item.company} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom Message */}
      <div className="mt-20 pt-12 border-t border-white/10 text-center">
        <p className="text-gray-400 max-w-2xl mx-auto">
          My experience spans React and Angular frontends, ASP.NET Core APIs, SQL Server performance work,
          legacy modernization, AWS services, and CI/CD automation.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
