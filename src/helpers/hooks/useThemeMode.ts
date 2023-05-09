import { useEffect, useState } from "react";
import { setTheme } from "redux/user/userSlice";
import { useAppDispatch } from "./hooks";

export const useThemeMode = () => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const dispatch = useAppDispatch();

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setCurrentTheme(mode);
    dispatch(setTheme(mode));
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
