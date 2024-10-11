import { HttpStatus } from '@nestjs/common';
import { AppException } from '../../../exception/appException';

export class userNotFoundException extends AppException {
  constructor() {
    super({
      message: 'usuário não encontrado',
      status: HttpStatus.NOT_FOUND,
    });
  }
}
