import { PartialType } from '@nestjs/mapped-types';
import { CreatePotionDto } from './create-potion.dto';

export class UpdatePotionDto extends PartialType(CreatePotionDto) {}
