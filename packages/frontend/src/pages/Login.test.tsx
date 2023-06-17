import React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "@loginflow/api";
import Login from "./Login";

import { loginSuccess, loginError } from "../store/actions"; // Add this line

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("@loginflow/api", () => ({
  loginWithGoogle: jest.fn(),
}));

describe("Login component", () => {
  const mockDispatch = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  it("calls loginWithGoogle on 'Continue with Google' click", async () => {
    (loginWithGoogle as jest.Mock).mockResolvedValue({});

    render(<Login />);

    const button = screen.getByText(/Continue with Google/i);
    fireEvent.click(button);

    expect(loginWithGoogle).toHaveBeenCalledTimes(1);
  });

  it("navigates to '/home' and dispatches loginSuccess when login is successful", async () => {
    const mockUserData = {
      displayName: "Test",
      email: "test@test.com",
      phoneNumber: "1234567890",
      photoURL: "test.png",
    };

    (loginWithGoogle as jest.Mock).mockResolvedValue(mockUserData);

    render(<Login />);

    const button = screen.getByText(/Continue with Google/i);
    await act(async () => {
      fireEvent.click(button);
    });

    expect(mockNavigate).toHaveBeenCalledWith("/home");
    expect(mockDispatch).toHaveBeenCalledWith(loginSuccess(mockUserData));
  });

  it("dispatches loginError when login fails", async () => {
    const mockError = new Error("Failed to login");

    (loginWithGoogle as jest.Mock).mockRejectedValue(mockError);

    render(<Login />);

    const button = screen.getByText(/Continue with Google/i);
    await act(async () => {
      fireEvent.click(button);
    });

    expect(mockDispatch).toHaveBeenCalledWith(loginError(mockError));
  });

  it("navigates to '/home' if token is present in sessionStorage on mount", () => {
    sessionStorage.setItem("userToken", "dummy_token");

    render(<Login />);

    expect(mockNavigate).toHaveBeenCalledWith("/home");

    sessionStorage.clear();
  });
});
