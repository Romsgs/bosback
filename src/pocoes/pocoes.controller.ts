import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PocoesService } from './pocoes.service';
import { CreatePocoeDto } from './dto/create-pocoe.dto';
import { UpdatePocoeDto } from './dto/update-pocoe.dto';

@Controller('pocoes')
export class PocoesController {
  constructor(private readonly pocoesService: PocoesService) {}

  @Post()
  create(@Body() createPocoeDto: CreatePocoeDto) {
    return this.pocoesService.create(createPocoeDto);
  }

  @Get()
  findAll() {
    return this.pocoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pocoesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePocoeDto: UpdatePocoeDto) {
    return this.pocoesService.update(+id, updatePocoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pocoesService.remove(+id);
  }
}
