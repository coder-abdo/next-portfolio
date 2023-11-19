"use client";
import React from "react";
import { motion } from "framer-motion";
import { Avatar } from "@/components/intro/image";
import { Breif } from "@/components/intro/breif";
import { ContactsLinks } from "@/components/intro/contacts";
export const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] sm:mb-0 text-center">
      <div className="flex items-center justify-center">
        <Avatar />
      </div>
      <Breif />
      <ContactsLinks />
    </section>
  );
};
