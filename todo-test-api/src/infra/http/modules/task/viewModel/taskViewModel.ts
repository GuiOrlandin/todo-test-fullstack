import { Task } from 'src/modules/task/entities/task';

export class TaskViewModel {
  static toHttp({ created_at, completed, content, user_id, id }: Task) {
    return {
      created_at,
      completed,
      content,
      user_id,
      id,
    };
  }

  static toHttpArray(tasks: Task[]) {
    return tasks.map((task) => this.toHttp(task));
  }
}
