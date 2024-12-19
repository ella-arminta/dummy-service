import { Inject, Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';


@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }
}
