import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { TaskRepository } from 'src/modules/task/repositories/taskRepository';
import { PrismaTaskMapper } from '../mapper/prismaTaskMapper';
import { Task } from 'src/modules/task/entities/task';

@Injectable()
export class PrismaTaskRepository implements TaskRepository {
  constructor(private prisma: PrismaService) {}

  async findAllTasksOfUser(user_id: string): Promise<Task[] | []> {
    const tasksOfUser = await this.prisma.task.findMany({
      where: {
        user_id,
      },
    });

    const tasks: Task[] = tasksOfUser.map((task) =>
      PrismaTaskMapper.toDomain(task),
    );

    return tasks;
  }

  async save(task: Task): Promise<void> {
    const rawTask = PrismaTaskMapper.toPrisma(task);

    await this.prisma.task.update({
      where: {
        id: rawTask.id,
      },
      data: rawTask,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.task.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: string): Promise<Task | null> {
    const task = await this.prisma.task.findFirst({
      where: {
        id,
      },
    });

    if (!task) {
      return null;
    }

    return PrismaTaskMapper.toDomain(task);
  }

  async create(task: Task): Promise<void> {
    const taskRaw = PrismaTaskMapper.toPrisma(task);

    await this.prisma.task.create({
      data: taskRaw,
    });
  }
}
