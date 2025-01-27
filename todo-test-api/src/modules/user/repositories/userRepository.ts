import { User } from '../entities/User';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract findByEmail(email: string): Promise<Partial<User> | null>;
  abstract findById(id: string): Promise<User | null>;
}
