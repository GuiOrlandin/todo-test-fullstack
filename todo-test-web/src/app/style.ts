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

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  width: 35rem;
  border-radius: 8px;
  align-items: center;
  border: 2px solid #d7dde9;
  padding: 2rem;
  gap: 1rem;

  p {
    font-weight: bold;
  }
`;
