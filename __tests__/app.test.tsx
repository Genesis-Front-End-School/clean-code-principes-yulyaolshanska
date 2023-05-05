import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "../src/components/App";
import theme from "../src/styles/theme";

describe("App", () => {
  jest.mock("../src/pages/notFoundPage/NotFoundPage", () => () => (
    <div data-testid="not-found" />
  ));
  jest.mock("../src/pages/courseDetailsPage/CourseDetailsPage", () => () => (
    <div data-testid="course-details" />
  ));
  jest.mock("../src/pages/coursesPage/CoursesPage", () => () => (
    <div data-testid="courses" />
  ));
  it("renders CoursesPage component on default route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(screen.getByTestId("courses-page")).toBeInTheDocument();
  });

  it("renders CourseDetailsPage component on '/:id' route", () => {
    render(
      <MemoryRouter initialEntries={["/1"]}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(screen.getByTestId("course-details-page")).toBeInTheDocument();
  });

  it("renders NotFoundPage component on unknown route", () => {
    render(
      <MemoryRouter initialEntries={["/unknown"]}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(screen.getByTestId("not-found-page")).toBeInTheDocument();
  });
});

// import React from "react";
// import { render, screen, waitFor } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import App from "../src/components/App";

// jest.mock("../src/pages/notFoundPage/NotFoundPage", () => () => (
//   <div data-testid="not-found" />
// ));
// jest.mock("../src/pages/courseDetailsPage/CourseDetailsPage", () => () => (
//   <div data-testid="course-details" />
// ));
// jest.mock("../src/pages/coursesPage/CoursesPage", () => () => (
//   <div data-testid="courses" />
// ));

// const renderWithRouter = (route: string) => {
//   return render(
//     <MemoryRouter initialEntries={[route]}>
//       <App />
//     </MemoryRouter>
//   );
// };

// describe("App", () => {
//   it("renders Courses on the root route", async () => {
//     renderWithRouter("/");
//     await waitFor(() => {
//       expect(screen.getByTestId("courses")).toBeInTheDocument();
//     });
//   });

//   it("renders Courses on the courses route", async () => {
//     renderWithRouter("/courses");
//     await waitFor(() => {
//       expect(screen.getByTestId("courses")).toBeInTheDocument();
//     });
//   });

//   it("renders Course on the specific course route", async () => {
//     const courseId = "1";
//     renderWithRouter(`/courses/${courseId}`);
//     await waitFor(() => {
//       expect(screen.getByTestId("course-details")).toBeInTheDocument();
//     });
//   });

//   it("renders NotFound on a non-existing route", () => {
//     renderWithRouter("/non-existing-route");
//     expect(screen.getByTestId("not-found")).toBeInTheDocument();
//   });
// });
