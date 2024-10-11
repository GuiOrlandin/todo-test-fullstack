import { HttpStatus } from '@nestjs/common';
import { AppException } from '../../../exception/appException';

interface taskWithoutPermissionExceptionProps {
  actionName: string;
}

export class taskWithoutPermissionException extends AppException {
  constructor({ actionName }: taskWithoutPermissionExceptionProps) {
    super({
      message: `Sem permissão para ${actionName} a task`,
      status: HttpStatus.UNAUTHORIZED,
    });
  }
}
