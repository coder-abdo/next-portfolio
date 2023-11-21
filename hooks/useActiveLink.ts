import { useCallback, useState } from "react";
import { links } from "@/lib/data";
import { useActiveSection } from "@/context/ActiveSectionContext";
import { SectionName } from "@/types";
export const useActiveLink = () => {
  const {
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick,
  } = useActiveSection();
  const handleActiveLink = useCallback(
    (link: SectionName) => {
      setActiveSection(link);
      setTimeOfLastClick(Date.now());
    },
    [setActiveSection, setTimeOfLastClick],
  );
  return {
    handleActiveLink,
    timeOfLastClick,
    activeSection,
  };
};
