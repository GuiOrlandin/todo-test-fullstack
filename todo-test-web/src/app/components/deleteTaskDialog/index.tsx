import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Content,
  Overlay,
  TriggerDialogButton,
  CloseButton,
  DeleteButton,
  CloseAndSaveChangesButtonsContainer,
} from "./styles";

import { FaRegTrashCan } from "react-icons/fa6";

interface EditTaskDialogProps {
  task_id: string;
  deleteTask: () => void;
}

export default function DeleteTaskDialog({ deleteTask }: EditTaskDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <TriggerDialogButton data-testid="delete-task-button">
          <FaRegTrashCan size={22} color="#9EA5B4" />
        </TriggerDialogButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Title>Deseja deletar sua tarefa</Dialog.Title>

          <CloseAndSaveChangesButtonsContainer>
            <Dialog.Close asChild>
              <DeleteButton onClick={() => deleteTask()}>Deletar</DeleteButton>
            </Dialog.Close>
            <Dialog.Close asChild>
              <CloseButton>Fechar</CloseButton>
            </Dialog.Close>
          </CloseAndSaveChangesButtonsContainer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
