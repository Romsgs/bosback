import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RitualsService } from './rituals.service';
import { CreateRitualDto } from './dto/create-ritual.dto';
import { UpdateRitualDto } from './dto/update-ritual.dto';

@Controller('rituals')
export class RitualsController {
  constructor(private readonly ritualsService: RitualsService) {}

  @Post()
  create(@Body() createRitualDto: CreateRitualDto) {
    return this.ritualsService.create(createRitualDto);
  }

  @Get()
  findAll() {
    return this.ritualsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ritualsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRitualDto: UpdateRitualDto) {
    return this.ritualsService.update(+id, updateRitualDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ritualsService.remove(+id);
  }
}
