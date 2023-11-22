import { links, skillsData, experiencesData } from "@/lib/data";
import { Dispatch, ReactNode, SetStateAction } from "react";
type ActiveSectionContextType = {
  activeSection: (typeof links)[number]["name"];
  setActiveSection: Dispatch<SetStateAction<(typeof links)[number]["name"]>>;
  timeOfLastClick: number;
  setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};
type Props = {
  children: ReactNode;
};

type SectionName = (typeof links)[number]["name"];
type SkillType = (typeof skillsData)[number];
type ExperineceType = (typeof experiencesData)[number];
type themeType = "light" | "dark";
type themeContextType = {
  theme: themeType;
  handleSetTheme: () => void;
};
export type {
  ActiveSectionContextType,
  Props,
  SectionName,
  SkillType,
  ExperineceType,
  themeContextType,
  themeType,
};
