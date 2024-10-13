import { Injectable } from '@nestjs/common';

import { taskNotFoundException } from '../exception/taskDontFound';
import { TaskRepository } from '../repositories/taskRepository';
import { taskWithoutPermissionException } from '../exception/taskWithoutPermission';

interface EditTaskRequest {
  content?: string;
  task_id: string;
  user_id: string;
  completed?: boolean;
}

@Injectable()
export class EditTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute({ content, user_id, task_id, completed }: EditTaskRequest) {
    if (completed !== undefined) {
      const task = await this.taskRepository.findById(task_id);

      if (!task) {
        throw new taskNotFoundException();
      }

      if (user_id !== task.user_id) {
        throw new taskWithoutPermissionException({
          actionName: 'editar',
        });
      }

      task.completed = completed;

      await this.taskRepository.save(task);

      return task;
    } else {
      const task = await this.taskRepository.findById(task_id);

      if (!task) {
        throw new taskNotFoundException();
      }

      if (user_id !== task.user_id) {
        throw new taskWithoutPermissionException({
          actionName: 'editar',
        });
      }

      task.content = content;

      await this.taskRepository.save(task);

      return task;
    }
  }
}
