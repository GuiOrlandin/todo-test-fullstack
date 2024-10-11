import { IsString, IsNotEmpty } from 'class-validator';

export class EditTaskBody {
  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsString()
  task_id: string;
}
