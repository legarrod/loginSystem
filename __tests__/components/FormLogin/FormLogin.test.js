import React from "react";
import { screen, render, fireEvent, act } from "@testing-library/react";
import SignIn from "../../../components/FormLogin";

describe("when the formLogin have labels", () => {
  render(<SignIn />);
  it("should exists the fields: email, password ", () => {
    expect(screen.getByLabelText(/Correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contraseña/i)).toBeInTheDocument();
    expect(screen.queryByText(/Recordarme/i)).toBeInTheDocument();
  });
});

// describe("when the user blurs an empty field", () => {
//   it("should display a validation error message for the input name", async () => {
//     const { getByLabelText, container } = render(<SignIn />);

//     await act(async () => {
//       const emailInput = getByLabelText("Correo electrónico *");
//       fireEvent.change(emailInput, { target: { value: "invalid email" } });
//       fireEvent.blur(emailInput);
//     });

//     expect(container.innerHTML).toMatch("Escribio mal el correo");
//   });
// });
