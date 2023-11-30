import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaChalkboard } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import crownClothes from "@/public/crown-ecommerce-project.png";
import twitterClone from "@/public/twitter-clone.png";
import moviesApp from "@/public/full-movies-app.png";
import myBlog from "@/public/my-blog.png";
import notesApp from "@/public/notes-app.png";
import vueNotesApp from "@/public/vue-notes-app.png";
import vueMicroBlog from "@/public/vue-microblog-app.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Self-Taught",
    location: "Qena, Egypt",
    description:
      "I am a Civil Enginner so I shift career to become a Full-Stack Developer so I keep learning new techs and languages to gain knolwedge using Video Tutorials and Reading Books",
    icon: React.createElement(LuGraduationCap),
    date: "2016-2018",
  },
  {
    title: "Front-End Developer/ React Developer",
    location: "Cairo, Egypt",
    description:
      "I worked as a front-end developer for 1 year in a Sceel multinational Company. I gained a lot of skills",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "React Developer & UI Consultant",
    location: "Cairo, Egypt",
    description:
      "I worked as a front-end developer for 1 year in a  Company. I gained a lot of skills",
    icon: React.createElement(FaReact),
    date: "2020 - 2021",
  },
  {
    title: "React Tutor",
    location: "Cairo, Egypt",
    description:
      "I worked as a Front End Tutor at Udacity teaching all stuff related to the front end development.",
    icon: React.createElement(FaChalkboard),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Crown Clothes Ecommerce",
    description:
      "this is my first full-stack E-commerce project using React and Firebase",
    linkSrc: "https://crown-clothes-eight.vercel.app/",
    tags: ["React", "Typescript", "Sass", "Firebase", "Redux"],
    imageUrl: crownClothes,
  },
  {
    title: "Twitter Clone",
    description: "this is a simple version of twitter using T3 stack",
    linkSrc: "https://t3-twiiter-clone.vercel.app/",
    tags: ["Prisma", "TypeScript", "Next.js", "Tailwind", "TRPC"],
    imageUrl: twitterClone,
  },
  {
    title: "Personal Blog",
    description: "this is my personal blog which contains my blog posts",
    linkSrc: "https://my-blog-snowy-delta.vercel.app/",
    tags: ["Astro JS", "Typescript", "Tailwind"],
    imageUrl: myBlog,
  },
  {
    title: "Notes App",
    description:
      "this is a simple version of taking notes with full authentication and authorization and save them later",
    linkSrc: "https://notes-liart-two.vercel.app/",
    tags: ["Next.JS", "Typescript", "Tailwind", "Prisma"],
    imageUrl: notesApp,
  },
  {
    title: "Vue note app",
    description: "this is a simple version of notes app using Vue.js",
    linkSrc: "https://vue-notes-app-teal.vercel.app/",
    tags: ["Vue", "CSS", "Vite"],
    imageUrl: vueNotesApp,
  },
  {
    title: "Vue Microblog",
    description: "this is a simple version of blog using Vue.js",
    linkSrc: "https://vue-microblog.vercel.app/",
    tags: ["Vue", "CSS", "Vite"],
    imageUrl: vueMicroBlog,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Sass",
  "React",
  "Next.js",
  "Nest.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Zustand",
  "Mobx",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Golang",
  "Framer Motion",
] as const;
