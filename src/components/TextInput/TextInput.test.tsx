import React from "react";
import { render, screen } from "@testing-library/react";
import TextInput from "./TextInput";
import userEvent from "@testing-library/user-event";

describe("TextInput", () => {
  it("renders a component with the correct label", () => {
    render(<TextInput id="name" label="Name" />);
    const label = screen.getByText("Name");
    expect(label).toBeInTheDocument();
  });

  it("calls onChange", () => {
    const onChangeMock = jest.fn();
    render(
      <TextInput
        id="name"
        label="Name"
        placeholder="type here"
        onChange={onChangeMock}
      />
    );
    const input = screen.getByPlaceholderText("type here");
    userEvent.type(input, "hello");
    expect(onChangeMock).toHaveBeenCalledTimes(5);
  });
});
