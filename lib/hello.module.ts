import { Module } from '@nestjs/common';
import { HelloService } from './services';

@Module({
  imports: [],
  controllers: [],
  providers: [HelloService],
  exports: [HelloService],
})
export class HelloModule {}
