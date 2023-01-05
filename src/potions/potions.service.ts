import { Inject, Injectable } from '@nestjs/common';
import { CreatePotionDto } from './dto/create-potion.dto';
import { UpdatePotionDto } from './dto/update-potion.dto';
import { PotionRepository } from './repository/potion.repository';
import { ICreatePotion } from './entities/potion.entity';

@Injectable()
export class PotionsService {
  constructor(@Inject(PotionRepository) private repository: PotionRepository) {}
  async create(createPotionDto: CreatePotionDto) {
    const slug = createPotionDto.title + '-' + createPotionDto.vial;
    const body = createPotionDto as ICreatePotion;
    body.slug = slug;
    return await this.repository.create(body);
  }

  findAll() {
    return `This action returns all potions`;
  }

  findById(id: string) {
    return this.repository.findById(id);
  }

  update(id: number, updatePotionDto: UpdatePotionDto) {
    return `This action updates a #${id} potion`;
  }

  remove(id: number) {
    return `This action removes a #${id} potion`;
  }
}
