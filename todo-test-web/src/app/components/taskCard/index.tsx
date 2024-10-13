"use client";

import {
  EditAndDeleteButtonsContainer,
  TaskCardContent,
  TaskContainer,
} from "./styles";

import { Task } from "@/app/page";
import DeleteTaskDialog from "../deleteTaskDialog";
import EditOrCreateTaskDialog from "../editOrCreateTaskDialog";
import { EditTaskPut } from "@/hooks/editTaskFetch";
import { useEffect, useState } from "react";

interface TaskProps {
  deleteTask: () => void;
  editTask: (content: string) => void;
  checkBox: (completed: boolean) => void;
  task?: Task;
  token: string;
}

export default function TaskCard({
  task,
  deleteTask,
  editTask,
  checkBox,
}: TaskProps) {
  const [checkboxToggle, setCheckboxToggle] = useState<boolean>(
    task!.completed
  );

  useEffect(() => {
    checkBox(checkboxToggle);
  }, [checkboxToggle]);

  return (
    <TaskCardContent>
      <input
        id={task!.id}
        type="checkbox"
        checked={task?.completed}
        onChange={() => setCheckboxToggle(!checkboxToggle)}
      />
      <label htmlFor={task!.id}>{task!.content}</label>

      <EditAndDeleteButtonsContainer>
        <EditOrCreateTaskDialog
          task_id={task!.id}
          dialogType="edit"
          editTask={(content: string) => editTask!(content)}
        />
        <DeleteTaskDialog
          task_id={task!.id}
          deleteTask={() => deleteTask()}
        />
      </EditAndDeleteButtonsContainer>
    </TaskCardContent>
  );
}
