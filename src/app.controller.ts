import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Post('emit')
  // emitEvent() {
  //   this.appService.emitEvent({ message: 'Hello, Subscriber!' });
  //   return { status: 'Event emitted' };
  // }

}
