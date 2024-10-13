interface createTaskPostRequest {
  content: string;
  token: string;
}

export const createTaskPost = async ({
  content,
  token,
}: createTaskPostRequest): Promise<void> => {
  let response = await fetch("http://localhost:3333/task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ content }),
  });

  if (response.status === 201) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`erro ao criar a tarefa: ${response.status}`);
  }
};
