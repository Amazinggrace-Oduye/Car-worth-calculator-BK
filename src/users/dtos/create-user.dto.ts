import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  @IsEmail()
  email: string;
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsNotEmpty()
  password: string;
}
