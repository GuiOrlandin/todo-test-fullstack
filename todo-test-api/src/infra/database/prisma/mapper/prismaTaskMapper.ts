import { Task as TaskRaw } from '@prisma/client';
import { Task } from 'src/modules/task/entities/task';

export class PrismaTaskMapper {
  static toPrisma({
    completed,
    content,
    created_at,
    id,
    user_id,
  }: Task): TaskRaw {
    return {
      completed,
      content,
      created_at,
      id,
      user_id,
    };
  }

  static toDomain({ completed, content, user_id, id }: TaskRaw): Task {
    return new Task({
      content,
      completed,
      user_id,
      id,
    });
  }
}
