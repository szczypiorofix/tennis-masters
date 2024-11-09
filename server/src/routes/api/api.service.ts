import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
    public getWelcome() {
        return JSON.stringify({
            'data': 'API: main'
        });
    }
    public getAllData() {
        return JSON.stringify({
            'data': 'API: allData'
        });
    }
}
