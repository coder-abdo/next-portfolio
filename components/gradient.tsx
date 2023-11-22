"use client";
import { useTheme } from "@/context/themContext";
import clsx from "clsx";

export const Gradient = () => {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={clsx(
          "bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]",
          { "bg-[#946263]": theme === "dark" },
        )}
      ></div>
      <div
        className={clsx(
          "bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]",
          { "dark:bg-[#676394]": theme === "dark" },
        )}
      ></div>
    </>
  );
};
