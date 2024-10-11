import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserUseCase } from 'src/modules/user/useCases/createUserUseCase';
import { CreateUserBody } from './dtos/createUserBody';
import { UserViewModel } from './viewModel/viewModel';
import { Public } from '../auth/decorators/isPublic';

@Controller('user')
export class UserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  @Post()
  @Public()
  async createUser(@Body() body: CreateUserBody) {
    const { email, password_hash } = body;

    const user = await this.createUserUseCase.execute({
      email,
      password_hash,
    });

    return UserViewModel.toHttp(user);
  }
}
