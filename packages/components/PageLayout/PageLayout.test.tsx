import React from "react";
import { render, screen } from "@testing-library/react";
import PageLayout from "./PageLayout";

test("renders children correctly", () => {
  render(
    <PageLayout>
      <div>Test Child</div>
    </PageLayout>
  );

  const childElement = screen.getByText(/Test Child/i);
  expect(childElement).toBeInTheDocument();
});

test("renders multiple children correctly", () => {
  render(
    <PageLayout>
      <div>Test Child 1</div>
      <div>Test Child 2</div>
    </PageLayout>
  );

  const childElement1 = screen.getByText(/Test Child 1/i);
  const childElement2 = screen.getByText(/Test Child 2/i);

  expect(childElement1).toBeInTheDocument();
  expect(childElement2).toBeInTheDocument();
});
