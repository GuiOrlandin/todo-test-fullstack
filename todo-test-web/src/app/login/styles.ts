"use client";

import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const LoginContent = styled.main`
  display: flex;
  padding: 4rem;
  width: 26rem;
  border-radius: 8px;
  flex-direction: column;
  border: 1px solid gray;

  input {
    padding: 0.7rem;
    border-radius: 8px;
    border: 1px solid gray;
    margin-bottom: 2rem;
  }

  label {
    margin-bottom: 0.5rem;
  }
`;

export const LoginButton = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 8px;
  color: white;
  margin-bottom: 0.5rem;
  background: #160548;

  &:hover {
    cursor: pointer;
    background: #413072;
  }
`;
export const RegisterButton = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 8px;
  color: white;
  background: linear-gradient(
    90deg,
    rgba(122, 74, 163, 1) 0%,
    rgba(146, 80, 210, 1) 100%
  );

  &:hover {
    cursor: pointer;
    background: #cdc3ea;
  }
`;
