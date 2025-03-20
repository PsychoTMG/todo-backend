import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from './todo/todo.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
    imports: [ConfigModule.forRoot({}),
        TodoModule,
        PrismaModule,
    ]

})
export class AppModule { }