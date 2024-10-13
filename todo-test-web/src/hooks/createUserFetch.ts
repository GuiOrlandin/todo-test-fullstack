interface CreateUserPostRequest {
  email: string;
  password_hash: string;
}

export const createUserPost = async ({
  email,
  password_hash,
}: CreateUserPostRequest): Promise<void> => {
  let response = await fetch("http://localhost:3333/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password_hash }),
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`erro ao criar o usuário: ${response.status}`);
  }
};
