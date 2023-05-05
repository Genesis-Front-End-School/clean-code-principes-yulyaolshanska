import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../src/styles/theme";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Pagination } from "../src/components/Pagination/Pagination";

describe("Pagination component", () => {
  const totalPageCount = 5;
  const mockOnPaginationClick = jest.fn();
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  afterEach(() => {
    // window.scrollTo.mockRestore();
    mockOnPaginationClick.mockClear();
  });

  it("renders Prev button as disabled on first page", () => {
    render(
      <ThemeProvider theme={theme}>
        <Pagination
          totalPageCount={totalPageCount}
          onPaginationClick={mockOnPaginationClick}
        />
      </ThemeProvider>
    );
    const prevButton = screen.getByText("Prev");
    expect(prevButton).toBeInTheDocument();
    expect(prevButton).toBeDisabled();
  });

  it("renders Next button as enabled on first page", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Pagination
          totalPageCount={totalPageCount}
          onPaginationClick={mockOnPaginationClick}
        />
      </ThemeProvider>
    );
    const nextButton = getByText("Next");
    expect(nextButton).toBeEnabled();
  });

  it("calls onPaginationClick with page number when Next button is clicked", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Pagination
          totalPageCount={totalPageCount}
          onPaginationClick={mockOnPaginationClick}
        />
      </ThemeProvider>
    );
    const nextButton = getByText("Next");
    fireEvent.click(nextButton);
    expect(mockOnPaginationClick).toHaveBeenCalledTimes(1);
    expect(mockOnPaginationClick).toHaveBeenCalledWith(2);
  });

  it("updates current page when Next button is clicked", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Pagination
          totalPageCount={totalPageCount}
          onPaginationClick={mockOnPaginationClick}
        />
      </ThemeProvider>
    );
    const nextButton = getByText("Next");
    fireEvent.click(nextButton);
    const prevButton = getByText("Prev");
    expect(prevButton).toBeEnabled();
  });

  it("calls onPaginationClick with page number when Prev button is clicked", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Pagination
          totalPageCount={totalPageCount}
          onPaginationClick={mockOnPaginationClick}
        />
      </ThemeProvider>
    );
    const nextButton = getByText("Next");
    fireEvent.click(nextButton);
    const prevButton = getByText("Prev");
    fireEvent.click(prevButton);
    expect(mockOnPaginationClick).toHaveBeenCalledTimes(2);
    expect(mockOnPaginationClick).toHaveBeenCalledWith(1);
  });

  it("updates current page when Prev button is clicked", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Pagination
          totalPageCount={totalPageCount}
          onPaginationClick={mockOnPaginationClick}
        />
      </ThemeProvider>
    );
    const nextButton = getByText("Next");
    fireEvent.click(nextButton);
    const prevButton = getByText("Prev");
    fireEvent.click(prevButton);
    expect(prevButton).toBeDisabled();
    expect(nextButton).toBeEnabled();
  });

  it("disables Next button on last page", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Pagination
          totalPageCount={totalPageCount}
          onPaginationClick={mockOnPaginationClick}
        />
      </ThemeProvider>
    );
    const nextButton = getByText("Next");
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    expect(nextButton).toBeDisabled();
  });

  it("renders Prev button as enabled on last page", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Pagination
          totalPageCount={totalPageCount}
          onPaginationClick={mockOnPaginationClick}
        />
      </ThemeProvider>
    );
    const nextButton = getByText("Next");
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    const prevButton = getByText("Prev");
    expect(prevButton).toBeEnabled();
  });
});
