import { Test, TestingModule } from '@nestjs/testing';
import { RitualsService } from './rituals.service';

describe('RitualsService', () => {
  let service: RitualsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RitualsService],
    }).compile();

    service = module.get<RitualsService>(RitualsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
