import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("renders a component in a default state", () => {
    render(<App />);
    const heading = screen.getByText(/what do you think of this?/i);
    const nameLabel = screen.getByText(/name/i);
    const emailLabel = screen.getByText(/email/i);
    const commentLabel = screen.getByText(/please give up more details below/i);
    const message = screen.getByText(/be the first to leave a comment!/i);

    expect(heading).toBeInTheDocument();
    expect(nameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(commentLabel).toBeInTheDocument();
    expect(message).toBeInTheDocument();

    expect(screen.queryByTestId("graph")).not.toBeInTheDocument();
    expect(screen.getByText(/submit/i)).toHaveAttribute("disabled");
  });

  it("shows no errors message when all values entered", async () => {
    render(<App />);
    userEvent.click(screen.getByTestId("star1"));
    userEvent.type(screen.getByTestId("nameInput"), "Anna");
    userEvent.type(screen.getByTestId("emailInput"), "email@email.com");
    userEvent.type(screen.getByTestId("boxInput"), "comment");

    await waitFor(() =>
      expect(screen.queryByTestId("Name is required")).not.toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.queryByTestId("Email is required")).not.toBeInTheDocument()
    );
    await waitFor(() =>
      expect(
        screen.queryByTestId("Leave your comment please")
      ).not.toBeInTheDocument()
    );

    expect(screen.getByText(/submit/i)).not.toHaveAttribute("disabled");
  });
});
