"use client";

import { ChangeEvent, useEffect, useReducer } from "react";
import {
  LoginButton,
  LoginContainer,
  LoginContent,
  RegisterButton,
} from "./styles";
import { tokenStore } from "@/store/tokenStore";

import { useRouter } from "next/navigation";
import { authenticateUserPost } from "@/hooks/authenticateUserFetch";

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

export default function Login() {
  const token = tokenStore((state) => state.token);

  const [state, dispatch] = useReducer(RegisterReducer, {
    email: "",
    password_hash: "",
  });
  const router = useRouter();

  const setToken = tokenStore((state) => state.setToken);

  async function handleAuthenticateUser() {
    try {
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

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, [token]);
  return (
    <LoginContainer>
      <LoginContent>
        <label htmlFor="username">Email</label>
        <input
          type="text"
          id="username"
          placeholder="digite seu email"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: "setEmail", payload: event.target.value });
          }}
        />

        <label htmlFor="password">Senha</label>
        <input
          type="text"
          id="password"
          placeholder="digite sua senha"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: "setPassword_hash", payload: event.target.value });
          }}
        />

        <LoginButton onClick={() => handleAuthenticateUser()}>
          Entrar
        </LoginButton>
        <RegisterButton onClick={() => router.push("/register")}>
          Registrar
        </RegisterButton>
      </LoginContent>
    </LoginContainer>
  );
}
