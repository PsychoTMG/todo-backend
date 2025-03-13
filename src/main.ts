import { NestFactory } from '@nestjs/core';
import { TodoModule } from './todo.module';

async function bootstrap() {
  const app = await NestFactory.create(TodoModule);
  app.enableCors({
    origin: ['http://localhost:3001', 'http://localhost:3000',' http://192.168.0.107:3000']
  });
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
