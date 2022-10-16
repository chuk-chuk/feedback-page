import React from "react";
import { render, screen } from "@testing-library/react";
import TextInput from "./TextInput";

describe("TextInput", () => {
  it("renders a component", () => {
    render(<TextInput id="name" placeholder="Name" />);
    const placeholderText = screen.getByPlaceholderText("Name");
    expect(placeholderText).toBeInTheDocument();
  });
});
