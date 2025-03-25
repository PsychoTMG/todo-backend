import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('')
export class TodoController {
  constructor(private readonly todo: TodoService) { }
  @Get('hi')
  async hi() {
    return 'Привет лысый'
  }
}
