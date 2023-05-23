import React from "react";
import { Outlet } from "react-router-dom";
import { TogglerButton } from "gen-fs-courses";
import useThemeMode from "helpers/hooks/useThemeMode";
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
