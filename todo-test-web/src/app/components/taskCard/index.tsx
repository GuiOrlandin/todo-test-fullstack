import { EditAndDeleteButtonsContainer, TaskCardContainer } from "./styles";

import { Task } from "@/app/page";
import EditTaskDialog from "../editTaskDialog";
import DeleteTaskDialog from "../deleteTaskDialog";

interface TaskProps {
  removeTask?: (task: Task) => void;
  task: Task;
}

export default function TaskCard({ task, removeTask }: TaskProps) {
  return (
    <TaskCardContainer>
      <input id={task.id} type="checkbox" checked={task.completed} />
      <label htmlFor={task.id}>{task.content}</label>

      <EditAndDeleteButtonsContainer>
        <EditTaskDialog task_id={task.id} />
        <DeleteTaskDialog task_id={task.id} />
      </EditAndDeleteButtonsContainer>
    </TaskCardContainer>
  );
}
