import express, {Express} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';

import {
    errorLogger,
    errorResponder,
    headerMiddleware,
    invalidPathHandler,
    loggerMiddleware,
    requiredContentTypeHandler
} from './middleware';

import rootRouter from './routes/root.controller';
import MongoDBService from './services/mongodb.service';
import LoggerService from "./services/logger.service";

dotenv.config({ path: __dirname+'/.env' });

const app: Express = express();
const PORT: string | number = process.env.PORT || 8080;

// Middleware
app.use(loggerMiddleware);
app.use(headerMiddleware);
app.use(requiredContentTypeHandler);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/", rootRouter);

// Error handlers
app.use(errorLogger);
app.use(errorResponder);
app.use(invalidPathHandler)


app.listen(PORT, (): void => {
    LoggerService.info(`Server running at http://localhost:${PORT}`);
    const mongoService: MongoDBService = new MongoDBService();
    mongoService.connect()
        .then(() => {
            LoggerService.info('MongoDB connected');
        })
        .catch(err => {
            LoggerService.info('MongoDB connection error: ' + err.toString());
        });
});
