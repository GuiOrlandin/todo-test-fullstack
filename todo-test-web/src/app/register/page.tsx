import {
  RegisterContainer,
  RegisterContent,
  LoginButton,
  RegisterButton,
} from "./styles";

export default function Register() {
  return (
    <RegisterContainer>
      <RegisterContent>
        <label htmlFor="username">Email</label>
        <input type="text" id="username" placeholder="digite seu email" />

        <label htmlFor="password">Senha</label>
        <input type="text" id="password" placeholder="digite sua senha" />

        <RegisterButton>Registrar</RegisterButton>
        <LoginButton>Entrar</LoginButton>
      </RegisterContent>
    </RegisterContainer>
  );
}
