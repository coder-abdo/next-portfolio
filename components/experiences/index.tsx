"use client";
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Heading } from "@/components/heading";
import { experiencesData } from "@/lib/data";
import { Experience } from "@/components/experiences/experience";
import { useActiveSectionScroll } from "@/hooks/useActiveSection";
export const Experiences = () => {
  const { ref } = useActiveSectionScroll("Experience");
  return (
    <section
      id="experience"
      ref={ref}
      className="mb-28 scroll-mt-28 text-center sm:mb-40"
    >
      <Heading>My Experiences</Heading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience) => (
          <Experience key={experience.title} experience={experience} />
        ))}
      </VerticalTimeline>
    </section>
  );
};
