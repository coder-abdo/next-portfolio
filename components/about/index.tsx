"use client";
import React from "react";
import { Heading } from "@/components/heading";
import { motion } from "framer-motion";
import { useActiveSectionScroll } from "@/hooks/useActiveSection";
export const About = () => {
  const { ref } = useActiveSectionScroll("About");
  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 scroll-mt-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <Heading>About Me</Heading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Engineering</span>, I decided to pursue my
        passion for programming. I taught myself and learned{" "}
        <span className="font-medium">front-end web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, TailwindCSS, and redux-toolkit & redux-sagaa & zustand
          for state management
        </span>
        . I am also familiar with TypeScript, Express and Prisma. I am always
        looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        listening to Holly Quran,and Classical Music. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">Back-End Development</span>
        .
      </p>
    </motion.section>
  );
};
