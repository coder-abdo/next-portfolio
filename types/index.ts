import { links } from "@/lib/data";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
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
export type { ActiveSectionContextType, Props, SectionName };
