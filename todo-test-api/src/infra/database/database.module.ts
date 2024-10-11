import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserRepository } from 'src/modules/user/repositories/userRepository';
import { PrismaUserRepository } from './prisma/repositories/prismaUserRepository';
import { TaskRepository } from 'src/modules/task/repositories/taskRepository';
import { PrismaTaskRepository } from './prisma/repositories/prismaTaskRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: TaskRepository,
      useClass: PrismaTaskRepository,
    },
  ],
  exports: [UserRepository, TaskRepository],
})
export class DatabaseModule {}
