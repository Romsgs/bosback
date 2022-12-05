import { PartialType } from '@nestjs/mapped-types';
import { CreatePocoeDto } from './create-pocoe.dto';

export class UpdatePocoeDto extends PartialType(CreatePocoeDto) {}
