import React from "react";
import { render, screen } from "@testing-library/react";
import TextInput from "./TextInput";

describe("TextInput", () => {
  it("renders a component", () => {
    render(<TextInput id="name" label="Name" placeholder="Name" />);
    const placeholderText = screen.getByText("Name");
    expect(placeholderText).toBeInTheDocument();
  });
});
