import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe())

  app.enableCors({
    origin: ['http://192.168.0.102:3000',
      'http://192.168.0.11:3000',
      'https://apptodo-frontened-vlyuyg-147721-77-232-137-205.traefik.me',
      'http://localhost:3000'],
    credentials: true,
  })
  
  await app.listen(3002);
}
bootstrap();
