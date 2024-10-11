import { Task } from '../entities/task';
import { TaskRepository } from './taskRepository';

export class TaskRepositoryInMemory implements TaskRepository {
  public tasks: Task[] = [];

  async findAllTasksOfUser(user_id: string): Promise<[] | Task[]> {
    const tasks = this.tasks.filter((task) => task.user_id === user_id);

    return tasks;
  }

  async create(task: Task): Promise<void> {
    this.tasks.push(task);
  }

  async findById(id: string): Promise<Task> {
    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      return null;
    }

    return task;
  }

  async save(task: Task): Promise<void> {
    const taskIndex = this.tasks.findIndex(
      (currentTask) => currentTask.id === task.id,
    );

    if (taskIndex >= 0) {
      this.tasks[taskIndex] = task;
    }
  }
  async delete(id: string): Promise<void> {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
