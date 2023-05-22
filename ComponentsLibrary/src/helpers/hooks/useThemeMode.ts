import { useEffect, useState } from "react";

export const useThemeMode = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setCurrentTheme(mode);
  };

  const themeToggler = () =>
    currentTheme === "dark" ? setMode("light") : setMode("dark");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setCurrentTheme(localTheme);
  }, []);

  return { currentTheme, themeToggler };
};

export default useThemeMode;
