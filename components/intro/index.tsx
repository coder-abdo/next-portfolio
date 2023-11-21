"use client";
import React from "react";
import { motion } from "framer-motion";
import { Avatar } from "@/components/intro/image";
import { Breif } from "@/components/intro/breif";
import { ContactsLinks } from "@/components/intro/contacts";
import { useActiveSectionScroll } from "@/hooks/useActiveSection";
export const Intro = () => {
  const { ref } = useActiveSectionScroll("Home", 0.5);
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] sm:mb-0 text-center scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <Avatar />
      </div>
      <Breif />
      <ContactsLinks />
    </section>
  );
};
