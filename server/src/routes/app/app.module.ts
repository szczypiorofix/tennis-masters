import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { HeaderMiddleware } from '../../middlewares/header.middleware';
import { LoggerMiddleware} from '../../middlewares/loger.middleware';
import { AppController } from './app.controller';
import { ApiModule } from '../api/api.module';

@Module({
    imports: [ApiModule],
    controllers: [AppController],
    providers: [],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(
                LoggerMiddleware,
                HeaderMiddleware
            )
            .forRoutes('/');
    }
}
