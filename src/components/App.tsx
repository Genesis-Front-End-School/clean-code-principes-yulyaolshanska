import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "styled-components";
import { GlobalStyle } from "styles/globalStyle";
import theme from "styles/theme";
import Loader from "./Loader/Loader";

const NotFoundPage = lazy(() => import("../pages/notFoundPage/NotFoundPage"));
const CourseDetailsPage = lazy(
  () => import("../pages/courseDetailsPage/CourseDetailsPage")
);
const CoursesPage = lazy(() => import("../pages/coursesPage/CoursesPage"));

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <GlobalStyle />
      <Suspense fallback={(<Loader />) as React.ReactNode}>
        <Routes>
          <Route path="/" element={<CoursesPage />} />
          <Route path="/:id" element={<CourseDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};
