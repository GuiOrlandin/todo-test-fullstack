import { Injectable } from '@nestjs/common';
import { TaskRepository } from '../repositories/taskRepository';

interface FindAllTaskOfUserRequest {
  user_id: string;
}

@Injectable()
export class FindAllTasksOfUserUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute({ user_id }: FindAllTaskOfUserRequest) {
    const allPosts = await this.taskRepository.findAllTasksOfUser(user_id);

    return allPosts;
  }
}
