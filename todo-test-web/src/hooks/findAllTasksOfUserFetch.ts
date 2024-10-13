import { Task } from "@/app/page";

interface findAllTasksOfUserGetProps {
  token: string;
}

export const findAllTasksOfUserGet = async ({
  token,
}: findAllTasksOfUserGetProps): Promise<Task[]> => {
  let response = await fetch("http://localhost:3333/task", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`erro ao obter as tarefas do usuário: ${response.status}`);
  }
};
