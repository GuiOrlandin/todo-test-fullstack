import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTaskBody {
  @IsNotEmpty()
  @IsString()
  content: string;
}
