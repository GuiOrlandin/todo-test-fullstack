import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseAndSaveChangesButtonsContainer,
  CloseButton,
  Content,
  InputAndLabelContainer,
  Overlay,
  SaveButton,
  TriggerDialogButton,
} from "./styles";

import { AiOutlineEdit } from "react-icons/ai";

interface EditTaskDialogProps {
  task_id: string;
}

export default function EditTaskDialog({ task_id }: EditTaskDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <TriggerDialogButton>
          <AiOutlineEdit size={24} color="#9EA5B4" />
        </TriggerDialogButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Title>Edite sua tarefa</Dialog.Title>
          <InputAndLabelContainer>
            <label>Texto da tarefa</label>
            <input placeholder="digite o conteudo da sua tarefa" />
          </InputAndLabelContainer>

          <CloseAndSaveChangesButtonsContainer>
            <Dialog.Close asChild>
              <SaveButton>Editar</SaveButton>
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
