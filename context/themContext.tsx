"use client";
import { Props, themeContextType, themeType } from "@/types";
import {
  FC,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const ThemeContext = createContext<themeContextType | null>(null);

const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<themeType>("light");
  const handleSetTheme = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else if (
      theme === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);
  const value = useMemo(
    () => ({ theme, handleSetTheme }),
    [theme, handleSetTheme],
  );
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
export default ThemeProvider;
