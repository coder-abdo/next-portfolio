"use client";
import { ActiveSectionContextType, Props, SectionName } from "@/types";
import { FC, createContext, useContext, useMemo, useState } from "react";

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null,
);

const ActiveSectionProvider: FC<Props> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);
  const value = useMemo(
    () => ({
      activeSection,
      setActiveSection,
      timeOfLastClick,
      setTimeOfLastClick,
    }),
    [activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick],
  );
  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
};
export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      "useActiveSection must be used within ActiveSectionProvider",
    );
  }
  return context;
};

export default ActiveSectionProvider;
