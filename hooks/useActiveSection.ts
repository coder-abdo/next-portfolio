import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { links } from "@/lib/data";
import { useActiveLink } from "@/hooks/useActiveLink";
import { useActiveSection } from "@/context/ActiveSectionContext";
import { SectionName } from "@/types";
export const useActiveSectionScroll = (
  sectionName: SectionName,
  threshold = 0.75,
) => {
  const { ref, inView } = useInView({ threshold });
  const { activeSection, setActiveSection, timeOfLastClick } =
    useActiveSection();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, sectionName, timeOfLastClick]);
  return { ref };
};
