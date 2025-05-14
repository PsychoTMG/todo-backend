import { IsEmail } from "class-validator"

export class LoginDto {
    @IsEmail({}, { message: 'Введите корректную почту.' })
    email: string
    password: string
}