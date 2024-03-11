import fs from 'fs';
import * as path from 'path';
import os from 'os';

import { ERROR_LEVEL } from '../../shared/error-level.enum';

class LoggerService {
    public static readonly LoggerFileName: string = path.join(
        __dirname,
        '../',
        'server.log'
    );

    public static info(message: string, printToConsole: boolean = true) {
        const formattedErrorMessage: string = LoggerService.parseErrorText(
            ERROR_LEVEL.INFO,
            message
        );
        if (printToConsole) {
            console.log(formattedErrorMessage);
        }
        LoggerService.saveToFile(formattedErrorMessage);
    }

    public static warn(message: string, printToConsole: boolean = true) {
        const formattedErrorMessage: string = LoggerService.parseErrorText(
            ERROR_LEVEL.WARM,
            message
        );
        if (printToConsole) {
            console.log(formattedErrorMessage);
        }
        LoggerService.saveToFile(formattedErrorMessage);
    }

    public static error(message: string, printToConsole: boolean = true) {
        const formattedErrorMessage: string = LoggerService.parseErrorText(
            ERROR_LEVEL.ERROR,
            message
        );
        if (printToConsole) {
            console.log(formattedErrorMessage);
        }
        LoggerService.saveToFile(formattedErrorMessage);
    }

    public static critical(message: string, printToConsole: boolean = true) {
        const formattedErrorMessage: string = LoggerService.parseErrorText(
            ERROR_LEVEL.CRITICAL,
            message
        );
        if (printToConsole) {
            console.log(formattedErrorMessage);
        }
        LoggerService.saveToFile(formattedErrorMessage);
    }

    private static parseErrorText(level: ERROR_LEVEL, message: string): string {
        const date: Date = new Date();
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()} [${level.toString()}]: ${message}`;
    }

    private static saveToFile(message: string) {
        fs.writeFile(
            LoggerService.LoggerFileName,
            `${message}${os.EOL}`,
            {
                flag: 'a',
                encoding: 'utf8',
            },
            (err) => {
                if (err) {
                    console.error(err.message);
                    console.error(
                        `Cannot save log file ${LoggerService.LoggerFileName} !`
                    );
                }
            }
        );
    }
}

export default LoggerService;
