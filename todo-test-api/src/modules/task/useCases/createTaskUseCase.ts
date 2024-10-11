import { Injectable } from '@nestjs/common';
import { TaskRepository } from '../repositories/taskRepository';
import { Task } from '../entities/task';

interface CreatedTaskRequest {
  content: string;
  user_id: string;
}

@Injectable()
export class CreateTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute({ content, user_id }: CreatedTaskRequest) {
    const task = new Task({
      content,
      completed: false,
      user_id,
    });

    await this.taskRepository.create(task);

    return task;
  }
}
