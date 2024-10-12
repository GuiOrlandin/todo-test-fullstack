import {
  LoginButton,
  LoginContainer,
  LoginContent,
  RegisterButton,
} from "./styles";

export default function Login() {
  return (
    <LoginContainer>
      <LoginContent>
        <label htmlFor="username">Email</label>
        <input type="text" id="username" placeholder="digite seu email" />

        <label htmlFor="password">Senha</label>
        <input type="text" id="password" placeholder="digite sua senha" />

        <LoginButton>Entrar</LoginButton>
        <RegisterButton>Registrar</RegisterButton>
      </LoginContent>
    </LoginContainer>
  );
}
