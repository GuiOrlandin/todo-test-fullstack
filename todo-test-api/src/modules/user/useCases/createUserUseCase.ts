import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/userRepository';
import { User } from '../entities/User';
import { hash } from 'bcrypt';

interface CreatedUserRequest {
  email: string;
  password_hash?: string | null;
}

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, password_hash }: CreatedUserRequest) {
    const user = new User({
      email,
      password_hash: await hash(password_hash, 10),
    });

    await this.userRepository.create(user);

    return user;
  }
}
