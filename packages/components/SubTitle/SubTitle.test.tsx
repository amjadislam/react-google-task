import React from "react";
import { render, screen } from "@testing-library/react";
import SubTitle from "./SubTitle";

test("renders children correctly", () => {
  render(<SubTitle>Test Title</SubTitle>);
  const titleElement = screen.getByText(/Test Title/i);
  expect(titleElement).toBeInTheDocument();
});

test("has correct font-size style", () => {
  render(<SubTitle>Test Title</SubTitle>);
  const titleElement = screen.getByText(/Test Title/i);
  expect(titleElement).toHaveStyle("font-size: .67em"); // Adjusted value
});
