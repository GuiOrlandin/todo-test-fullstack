import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import userEvent from "@testing-library/user-event";

import { tokenStore } from "@/store/tokenStore";
import Home from "./page";

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

describe("Home", () => {
  const token = "mockToken";

  beforeEach(() => {
    fetchMock.resetMocks();
    tokenStore.setState({ token });
  });

  beforeAll(() => {
    fetchMock.enableMocks();
  });

  it("renders a home", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify([
        {
          completed: false,
          content: "tarefa",
          created_at: "2024-10-12T21:01:03.352Z",
          id: "new-task-id",
          user_id: "12e305c6-43ad-47d4-b1c9-d3a8430d8b86",
        },
      ])
    );

    render(<Home />);

    await waitFor(() => {
      expect(screen.queryByText("carregando...")).not.toBeInTheDocument();
    });

    expect(screen.getByText("tarefa")).toBeInTheDocument();
  });

  it("render a create task modal", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify([
        {
          completed: false,
          content: "tarefa",
          created_at: "2024-10-12T21:01:03.352Z",
          id: "new-task-id",
          user_id: "12e305c6-43ad-47d4-b1c9-d3a8430d8b86",
        },
      ])
    );

    render(<Home />);

    await waitFor(() => {
      expect(screen.queryByText("carregando...")).not.toBeInTheDocument();
    });
    const createTaskButton = screen.getByText("Criar task");

    userEvent.click(createTaskButton);

    await waitFor(() => {
      expect(screen.getByText("Texto da tarefa")).toBeInTheDocument();
    });
  });

  it("render a edit task modal", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify([
        {
          completed: false,
          content: "tarefa",
          created_at: "2024-10-12T21:01:03.352Z",
          id: "new-task-id",
          user_id: "12e305c6-43ad-47d4-b1c9-d3a8430d8b86",
        },
      ])
    );

    render(<Home />);

    await waitFor(() => {
      expect(screen.queryByText("carregando...")).not.toBeInTheDocument();
    });

    const editTaskButton = screen.getByTestId("edit-task-button");

    userEvent.click(editTaskButton);

    await waitFor(() => {
      expect(screen.getByText("Edite sua tarefa")).toBeInTheDocument();
    });
  });
  it("render a delete task modal", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify([
        {
          completed: false,
          content: "tarefa",
          created_at: "2024-10-12T21:01:03.352Z",
          id: "new-task-id",
          user_id: "12e305c6-43ad-47d4-b1c9-d3a8430d8b86",
        },
      ])
    );

    render(<Home />);

    await waitFor(() => {
      expect(screen.queryByText("carregando...")).not.toBeInTheDocument();
    });

    const editTaskButton = screen.getByTestId("delete-task-button");

    userEvent.click(editTaskButton);

    await waitFor(() => {
      expect(screen.getByText("Deseja deletar sua tarefa")).toBeInTheDocument();
    });
  });
});
