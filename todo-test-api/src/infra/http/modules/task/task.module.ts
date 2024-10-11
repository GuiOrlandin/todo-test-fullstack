import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { TaskController } from './task.controller';
import { FindAllTasksOfUserUseCase } from 'src/modules/task/useCases/findAllTasksOfUser';
import { CreateTaskUseCase } from 'src/modules/task/useCases/createTaskUseCase';
import { EditTaskUseCase } from 'src/modules/task/useCases/editTaskUseCase';
import { DeleteTaskUseCase } from 'src/modules/task/useCases/deleteTaskUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [TaskController],
  providers: [
    CreateTaskUseCase,
    EditTaskUseCase,
    DeleteTaskUseCase,
    FindAllTasksOfUserUseCase,
  ],
})
export class TaskModule {}
