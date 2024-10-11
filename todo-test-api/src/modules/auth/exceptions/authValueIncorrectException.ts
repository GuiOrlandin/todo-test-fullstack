import { HttpStatus } from '@nestjs/common';
import { AppException } from '../../../exception/appException';

export class AuthValueIncorrectException extends AppException {
  constructor() {
    super({
      message: 'Email ou senha incorretos',
      status: HttpStatus.UNAUTHORIZED,
    });
  }
}
