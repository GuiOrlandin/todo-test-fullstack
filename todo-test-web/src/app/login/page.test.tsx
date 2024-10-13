import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Login from "../../app/login/page";
import fetchMock from "jest-fetch-mock";
import userEvent from "@testing-library/user-event";
import { tokenStore } from "@/store/tokenStore";
import { act } from "react";

const pushMock = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      pathname: "/",
      push: pushMock,
    };
  },
}));

fetchMock.enableMocks();

describe("Login", () => {
  tokenStore.setState({ setToken: jest.fn() });

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("renders a login", () => {
    render(<Login />);

    expect(screen.getByPlaceholderText("digite seu email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("digite sua senha")).toBeInTheDocument();
    expect(screen.getByText("Entrar")).toBeInTheDocument();
    expect(screen.getByText("Registrar")).toBeInTheDocument();
  });

  it("should a successful login", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        access_token: "mockToken",
      })
    );

    const setTokenMock = jest.fn();

    await act(async () => {
      tokenStore.setState({ setToken: setTokenMock });
    });

    render(<Login />);

    const emailInput = screen.getByPlaceholderText("digite seu email");
    const passwordInput = screen.getByPlaceholderText("digite sua senha");
    const loginButton = screen.getByText("Entrar");

    await userEvent.type(emailInput, "gui@gmail.com");
    await userEvent.type(passwordInput, "123456");
    await userEvent.click(loginButton);

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        "http://localhost:3333/signIn",
        expect.objectContaining({
          method: "POST",
          body: JSON.stringify({
            email: "gui@gmail.com",
            password_hash: "123456",
          }),
        })
      );
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    await waitFor(() => {
      expect(setTokenMock).toHaveBeenCalledWith("mockToken");
    });

    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith("/");
    });
  });

  it("should a redirect to register page", async () => {
    render(<Login />);

    const registerButton = screen.getByText("Registrar");

    await userEvent.click(registerButton);

    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith("/register");
    });
  });
});
