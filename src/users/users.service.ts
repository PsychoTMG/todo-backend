import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
// import * as bcrypt from 'bcrypt'
// import { CreateUserDto } from './dto/create-user.dto';
// import { GetUserDto } from './dto/get_user.dto';
import { TelegramPushService } from 'src/telegram-push/telegram-push.service';

@Injectable()
export class UsersService {
    constructor
        (private readonly prisma: PrismaService,
            private readonly telegramPushService: TelegramPushService
        ) { }

    // createUser = async ({ email, password }: CreateUserDto) => {
    //     const user = await this.prisma.user.findUnique({
    //         where: {
    //             email
    //         }
    //     })
    //     if (user) {
    //         throw new UnauthorizedException('Пользователь с таким именем существует');
    //     }
    //     const hashPassword = await bcrypt.hash(password, 10)
    //     return await this.prisma.user.create({
    //         data: {
    //             email: email,
    //             password: hashPassword,
    //         }
    //     })
    // }
    // findOne = async ({ email }: GetUserDto) => {
    //     return await this.prisma.user.findUnique({
    //         where: {
    //             email
    //         }
    //     })
    // }
    // findAll = async (text: string) => {
    //     const users = this.prisma.user.findMany()
    //     return await this.telegramPushService.sendMessageUsers(`Количество пользователей: ${(await users).length}`)
    // }


}
