import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreatePotionDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  instructions: string;

  @IsString()
  @IsNotEmpty()
  vial: string;

  @IsArray()
  @IsNotEmpty()
  ingredients: string;

  @IsString()
  @IsNotEmpty()
  authorId: string;
}
