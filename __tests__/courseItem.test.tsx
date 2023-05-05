import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";
import { CourseItem } from "../src/components/CourseItem/CourseItem";
import "@testing-library/jest-dom";

const courseProps = {
  courseId: "1",
  lessonsCount: 4,
  rating: 4.5,
  title: "Title",
  tags: ["tag"],
  courseMeta: {
    courseVideoPreview: {},
    skills: ["skill1", "skill2"],
  },
  image: "path/to/mock/image.png",
};

describe("Describe course card", () => {
  beforeEach(() =>
    render(
      <ThemeProvider
        theme={{
          media: {
            tablet: "(min-width: 768px)",
          },
        }}
      >
        <MemoryRouter>
          <CourseItem {...courseProps} />
        </MemoryRouter>
      </ThemeProvider>
    )
  );

  it("It should render the image of the course", () => {
    const img = document.querySelector("img") as HTMLImageElement;

    expect(img).toBeInTheDocument();
  });

  it("It should render the image with proper attributes", () => {
    const img = document.querySelector("img") as HTMLImageElement;

    expect(img).toHaveAttribute("alt", "Course preview image");
  });

  it("It should render the title of the course", () => {
    const title = document.querySelector("h2") as HTMLElement;

    expect(title).toBeInTheDocument();
  });

  it("It should render the Skills of the course with correct text", () => {
    const title = document.querySelector("h2") as HTMLElement;

    expect(title).toHaveTextContent("Title");
  });

  it("It should render the SkillsList of the course", () => {
    const SkillsList = document.querySelector("ul") as HTMLElement;

    expect(SkillsList).toBeInTheDocument();
    expect(SkillsList).toBeInTheDocument();
  });

  it("It should render the Skills of the course with correct text", () => {
    const SkillItem = document.querySelector("li") as HTMLElement;

    expect(SkillItem).toBeInTheDocument();
    expect(SkillItem).toHaveTextContent("skill1 skill2");
  });

  it("It should render the Tag of the course with correct text", () => {
    const tag = screen.getByText("#tag");

    expect(tag).toBeInTheDocument();
  });

  it("It should render the Rating of the course with correct text", () => {
    const rating = screen.getByText("Rating: 4.5");

    expect(rating).toBeInTheDocument();
  });
});
