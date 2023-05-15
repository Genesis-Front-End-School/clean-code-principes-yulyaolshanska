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
})
  