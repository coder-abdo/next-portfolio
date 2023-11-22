"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heading } from "@/components/heading";
import { useActiveSectionScroll } from "@/hooks/useActiveSection";
import { FaPaperPlane } from "react-icons/fa";
import { sendEmail } from "@/actions/sendEmail";
import { toast } from "react-hot-toast";
import { useFormStatus } from "react-dom";
export const Contact = () => {
  const { ref } = useActiveSectionScroll("Contact");
  const { pending } = useFormStatus();
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 text-center mb-20 sm:mb-28 w-[min(100%, 38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Heading>Get in touch</Heading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:a.h2020.2007@gmail.com">
          a.h2020.2007@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        action={async (formdata) => {
          const { data, error } = await sendEmail(formdata);
          console.log(data, error);
          if (error) {
            toast.error("Failed to send email");
          } else {
            toast.success("Email sent successfully");
          }
        }}
        className="mt-10"
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          className="w-full h-14 custom-border-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
          placeholder="Your Email"
        />
        <textarea
          placeholder="Your Message"
          name="message"
          required
          className="h-52 my-3 p-2 rounded-lg w-full custom-border-black focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
        />
        <button
          type="submit"
          className="group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full transition outline-none flex justify-center items-center gap-2 hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:opacity-60 dark:bg-white dark:bg-opacity-10"
          disabled={pending}
        >
          {pending ? (
            <div className="w-5 h-5 animate-spin rounded-full border-2 border-white border-opacity-20"></div>
          ) : (
            <>
              Send{" "}
              <FaPaperPlane className="text-xs opacity-70 transition group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
            </>
          )}
        </button>
      </form>
    </motion.section>
  );
};
