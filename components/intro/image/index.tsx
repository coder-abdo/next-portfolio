import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import personalPhoto from "@/public/my-avatar.jpg";
export const Avatar = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, type: "tween" }}
      >
        <Image
          src={personalPhoto}
          alt="personal photo"
          width={200}
          height={400}
          quality={95}
          priority={true}
          className="rounded-full object-fill w-24 h-24 border-[0.35rem] border-white shadow-xl"
        />
      </motion.div>
      <motion.span
        className="text-4xl absolute bottom-0 right-0"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.2,
          type: "spring",
          stiffness: 125,
          delay: 0.1,
        }}
      >
        👋
      </motion.span>
    </div>
  );
};
