import React from "react";
import { render } from "@testing-library/react";
import Login from "./login";

describe("LoginComponent", () => {
  test("Should start with initial state", () => {
    const { getByTestId } = render(<Login />);
    const errorWrap = getByTestId("error-wrap");
    expect(errorWrap.childElementCount).toBe(0);
    const submitButton = getByTestId("submit") as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
    const emailStatus = getByTestId(`email-status`);
    expect(emailStatus.textContent).toBe("🔴");
    const passwordStatus = getByTestId(`email-status`);
    expect(passwordStatus.title).toBe("Campo obrigatório");
    expect(passwordStatus.textContent).toBe("🔴");
  });
});
