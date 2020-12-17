import { Test, TestingModule } from '@nestjs/testing';
import { SpyController } from './spy.controller';

describe('SpyController', () => {
  let controller: SpyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpyController],
    }).compile();

    controller = module.get<SpyController>(SpyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
