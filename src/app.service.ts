import { Injectable } from '@nestjs/common';

// Permite la injección del servicio en otros controllers
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
