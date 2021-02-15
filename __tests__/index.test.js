import React from "react";
import { screen, render } from "@testing-library/react";
import Home from "../pages";
import userEvent from "@testing-library/user-event";

describe("when the page index is mounted", () => {
  it("there must be a create page index", () => {
    render(<Home />);
    expect(screen.queryByText("Registro")).toBeInTheDocument();
    expect(screen.queryByText("Inicio sesión")).toBeInTheDocument();
  });
});

describe("when event click open modal", () => {
  it("Should open the modal login", () => {
    render(<Home />);
    userEvent.click(screen.queryByText("Inicio sesión"));
    expect(screen.queryByText("Ingresar")).toBeInTheDocument();
  });
});

describe("when event click open modal", () => {
  it("Should open the modal register", () => {
    render(<Home />);
    userEvent.click(screen.queryByText("Registro"));
    expect(screen.queryByText("Registrar")).toBeInTheDocument();
  });
});
