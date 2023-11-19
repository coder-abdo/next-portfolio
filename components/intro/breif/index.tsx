import React from "react";
import { motion } from "framer-motion";
export const Breif = () => {
  return (
    <motion.h1
      className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <span className="font-bold">Hi, I&apos;M Abdelmonaem.</span>
      <span> I&apos;m a</span>
      <span className="font-bold capitalize"> front-end developer</span>
      <span className="capitalize">with more than</span>
      <span className="font-bold capitalize"> 4 years </span>
      <span className="capitalize"> of experience.</span>
      <span className="capitalize"> I enjoy building</span>
      <span className="italic capitalize">sites &amp; apps.</span>{" "}
      <span className="font-bold capitalize">My focus is </span>
      <span className="underline">React (Next.JS)</span>
    </motion.h1>
  );
};
