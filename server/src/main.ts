import { NestFactory } from '@nestjs/core';
import 'dotenv/config';

import { AppModule } from './routes/app/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
