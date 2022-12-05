import { Injectable } from '@nestjs/common';
import { CreatePocoeDto } from './dto/create-pocoe.dto';
import { UpdatePocoeDto } from './dto/update-pocoe.dto';

@Injectable()
export class PocoesService {
  create(createPocoeDto: CreatePocoeDto) {
    return 'This action adds a new pocoe';
  }

  findAll() {
    return `This action returns all pocoes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pocoe`;
  }

  update(id: number, updatePocoeDto: UpdatePocoeDto) {
    return `This action updates a #${id} pocoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} pocoe`;
  }
}
