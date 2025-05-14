import { Module } from '@nestjs/common';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

import { ConfigModule } from '@nestjs/config'
import { TelegramPushModule } from './telegram-push/telegram-push.module';

@Module({
  controllers: [TodoController],
  providers: [TodoService, PrismaService,],
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, UsersModule, TelegramPushModule]
})
export class AppModule { }
