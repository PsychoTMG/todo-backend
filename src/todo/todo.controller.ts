import { Controller, Get, Param } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('')
export class TodoController {
  constructor(private readonly todo: TodoService) { }
  @Get('inbox')
  async hi() {
    return await this.todo.getAll()
  }
  @Get(':id')
  async getTodo(@Param('id') id: number) {
    return await this.todo.getTodo(id)
  }
}
