import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders", () => {
    render(<App />);
    const heading = screen.getByText(/what do you think of this?/i);
    expect(heading).toBeInTheDocument();
  });
});
