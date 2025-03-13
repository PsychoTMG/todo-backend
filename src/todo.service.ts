import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';  // Импортируем PrismaService

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) { }

  async getAll() {
    return await this.prisma.todo.findMany();
  }

  async addFile(todoData: { title: string; desc: string }) {
    const newTodo = await this.prisma.todo.create({
      data: {
        title: todoData.title,
        desc: todoData.desc,
        completed: false,
      },
    });
    return newTodo;
  }

  async returnTodo(id: number) {
    return await this.prisma.todo.findUnique({
      where: { id },
    });
  }

  async removeTodo(id: number) {
    const todo = await this.prisma.todo.delete({
      where: { id },
    });
    return todo ? true : false;
  }

  async updateTodo(id: number, title: string, desc: string) {
    return await this.prisma.todo.update({
      where: { id },
      data: { title, desc },
    });
  }

  async completedTodo(id: number, completed: boolean) {
    return await this.prisma.todo.update({
      where: { id },
      data: { completed },  // Убедись, что передаешь булево значение
    });
  }

  async searchingTodo(query: string) {
    return await this.prisma.todo.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { desc: { contains: query, mode: 'insensitive' } }
        ]
      }
    });
  }
}