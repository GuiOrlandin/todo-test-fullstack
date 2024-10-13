"use client";

import { createUserPost } from "@/hooks/createUserFetch";
import {
  RegisterContainer,
  RegisterContent,
  LoginButton,
  RegisterButton,
} from "./styles";
import { useReducer } from "react";
import { useRouter } from "next/navigation";
import { authenticateUserPost } from "@/hooks/authenticateUserFetch";
import { tokenStore } from "@/store/tokenStore";

export type Register = { email: string; password_hash: string };

type RegisterAction =
  | { type: "setEmail"; payload: string }
  | { type: "setPassword_hash"; payload: string };

function RegisterReducer(state: Register, action: RegisterAction): Register {
  switch (action.type) {
    case "setEmail":
      return { ...state, email: action.payload };
    case "setPassword_hash":
      return { ...state, password_hash: action.payload };
    default:
      return state;
  }
}

export default function Register() {
  const [state, dispatch] = useReducer(RegisterReducer, {
    email: "",
    password_hash: "",
  });

  const setToken = tokenStore((state) => state.setToken);

  const router = useRouter();

  async function handleRegister() {
    try {
      await createUserPost({
        email: state.email,
        password_hash: state.password_hash,
      });

      const authenticateResponse = await authenticateUserPost({
        email: state.email,
        password_hash: state.password_hash,
      });

      if (authenticateResponse.access_token) {
        setToken(authenticateResponse.access_token);
        router.push("/");
      } else {
        console.error("Token de acesso não recebido.");
      }
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  }

  return (
    <RegisterContainer>
      <RegisterContent>
        <label htmlFor="username">Email</label>
        <input
          type="text"
          id="username"
          placeholder="digite seu email"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: "setEmail", payload: event.target.value });
          }}
        />

        <label htmlFor="password">Senha</label>
        <input
          type="text"
          id="password"
          placeholder="digite sua senha"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: "setPassword_hash", payload: event.target.value });
          }}
        />

        <RegisterButton onClick={() => handleRegister()}>
          Registrar
        </RegisterButton>
        <LoginButton onClick={() => router.push("/login")}>Entrar</LoginButton>
      </RegisterContent>
    </RegisterContainer>
  );
}
