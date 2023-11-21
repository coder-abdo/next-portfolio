"use client";
import React from "react";
import { Heading } from "@/components/heading";
import { projectsData } from "@/lib/data";
import { Project } from "@/components/projects/project";
import { useActiveSectionScroll } from "@/hooks/useActiveSection";
import { useInView } from "react-intersection-observer";
export const Projects = () => {
  const { ref } = useActiveSectionScroll("Projects", 0.25);
  return (
    <section ref={ref} id="projects" className="text-center scroll-mt-28 mb-28">
      <Heading>Projects</Heading>
      {projectsData.map((project, index) => (
        <Project key={project.title} {...project} />
      ))}
    </section>
  );
};
