import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
    constructor(private readonly prisma: PrismaService) { }
    async getAll() {
        return await this.prisma.todo.findMany()
    }
}


