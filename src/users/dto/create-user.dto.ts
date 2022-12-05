import { IsEmail, IsAlphanumeric, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;
  @IsAlphanumeric()
  name: string;
  @IsString()
  password: string;
}
