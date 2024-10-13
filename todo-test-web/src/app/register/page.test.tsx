import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import userEvent from "@testing-library/user-event";
import { tokenStore } from "@/store/tokenStore";
import Register from "../register/page";
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

describe("Register", () => {
  tokenStore.setState({ setToken: jest.fn() });

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  beforeAll(() => {
    fetchMock.enableMocks();
  });

  it("renders a register", () => {
    render(<Register />);

    expect(screen.getByPlaceholderText("digite seu email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("digite sua senha")).toBeInTheDocument();
    expect(screen.getByText("Entrar")).toBeInTheDocument();
    expect(screen.getByText("Registrar")).toBeInTheDocument();
  });

  it("should a successful register", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        created_at: "2024-10-12T04:10:58.030Z",
        email: "gui@gmail.com",
        id: "2",
      })
    );

    fetchMock.mockResponseOnce(
      JSON.stringify({
        access_token: "mockToken",
      })
    );

    const setTokenMock = jest.fn();

    await act(async () => {
      tokenStore.setState({ setToken: setTokenMock });
    });

    render(<Register />);

    const emailInput = screen.getByPlaceholderText("digite seu email");
    const passwordInput = screen.getByPlaceholderText("digite sua senha");
    const registerButton = screen.getByText("Registrar");

    await userEvent.type(emailInput, "gui@gmail.com");
    await userEvent.type(passwordInput, "123456");
    await userEvent.click(registerButton);

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(2);
    });

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        "http://localhost:3333/user",
        expect.objectContaining({
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "gui@gmail.com",
            password_hash: "123456",
          }),
        })
      );
    });

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        "http://localhost:3333/signIn",
        expect.objectContaining({
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "gui@gmail.com",
            password_hash: "123456",
          }),
        })
      );
    });

    await waitFor(() => {
      expect(setTokenMock).toHaveBeenCalledWith("mockToken");
    });

    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith("/");
    });
  });

  it("should a redirect to login page", async () => {
    render(<Register />);

    const loginButton = screen.getByText("Entrar");

    await userEvent.click(loginButton);

    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith("/login");
    });
  });
});
