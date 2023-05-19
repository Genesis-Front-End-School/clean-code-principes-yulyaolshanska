import TogglerButton from "../ThemeTogglerButton/ThemeTogglerButton";
import useThemeMode from "../../helpers/hooks/useThemeMode";
import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./Layout.styled";

export const Layout: React.FC = () => {
  const { themeToggler } = useThemeMode();

  return (
    <>
      <Container>
        <TogglerButton themeToggler={themeToggler} />
        <Outlet />
      </Container>
    </>
  );
};

