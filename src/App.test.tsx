import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders hero section menu link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Our Menu/i);
  expect(linkElement).toBeInTheDocument();
});
