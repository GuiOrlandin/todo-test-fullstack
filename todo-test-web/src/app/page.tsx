"use client";

import { tokenStore } from "@/store/tokenStore";

import { useRouter } from "next/navigation";

import { HomeContainer, HomeHeader, TaskContainer } from "./style";
import { useEffect, useState } from "react";
import { createTaskPost } from "@/hooks/createTaskFetch";
import { findAllTasksOfUserGet } from "@/hooks/findAllTasksOfUserFetch";
import TaskCard from "./components/taskCard";
import EditOrCreateTaskDialog from "./components/editOrCreateTaskDialog";
import { EditTaskPut } from "@/hooks/editTaskFetch";
import { deleteTaskDelete } from "@/hooks/deleteTaskFetch";

export interface Task {
  id: string;
  content: string;
  completed: boolean;
}

export default function Home() {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksCompleted, setTasksCompleted] = useState<Task[]>([]);
  const [notCompletedTasks, setNotCompletedTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const token = tokenStore((state) => state.token);

  async function handleEditTask(
    task_id: string,
    content?: string,
    completed?: boolean
  ) {
    try {
      if (completed !== undefined) {
        await EditTaskPut({ task_id, token, completed });
      }

      if (content && content !== "") {
        await EditTaskPut({ content, task_id, token });
      }

      await fetchTasks();
    } catch (error) {
      console.error("Erro ao editar task:", error);
    }
  }
  async function handleDeleteTask(task_id: string) {
    try {
      await deleteTaskDelete({ task_id, token });

      await fetchTasks();
    } catch (error) {
      console.error("Erro ao deletar a task:", error);
    }
  }

  async function fetchTasks() {
    try {
      const fetchedTasks = await findAllTasksOfUserGet({ token });

      setTasks(fetchedTasks);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  }

  async function handleCreateTask(content: string) {
    try {
      await createTaskPost({ content, token });

      await fetchTasks();
    } catch (error) {
      console.error("Erro ao criar task:", error);
    }
  }

  useEffect(() => {
    if (!token) {
      router.push("/login");
      return;
    }

    fetchTasks();
  }, [token]);

  useEffect(() => {
    const completedTasks = tasks.filter((task) => task.completed);
    const notCompletedTasks = tasks.filter((task) => !task.completed);

    setTasksCompleted(completedTasks);
    setNotCompletedTasks(notCompletedTasks);
  }, [tasks]);

  return (
    <HomeContainer>
      <HomeHeader>
        <h1>Organize suas tarefas do dia.</h1>
      </HomeHeader>

      {loading ? (
        <h1> carregando...</h1>
      ) : (
        <TaskContainer>
          <p>Tarefas</p>
          {notCompletedTasks.length > 0 ? (
            notCompletedTasks.map((task) => (
              <TaskCard
                key={task.id}
                token={token}
                task={task}
                editTask={(content: string) => handleEditTask(task.id, content)}
                deleteTask={() => handleDeleteTask(task.id)}
                checkBox={(completed: boolean) =>
                  handleEditTask(task.id, "", completed)
                }
              />
            ))
          ) : (
            <span>Nenhuma tarefa a ser completa</span>
          )}

          <p>Tarefas Concluidas</p>

          {tasksCompleted.length > 0 ? (
            tasksCompleted.map((task) => (
              <TaskCard
                key={task.id}
                token={token}
                task={task}
                editTask={(content: string) => handleEditTask(task.id, content)}
                deleteTask={() => handleDeleteTask(task.id)}
                checkBox={(completed: boolean) =>
                  handleEditTask(task.id, "", completed)
                }
              />
            ))
          ) : (
            <span>Nenhuma tarefa completa</span>
          )}

          <EditOrCreateTaskDialog
            dialogType="create"
            createTask={(content: string) => handleCreateTask(content)}
          />
        </TaskContainer>
      )}
    </HomeContainer>
  );
}
