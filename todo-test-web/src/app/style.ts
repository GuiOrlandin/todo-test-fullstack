"use client";

import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  padding: 2rem 4rem 4rem 4rem;
  flex-direction: column;
  align-items: center;
`;

export const HomeHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid #d7dde9;

  h1 {
    margin-bottom: 1rem;
    font-size: 1.7rem;
  }
`;
export const CreateTaskButton = styled.button`
  display: flex;
  padding: 1rem;
  width: 100%;
  margin-top: 2rem;
  justify-content: center;
  text-align: center;
  color: white;
  border: none;
  border-radius: 8px;

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

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  width: 35rem;
  border-radius: 8px;
  align-items: center;
  border: 2px solid #d7dde9;
  padding: 2rem;
`;
