import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/user/entities/User';
import { UserRepository } from 'src/modules/user/repositories/userRepository';
import { EmailAlreadyInUseException } from 'src/modules/user/exceptions/emailAlreadyInUse';
import { PrismaService } from '../prisma.service';
import { PrismaUserMapper } from '../mapper/prismaUserMapper';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string): Promise<Partial<User> | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      return null;
    }

    return PrismaUserMapper.toDomain(user);
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!user) {
      return null;
    }

    return PrismaUserMapper.toDomain(user);
  }

  async create(user: User): Promise<void> {
    const existingUser = await this.prisma.user.findFirst({
      where: {
        email: user.email,
      },
    });

    if (existingUser) {
      throw new EmailAlreadyInUseException();
    }

    const userRaw = PrismaUserMapper.toPrisma(user);

    await this.prisma.user.create({
      data: userRaw,
    });
  }
}
