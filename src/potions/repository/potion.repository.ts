import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreatePotionDto } from '../dto/create-potion.dto';
import { ICreatePotion } from '../entities/potion.entity';

@Injectable()
export class PotionRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}
  async create(body: ICreatePotion) {
    const newPotion = await this.prisma.potion.create({
      data: {
        authorId: body.authorId,
        instructions: body.instructions,
        title: body.title,
        vial: body.vial,
        ingredients: body.ingredients,
        slug: body.slug,
      },
    });
    return newPotion;
  }
  async findById(id: string) {
    console.log(id);

    const potion = await this.prisma.potion.findFirst({ where: { id } });
    console.log(potion);

    return potion;
  }
}
