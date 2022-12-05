import { Test, TestingModule } from '@nestjs/testing';
import { PotionsController } from './potions.controller';
import { PotionsService } from './potions.service';

describe('PotionsController', () => {
  let controller: PotionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PotionsController],
      providers: [PotionsService],
    }).compile();

    controller = module.get<PotionsController>(PotionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
