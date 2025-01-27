import { Task } from '../entities/task';

export abstract class TaskRepository {
  abstract create(task: Task): Promise<void>;
  abstract findById(id: string): Promise<Task | null>;
  abstract findAllTasksOfUser(user_id: string): Promise<Task[] | []>;
  abstract save(task: Task): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
