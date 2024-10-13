interface authenticateUserPostRequest {
  email: string;
  password_hash: string;
}
interface AuthenticateUserPostResponse {
  access_token: string;
}

export const authenticateUserPost = async ({
  email,
  password_hash,
}: authenticateUserPostRequest): Promise<AuthenticateUserPostResponse> => {
  let response = await fetch("http://localhost:3333/signIn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password_hash }),
  });

  if (response.ok) {
    const text = await response.text();
    if (text) {
      const data: AuthenticateUserPostResponse = JSON.parse(text);
      return data;
    } else {
      throw new Error("Resposta do servidor está vazia.");
    }
  } else {
    throw new Error(`Erro ao autenticar o usuário: ${response.status}`);
  }
};
