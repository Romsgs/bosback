import { Injectable } from '@nestjs/common';
import { CreatePotionDto } from './dto/create-potion.dto';
import { UpdatePotionDto } from './dto/update-potion.dto';

@Injectable()
export class PotionsService {
  create(createPotionDto: CreatePotionDto) {
    return 'This action adds a new potion';
  }

  findAll() {
    return `This action returns all potions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} potion`;
  }

  update(id: number, updatePotionDto: UpdatePotionDto) {
    return `This action updates a #${id} potion`;
  }

  remove(id: number) {
    return `This action removes a #${id} potion`;
  }
}
