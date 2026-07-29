import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return index page data', () => {
      expect(appController.index()).toEqual(
        expect.objectContaining({
          isHome: true,
          showHomeHero: true,
          title: 'Riverside Royale Kargil | Riverside Hotel in Ladakh',
        }),
      );
    });
  });
});
