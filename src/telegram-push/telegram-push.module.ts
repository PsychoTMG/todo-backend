import { Module } from '@nestjs/common';
import { TelegramPushService } from './telegram-push.service';

@Module({
  providers: [TelegramPushService],
  exports: [TelegramPushService]
})
export class TelegramPushModule { }
