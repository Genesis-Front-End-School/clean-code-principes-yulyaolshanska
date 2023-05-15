import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";
import { CoursesList } from "../src/components/CoursesList/CoursesList";
import { ICourse } from "../src/types/type";
import "@testing-library/jest-dom";

describe("CoursesList", () => {
  const courses: ICourse[] = [
    {
      id: "1",
      title: "Course 1",
      lessonsCount: 10,
      rating: 4.5,
      tags: [],
      meta: {
        author: "Author 1",
        duration: "1h",
      },
      previewImageLink: "https://image.com/1",
      containsLockedLessons: false,
      description: "Description 1",
    },
    {
      id: "2",
      title: "Course 2",
      lessonsCount: 8,
      rating: 3.7,
      tags: [],
      meta: {
        author: "Author 2",
        duration: "2h",
      },
      previewImageLink: "https://image.com/2",
      containsLockedLessons: true,
      description: "Description 2",
    },
  ];

  const theme = {
    colors: {
      accent: "#6648c8",
    },
    media: {
      tablet: "(min-width: 768px)",
    },
  };

  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <CoursesList courses={courses} />
        </MemoryRouter>
      </ThemeProvider>
    );
  });

  it("renders the list of courses", () => {
    const title10 = screen.getByText("Course 1");
    const title11 = screen.getByText("Course 2");

    expect(title10).toBeInTheDocument();
    expect(title11).toBeInTheDocument();
  });

  it("updates the current page when handlePaginationClick is called", () => {
    const setCurrentPage = jest.fn();
    const handlePaginationClick = (currentPage: number): void => {
      setCurrentPage(currentPage);
    };

    handlePaginationClick(2);

    expect(setCurrentPage).toHaveBeenCalledWith(2);
  });
});
