import { Controller, Get } from '@nestjs/common';

@Controller('todo')
export class TodoController {
    @Get()
    index(): string {
      return "This action will return todos";
    }
}
