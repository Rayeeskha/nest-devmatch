import { Controller, Get, Render } from '@nestjs/common';
// import { AppService } from './app.service';

@Controller()
export class AppController {
  @Get()
  @Render('home')
  home() {
    return {
      title: 'NestJS + HBS',
    };
  }
}
