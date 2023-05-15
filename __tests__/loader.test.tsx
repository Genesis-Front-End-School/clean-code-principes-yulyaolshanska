import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Loader from "../src/components/Loader/Loader";

jest.mock("../src/components/Loader/Loader.styled", () => ({
  Spinner: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="spinner-mock">{children}</div>
  ),
}));

describe("Loader", () => {
  it("renders the spinner component", () => {
    const { getByTestId } = render(<Loader />);
    expect(getByTestId("spinner-mock")).toBeInTheDocument();
  });
});
