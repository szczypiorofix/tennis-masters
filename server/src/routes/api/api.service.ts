import { Injectable } from '@nestjs/common';

import { TestData } from '../../models';

@Injectable()
export class ApiService {
    public getWelcome() {
        const testData: TestData = {
            name: "Tennis Masters",
            path: "/api/",
            version: "0.0.1"
        };
        return JSON.stringify(testData);
    }
    public getAllData() {
        const testData: TestData = {
            name: "Tennis Masters",
            path: "/api/all",
            version: "0.0.1"
        };
        return JSON.stringify(testData);
    }
}
