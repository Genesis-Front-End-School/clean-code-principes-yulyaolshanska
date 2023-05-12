import { useAppSelector } from "helpers/hooks/hooks";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeContext, ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/globalStyle";
import { darkTheme, lightTheme } from "styles/theme";
import Loader from "./Loader/Loader";

const NotFoundPage = lazy(() => import("../pages/notFoundPage/NotFoundPage"));
const Layout = lazy(() => import("../components/Layout/Layout"));
const CourseDetailsPage = lazy(
  () => import("../pages/courseDetailsPage/CourseDetailsPage")
);
const CoursesPage = lazy(() => import("../pages/coursesPage/CoursesPage"));

export const App: React.FC = () => {
  const LocalStorageTheme = localStorage.getItem("theme");
  const storeTheme = useAppSelector((state) => state.user.theme);
  const currentTheme = LocalStorageTheme ? LocalStorageTheme : storeTheme;
  const themeMode = currentTheme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={themeMode}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Suspense fallback={(<Loader />) as React.ReactNode}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<CoursesPage />} />
              <Route path="/:id" element={<CourseDetailsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
