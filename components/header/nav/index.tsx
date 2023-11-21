import Link from "next/link";
import { animate, motion } from "framer-motion";
import { links } from "@/lib/data";
import clsx from "clsx";
import { useActiveLink } from "@/hooks/useActiveLink";

export const Navbar = () => {
  const { activeSection, handleActiveLink } = useActiveLink();
  return (
    <nav className="fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
      <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
        {links.map((link) => (
          <motion.li
            className="flex items-center justify-center h-3/4 relative"
            key={link.hash}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              className={clsx(
                "flex items-center justify-center p-3 hover:text-gray-950 transition",
                {
                  "text-gray-950": link.name === activeSection,
                },
              )}
              href={link.hash}
              onClick={() => handleActiveLink(link.name)}
            >
              {link.name}
              {link.name === activeSection && (
                <motion.span
                  className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                  layoutId="activeLink"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                ></motion.span>
              )}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};
