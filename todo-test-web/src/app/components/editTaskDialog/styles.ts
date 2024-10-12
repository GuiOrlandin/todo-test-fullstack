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
  background: #f0edf6;
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
  padding: 0.7rem;
  border: none;
  border-radius: 8px;
  background: linear-gradient(
    90deg,
    rgba(122, 74, 163, 1) 0%,
    rgba(146, 80, 210, 1) 100%
  );

  &:hover {
    cursor: pointer;
  }
`;

export const SaveButton = styled(CloseButton)``;

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
    padding: 0.5rem;
    border-radius: 8px;
    border: none;
    margin-top: 0.5rem;
  }
`;