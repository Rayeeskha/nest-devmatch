import { IsString, IsNotEmpty, MinLength } from 'class-validator';
export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;
  @IsString()
  description: string;
}
