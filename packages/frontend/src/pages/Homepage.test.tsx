import React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../store/actions";
import Homepage from "./Homepage";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("Homepage component", () => {
  const mockDispatch = jest.fn();
  const mockNavigate = jest.fn();
  const userName = "Test User";
  const userToken = "Test Token";

  beforeEach(() => {
    sessionStorage.setItem("userToken", userToken);
    sessionStorage.setItem("userName", userName);
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    sessionStorage.clear();
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    render(<Homepage />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText(`Hello: ${userName}`)).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it("dispatches getUser action if a token is found", () => {
    render(<Homepage />);
    expect(mockDispatch).toHaveBeenCalledWith(getUser());
  });

  it("clears sessionStorage and navigates to '/' when logout is clicked", async () => {
    render(<Homepage />);
    const button = screen.getByText("Logout");
    await act(async () => {
      fireEvent.click(button);
    });

    expect(sessionStorage.getItem("userToken")).toBeNull();
    expect(sessionStorage.getItem("userName")).toBeNull();
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("navigates to '/' if no token is found", () => {
    sessionStorage.removeItem("userToken");
    render(<Homepage />);
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
