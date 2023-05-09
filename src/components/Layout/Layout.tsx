import Loader from "components/Loader/Loader";
import TogglerButton from "components/ThemeTogglerButton/ThemeTogglerButton";
import useThemeMode from "helpers/hooks/useThemeMode";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  const { themeToggler } = useThemeMode();

  return (
    <>
      <Suspense fallback={<Loader />}>
        {/* <Header /> */}
        <TogglerButton themeToggler={themeToggler} />
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
