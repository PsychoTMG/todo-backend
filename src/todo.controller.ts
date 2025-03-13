
import { Body, Controller, Delete, Get, Param, Post, Patch, Query } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) { }
  @Get('inbox')
  async getAll() {
    return await this.todoService.getAll();
  }
  @Post('addTodo')
  async addTodo(@Body() todoData: { title: string; desc: string; date: string }) {
    return await this.todoService.addFile(todoData);
  }
  @Get('inbox/:id')
  async getTodoId(@Param('id') id: number) {
    return await this.todoService.returnTodo(+id)
  }
  @Delete('delete/:id')
  async deleteTodo(@Param('id') id: number) {
    return await this.todoService.removeTodo(+id)
  }
  @Patch('update/:id')
  async updateTodo(@Param('id') id: number, @Body() { title, desc }: { title: string, desc: string }) {
    return await this.todoService.updateTodo(+id, title, desc)
  }
  @Patch('completed/:id')
  async updateCompleted(@Param('id') id: number, @Body() { completed }: { completed: boolean }) {
    return await this.todoService.completedTodo(+id, completed);  // Передаем в сервис
  }
  @Get('search')
  async searchTodo(@Query('query') query: string) {
    return await this.todoService.searchingTodo(query);
  }
}




