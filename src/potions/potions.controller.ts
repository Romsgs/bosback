import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PotionsService } from './potions.service';
import { CreatePotionDto } from './dto/create-potion.dto';
import { UpdatePotionDto } from './dto/update-potion.dto';

@Controller('potions')
export class PotionsController {
  constructor(private readonly potionsService: PotionsService) {}

  @Post()
  async create(@Body() createPotionDto: CreatePotionDto) {
    return this.potionsService.create(createPotionDto);
  }

  @Get()
  findAll() {
    return this.potionsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.potionsService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePotionDto: UpdatePotionDto) {
    return this.potionsService.update(+id, updatePotionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.potionsService.remove(+id);
  }
}
