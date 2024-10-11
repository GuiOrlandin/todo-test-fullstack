import { Injectable } from '@nestjs/common';
import { TaskRepository } from '../repositories/taskRepository';
import { taskNotFoundException } from '../exception/taskDontFound';
import { taskWithoutPermissionException } from '../exception/taskWithoutPermission';

interface DeleteTaskRequest {
  task_id: string;
  user_id: string;
}

@Injectable()
export class DeleteTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute({ task_id, user_id }: DeleteTaskRequest) {
    const task = await this.taskRepository.findById(task_id);

    if (!task) {
      throw new taskNotFoundException();
    }

    if (user_id !== task.user_id) {
      throw new taskWithoutPermissionException({
        actionName: 'deletar',
      });
    }

    await this.taskRepository.delete(task_id);
  }
}
