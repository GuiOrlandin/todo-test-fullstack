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
  border-radius: 6px;
  padding: 2rem 2rem 1.2rem 2rem;
  background: white;
  min-width: 25rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseAndSaveChangesButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
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

export const SaveButton = styled(CloseButton)`
  background: linear-gradient(
    90deg,
    rgba(122, 74, 163, 1) 0%,
    rgba(146, 80, 210, 1) 100%
  );

  &:hover {
    background: #cdc3ea;
  }
`;

export const CreateButton = styled(SaveButton)``;

export const TriggerDialogButton = styled.button`
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const InputAndLabelContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-top: 1rem;
  }

  input {
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #e1e8f6;

    margin-top: 0.5rem;
  }
`;

export const CreateTaskButton = styled.button`
  display: flex;
  padding: 1rem 5rem;
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
