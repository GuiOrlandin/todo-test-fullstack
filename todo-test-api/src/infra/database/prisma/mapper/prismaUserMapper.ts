import { User } from 'src/modules/user/entities/User';
import { User as UserRaw } from '@prisma/client';

export class PrismaUserMapper {
  static toPrisma({ email, password_hash, created_at, id }: User): UserRaw {
    return {
      email,
      password_hash,
      created_at,
      id,
    };
  }

  static toDomain({ email, password_hash, created_at, id }: UserRaw): User {
    return new User({
      email,
      password_hash,
      created_at,
      id,
    });
  }
}
