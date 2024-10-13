"use client";

import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  flex-direction: column;
  min-width: 16rem;
  text-align: center;
  border-radius: 6px;
  padding: 2rem 2rem 1.2rem 2rem;
  background: white;
  min-width: 25rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TriggerDialogButton = styled.button`
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const CloseButton = styled.button`
  color: white;
  padding: 1rem 3.5rem;
  border: none;
  border-radius: 8px;
  background: #85888c;

  &:hover {
    cursor: pointer;
    background: #e1e8f6;
  }
`;

export const DeleteButton = styled.button`
  color: white;
  padding: 0.7rem;
  border: none;
  padding: 1rem 3.5rem;
  border-radius: 8px;
  background: linear-gradient(
    90deg,
    rgba(211, 7, 7, 1) 0%,
    rgba(240, 83, 83, 1) 100%
  );
  &:hover {
    cursor: pointer;
    background: #ec6851;
  }
`;

export const CloseAndSaveChangesButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;
