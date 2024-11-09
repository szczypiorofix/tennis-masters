import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
    constructor(private readonly apiService: ApiService) {}
    
    @Get()
    getWelcome(@Req() request: Request): string {
        return this.apiService.getWelcome();
    }

    @Get('/all')
    getAllData(@Req() request: Request): string {
        return this.apiService.getAllData();
    }
}
