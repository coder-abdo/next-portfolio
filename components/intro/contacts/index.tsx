import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export const ContactsLinks = () => {
  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-4 items-center justify-center font-medium text-lg"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Link
        href="#contact"
        className="group flex items-center gap-2 justify-center px-7 py-3 text-white bg-gray-900 rounded-full outline-none focus:scale-110 hover:bg-gray-950 hover:scale-110 active:scale-105 transition"
      >
        Contact Me
        <BsArrowRight className="group-hover:translate-x-1 transition opacity-70" />
      </Link>
      <a
        role="button"
        aria-label="download cv"
        href="/Eng.Abdelmonaem_Shahat.pdf"
        download="Eng.Abdelmonaem_Shahat.pdf"
        className="group bg-white flex items-center gap-2 justify-center px-7 py-3 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10"
      >
        Download CV{" "}
        <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
      </a>
      <a
        href="https://www.linkedin.com/in/abdelmonaem-shahat/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="personal linkedin website"
        role="link"
        className="bg-white text-gray-700 flex items-center gap-2 justify-center p-4 rounded-full outline-none focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition border border-black/10"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/coder-abdo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="personal github website"
        role="link"
        className="bg-white text-gray-700 flex items-center text-[1.35rem] gap-2 justify-center p-4 rounded-full outline-none focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition border border-black/10"
      >
        <FaGithub />
      </a>
    </motion.div>
  );
};
