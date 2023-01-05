import { Module } from '@nestjs/common';
import { PotionsService } from './potions.service';
import { PotionsController } from './potions.controller';
import { PotionRepository } from './repository/potion.repository';

@Module({
  controllers: [PotionsController],
  providers: [PotionsService, PotionRepository],
})
export class PotionsModule {}
