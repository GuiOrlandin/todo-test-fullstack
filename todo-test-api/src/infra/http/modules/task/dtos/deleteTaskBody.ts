import { IsString, IsNotEmpty } from 'class-validator';

export class DeleteTaskBody {
  @IsNotEmpty()
  @IsString()
  task_id: string;
}
