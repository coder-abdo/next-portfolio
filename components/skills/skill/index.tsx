import { motion } from "framer-motion";
import { SkillType } from "@/types";
import React, { FC } from "react";
type SkillProps = {
  skill: SkillType;
  index: number;
};
export const Skill: FC<SkillProps> = ({ skill, index }) => {
  const variants = {
    initial: { opacity: 0, y: 100 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.05 },
    }),
  };
  return (
    <motion.li
      variants={variants}
      custom={index}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="bg-white border border-black/[0.1] rounded-xl px-4 py-3"
    >
      {skill}
    </motion.li>
  );
};
