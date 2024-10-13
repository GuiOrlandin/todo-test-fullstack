"use client";

import React, { ChangeEvent, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseAndSaveChangesButtonsContainer,
  CloseButton,
  Content,
  CreateButton,
  CreateTaskButton,
  InputAndLabelContainer,
  Overlay,
  SaveButton,
  TriggerDialogButton,
} from "./styles";

import { AiOutlineEdit } from "react-icons/ai";

interface EditOrCreateTaskDialogProps {
  task_id?: string;
  dialogType: "edit" | "create";
  createTask?: (content: string) => void;
  editTask?: (content: string) => void;
}

export default function EditOrCreateTaskDialog({
  task_id,
  dialogType,
  createTask,
  editTask,
}: EditOrCreateTaskDialogProps) {
  const [content, setContent] = useState<string>();
  const [editedContent, setEditedContent] = useState<string>();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {dialogType === "edit" ? (
          <TriggerDialogButton data-testid="edit-task-button">
            <AiOutlineEdit size={24} color="#9EA5B4" />
          </TriggerDialogButton>
        ) : (
          <CreateTaskButton>Criar task</CreateTaskButton>
        )}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          {dialogType === "edit" ? (
            <>
              <Dialog.Title>Edite sua tarefa</Dialog.Title>

              <InputAndLabelContainer>
                <label>Texto da tarefa</label>
                <input
                  placeholder="digite o conteudo da sua tarefa"
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setEditedContent(event.target.value)
                  }
                />
              </InputAndLabelContainer>
            </>
          ) : (
            <>
              <Dialog.Title>Crie sua tarefa</Dialog.Title>

              <InputAndLabelContainer>
                <label>Texto da tarefa</label>
                <input
                  placeholder="digite o conteudo da sua tarefa"
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setContent(event.target.value)
                  }
                />
              </InputAndLabelContainer>
            </>
          )}

          <CloseAndSaveChangesButtonsContainer>
            {dialogType === "edit" ? (
              <>
                <Dialog.Close asChild>
                  <SaveButton onClick={() => editTask!(editedContent!)}>
                    Editar
                  </SaveButton>
                </Dialog.Close>
              </>
            ) : (
              <>
                <Dialog.Close asChild>
                  <CreateButton onClick={() => createTask!(content!)}>
                    Criar
                  </CreateButton>
                </Dialog.Close>
              </>
            )}

            <Dialog.Close asChild>
              <CloseButton>Fechar</CloseButton>
            </Dialog.Close>
          </CloseAndSaveChangesButtonsContainer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
