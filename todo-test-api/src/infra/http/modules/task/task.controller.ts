import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Request,
} from '@nestjs/common';
import { Public } from '../auth/decorators/isPublic';
import { CreateTaskBody } from './dtos/createTaskBody';
import { CreateTaskUseCase } from 'src/modules/task/useCases/createTaskUseCase';
import { AuthRequestModel } from '../auth/models/authRequestModel';
import { TaskViewModel } from './viewModel/taskViewModel';
import { EditTaskUseCase } from 'src/modules/task/useCases/editTaskUseCase';
import { EditTaskBody } from './dtos/editTaskBody';
import { DeleteTaskBody } from './dtos/deleteTaskBody';
import { DeleteTaskUseCase } from 'src/modules/task/useCases/deleteTaskUseCase';
import { FindAllTasksOfUserUseCase } from 'src/modules/task/useCases/findAllTasksOfUser';

@Controller('task')
export class TaskController {
  constructor(
    private createTaskUseCase: CreateTaskUseCase,
    private editTaskUseCase: EditTaskUseCase,
    private deleteTaskUseCase: DeleteTaskUseCase,
    private findAllTasksOfUserUseCase: FindAllTasksOfUserUseCase,
  ) {}

  @Post()
  async createTask(
    @Body() body: CreateTaskBody,
    @Request() request: AuthRequestModel,
  ) {
    const { content } = body;

    const task = await this.createTaskUseCase.execute({
      content,
      user_id: request.user.id,
    });

    return TaskViewModel.toHttp(task);
  }

  @Put()
  async editTask(
    @Body() body: EditTaskBody,
    @Request() request: AuthRequestModel,
  ) {
    const { content, task_id, completed } = body;

    const task = await this.editTaskUseCase.execute({
      content,
      task_id,
      completed,
      user_id: request.user.id,
    });

    return TaskViewModel.toHttp(task);
  }

  @Delete()
  async deleteTask(
    @Body() body: DeleteTaskBody,
    @Request() request: AuthRequestModel,
  ) {
    const { task_id } = body;

    await this.deleteTaskUseCase.execute({
      task_id,
      user_id: request.user.id,
    });
  }

  @Get()
  async findAllTasksOfUser(@Request() request: AuthRequestModel) {
    const task = await this.findAllTasksOfUserUseCase.execute({
      user_id: request.user.id,
    });

    return TaskViewModel.toHttpArray(task);
  }
}
