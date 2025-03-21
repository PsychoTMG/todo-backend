
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config';



async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const config = app.get(ConfigService);

	const allowedOrigin = config.getOrThrow<string>('ALLOWED_ORIGIN');
	console.log('ALLOWED_ORIGIN:', allowedOrigin); // Логируем значение переменной

	app.enableCors({
		origin: allowedOrigin,
		credentials: true,
	});

	console.log(`App is running on port ${config.getOrThrow<number>('APPLICATION_PORT')}`);

	await app.listen(config.getOrThrow<number>('APPLICATION_PORT'))
}
bootstrap()
