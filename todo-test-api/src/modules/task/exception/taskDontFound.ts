import { HttpStatus } from '@nestjs/common';
import { AppException } from '../../../exception/appException';

export class taskNotFoundException extends AppException {
  constructor() {
    super({
      message: 'task não encontrada',
      status: HttpStatus.NOT_FOUND,
    });
  }
}
