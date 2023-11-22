"use client";
import React from "react";
import { Heading } from "@/components/heading";
import { Skill } from "@/components/skills/skill";
import { skillsData } from "@/lib/data";
import { useActiveSectionScroll } from "@/hooks/useActiveSection";

export const Skills = () => {
  const { ref } = useActiveSectionScroll("Skills");
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <Heading>My Skills</Heading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <Skill key={skill} index={index} skill={skill} />
        ))}
      </ul>
    </section>
  );
};
