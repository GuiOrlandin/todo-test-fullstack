import TaskCard from "./components/taskCard";

import {
  CreateTaskButton,
  HomeContainer,
  HomeHeader,
  TaskContainer,
} from "./style";

export interface Task {
  id: string;
  content: string;
  completed: boolean;
}

export default function Home() {
  return (
    <HomeContainer>
      <HomeHeader>
        <h1>Organize suas tarefas do dia.</h1>
      </HomeHeader>
      <TaskContainer>
        <TaskCard
          task={{ completed: true, content: "Cortar Cabelo", id: "3" }}
        />

        <CreateTaskButton>Criar Task</CreateTaskButton>
      </TaskContainer>
    </HomeContainer>
  );
}
