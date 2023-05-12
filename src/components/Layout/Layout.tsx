import Loader from "components/Loader/Loader";
import TogglerButton from "components/ThemeTogglerButton/ThemeTogglerButton";
import useThemeMode from "helpers/hooks/useThemeMode";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./Layout.styled";

const Layout: React.FC = () => {
  const { themeToggler } = useThemeMode();

  return (
    <>
      <Suspense fallback={<Loader />}>
        {/* <Header /> */}
        <Container>
          <TogglerButton themeToggler={themeToggler} />
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};

export default Layout;
