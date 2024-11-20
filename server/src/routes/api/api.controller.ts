import { Controller, Get } from '@nestjs/common';

import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get()
  getWelcome(): string {
    return this.apiService.getWelcome();
  }

  @Get('/all')
  getAllData(): string {
    return this.apiService.getAllData();
  }
}
