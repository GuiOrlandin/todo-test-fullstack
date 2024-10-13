interface editTaskPostRequest {
  content?: string;
  task_id: string;
  token: string;
  completed?: boolean;
}

export const EditTaskPut = async ({
  content,
  task_id,
  token,
  completed,
}: editTaskPostRequest): Promise<void> => {
  if (completed !== undefined) {
    let response = await fetch("http://localhost:3333/task", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ task_id, completed }),
    });

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`erro ao editar a task: ${response.status}`);
    }
  } else {
    let response = await fetch("http://localhost:3333/task", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ content, task_id }),
    });

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`erro ao editar a task: ${response.status}`);
    }
  }
};
