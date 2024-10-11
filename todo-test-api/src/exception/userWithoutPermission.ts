import { HttpStatus } from '@nestjs/common';
import { AppException } from './appException';

interface UserWithoutPermissionExceptionProps {
  actionName: string;
}

export class UserWithoutPermissionException extends AppException {
  constructor({ actionName }: UserWithoutPermissionExceptionProps) {
    super({
      message: `Sem permissão para ${actionName} a task`,
      status: HttpStatus.UNAUTHORIZED,
    });
  }
}
