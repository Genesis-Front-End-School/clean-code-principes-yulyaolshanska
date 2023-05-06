import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { useGetCourseByIdQuery } from "../src/redux/coursesApi";
import CourseDetailsPage from "../src/pages/courseDetailsPage/CourseDetailsPage";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";

jest.mock("../src/redux/coursesApi");
jest.mock("../src/components/CoursesList/CoursesList.styled", () => ({
  Container: "div",
}));
jest.mock("../src/components/VideoPlayer/VideoPlayer", () => ({
  __esModule: true,
  default: jest.fn(() => <div>Mock VideoPlayer</div>),
}));


const mockCourse = {
  id: "1",
  title: "Course Title",
  description: "Course description",
  lessons: [
    {
      id: "1",
      link: "https://example.com",
      title: "Lesson 1",
      status: "unlocked",
      previewImageLink: "https://example.com/preview",
      order: 1,
    },
    {
      id: "2",
      link: "https://example.com",
      title: "Lesson 2",
      status: "locked",
      previewImageLink: "https://example.com/preview",
      order: 2,
    },
  ],
};

describe("CourseDetailsPage", () => {
  const theme = {
    colors: {
      accent: "#6648c8",
    },
    media: {
      tablet: "(min-width: 768px)",
    },
  };
  beforeEach(() => {
    (useGetCourseByIdQuery as jest.Mock).mockReturnValue({
      data: mockCourse,
      isLoading: false,
      isError: false,
      isSuccess: true,
      refetch: jest.fn(),
      //   ...rest // Spread in any additional properties you need
    } as unknown as ReturnType<typeof useGetCourseByIdQuery>);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render the course title and description", async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <MemoryRouter>
          <ThemeProvider theme={theme}>
            <CourseDetailsPage />
          </ThemeProvider>
        </MemoryRouter>
      </QueryClientProvider>
    );

    const titleElement = screen.getByText(mockCourse.title);
    const descriptionElement = screen.getByText(mockCourse.description);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it("renders lesson list", () => {
    render(
      <MemoryRouter initialEntries={[`/courses/${mockCourse.id}`]}>
            <ThemeProvider theme={theme}>
              <CourseDetailsPage />
            </ThemeProvider>
      </MemoryRouter>
    );

    mockCourse.lessons.forEach((lesson) => {
      const lessonTitle = screen.getByText(`${lesson.title}.`);
      expect(lessonTitle).toBeInTheDocument();

      if (lesson.status === "locked") {
        expect(
          screen.getByTestId(`lock-icon-${lesson.id}`)
        ).toBeInTheDocument();
      } else {
        expect(
          screen.queryByTestId(`lock-icon-${lesson.id}`)
        ).not.toBeInTheDocument();
      }
    });
  });

//   it("renders video player when lesson is unlocked", () => {
//     render(
//       <MemoryRouter initialEntries={[`/courses/${mockCourse.id}`]}>
//             <ThemeProvider theme={theme}>
//               <CourseDetailsPage />
//             </ThemeProvider>
//       </MemoryRouter>
//     );

//     const unlockedLesson = mockCourse.lessons.find(
//       (lesson) => lesson.status === "unlocked"
//     );

//     if (!unlockedLesson) {
//       throw new Error("No unlocked lesson found");
//     }

//     fireEvent.click(screen.getByText(`${unlockedLesson.title}.`));

//     expect(screen.getByTestId("video-player")).toBeInTheDocument();
//   });

// it("does not render video player when lesson is locked", () => {
//   render(
//       <MemoryRouter initialEntries={[`/courses/${mockCourse.id}`]}>
//           <ThemeProvider theme={theme}>
//             <CourseDetailsPage />
//           </ThemeProvider>
//       </MemoryRouter>
//   );

//   const lockedLesson = mockCourse.lessons.find(
//     (lesson) => lesson.status === "locked"
//   );

//   if (!lockedLesson) {
//     throw new Error("No locked lesson found");
//   }

//   fireEvent.click(screen.getByText(`${lockedLesson.title}.`));

//   expect(screen.queryByTestId("video-player")).not.toBeInTheDocument();
// });

});

// import React from "react";
// import { render, screen } from "@testing-library/react";
// import { useLocation, useParams } from "react-router-dom";
// import { useGetCourseByIdQuery } from "../src/redux/coursesApi";
// import CourseDetailsPage from "../src/pages/courseDetailsPage/CourseDetailsPage";

// jest.mock("react-router-dom", () => ({
//   useLocation: jest.fn(),
//   useParams: jest.fn(),
// }));

// jest.mock("redux/coursesApi", () => ({
//   useGetCourseByIdQuery: jest.fn(),
// }));

// describe("CourseDetailsPage", () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it("should render back link with correct href", () => {
//     const from = "/courses";
//     useLocation.mockReturnValue({ state: { from } });
//     useParams.mockReturnValue({ id: "1" });
//     useGetCourseByIdQuery.mockReturnValue({
//       data: {
//         title: "Test Course",
//         description: "This is a test course",
//         lessons: [],
//       },
//     });

//     render(<CourseDetailsPage />);

//     const backLink = screen.getByText("Go Back");
//     expect(backLink.getAttribute("href")).toBe(from);
//   });

//   it("should render course title and description", () => {
//     useParams.mockReturnValue({ id: "1" });
//     useGetCourseByIdQuery.mockReturnValue({
//       data: {
//         title: "Test Course",
//         description: "This is a test course",
//         lessons: [],
//       },
//     });

//     render(<CourseDetailsPage />);

//     const courseTitle = screen.getByText("Test Course");
//     const courseDescription = screen.getByText("This is a test course");
//     expect(courseTitle).toBeInTheDocument();
//     expect(courseDescription).toBeInTheDocument();
//   });

//   it("should render lessons list", () => {
//     useParams.mockReturnValue({ id: "1" });
//     useGetCourseByIdQuery.mockReturnValue({
//       data: {
//         title: "Test Course",
//         description: "This is a test course",
//         lessons: [
//           {
//             id: "1",
//             title: "Lesson 1",
//             status: "unlocked",
//             link: "",
//             previewImageLink: "",
//             order: 1,
//           },
//           {
//             id: "2",
//             title: "Lesson 2",
//             status: "locked",
//             link: "",
//             previewImageLink: "",
//             order: 2,
//           },
//         ],
//       },
//     });

//     render(<CourseDetailsPage />);

//     const lesson1 = screen.getByRole("lesson", { name: "Lesson 1." });
//     const lesson2 = screen.getByRole("lesson", { name: "Lesson 2." });
//     expect(lesson1).toBeInTheDocument();
//     expect(lesson2).toBeInTheDocument();
//   });

//   it("should update current lesson on lesson click", () => {
//     useParams.mockReturnValue({ id: "1" });
//     useGetCourseByIdQuery.mockReturnValue({
//       data: {
//         title: "Test Course",
//         description: "This is a test course",
//         lessons: [
//           {
//             id: "1",
//             title: "Lesson 1",
//             status: "unlocked",
//             link: "",
//             previewImageLink: "",
//             order: 1,
//           },
//           {
//             id: "2",
//             title: "Lesson 2",
//             status: "locked",
//             link: "",
//             previewImageLink: "",
//             order: 2,
//           },
//         ],
//       },
//     });

//     render(<CourseDetailsPage />);

//     const lesson1 = screen.getByRole("lesson", { name: "Lesson 1." });
//     const lesson2 = screen.getByRole("lesson", { name: "Lesson 2." });
//     lesson2.click();
//     expect(lesson2).toHaveClass("active");
//     expect(lesson1).not.toHaveClass("active");
//   });
// });
