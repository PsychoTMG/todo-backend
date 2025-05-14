import { IsEmail, IsOptional, IsString, Length, Matches } from 'class-validator'

export class RegisterDto {
    @IsString({ message: 'Никнейм должен быть строкой. ' })
    @Length(2, 15, { message: 'Никнейм должен содержать от 5 до 15 символов. ' })
    @IsOptional()
    username?: string
    @IsString({ message: 'Никнейм должен быть строкой. ' })
    @IsEmail({}, { message: 'Введите корректную почту. ' })
    email: string
    @Matches(/^(?=.*[A-Z])(?=.*\d).{8,}$/, { message: 'Пароль должен содержать минимум 8 символов, одну заглавную букву и одну цифру. ' })
    password: string

}






