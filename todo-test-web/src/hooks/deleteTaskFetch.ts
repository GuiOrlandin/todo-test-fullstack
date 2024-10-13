interface DeleteTaskPostRequest {
  task_id: string;
  token: string;
}

export const deleteTaskDelete = async ({
  task_id,
  token,
}: DeleteTaskPostRequest): Promise<void> => {
  let response = await fetch("http://localhost:3333/task", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ task_id }),
  });

  if (response.status === 200) {
    return;
  } else {
    throw new Error(`erro ao deletar a tarefa: ${response.status}`);
  }
};
