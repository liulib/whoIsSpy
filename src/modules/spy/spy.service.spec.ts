import { Test, TestingModule } from '@nestjs/testing';
import { SpyService } from './spy.service';

describe('SpyService', () => {
  let service: SpyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpyService],
    }).compile();

    service = module.get<SpyService>(SpyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
