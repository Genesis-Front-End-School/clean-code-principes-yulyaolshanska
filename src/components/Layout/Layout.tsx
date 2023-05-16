import TogglerButton from "components/ThemeTogglerButton/ThemeTogglerButton";
import useThemeMode from "helpers/hooks/useThemeMode";
import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./Layout.styled";

const Layout: React.FC = () => {
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

export default Layout;
