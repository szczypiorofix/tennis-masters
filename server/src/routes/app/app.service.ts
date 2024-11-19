import { Injectable } from '@nestjs/common';

import { TestData } from '../../models';

@Injectable()
export class AppService {
    getHello(): string {
        const testData: TestData = {
            name: "Tennis Masters",
            path: "/",
            version: "0.0.1"
        };
        return JSON.stringify(testData);
    }
}
