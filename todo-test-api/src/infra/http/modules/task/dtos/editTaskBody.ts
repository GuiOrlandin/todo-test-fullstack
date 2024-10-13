import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class EditTaskBody {
  @IsString()
  @IsOptional()
  content: string;

  @IsBoolean()
  @IsOptional()
  completed: boolean;

  @IsNotEmpty()
  @IsString()
  task_id: string;
}
