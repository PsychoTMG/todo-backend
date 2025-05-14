import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class TelegramPushService {
    constructor(private readonly configService: ConfigService) { }

    async sendMessage(text: string) {
        const botToken = this.configService.getOrThrow<string>('TELEGRAM_BOT_TOKEN')
        const chatId = this.configService.getOrThrow<string>('TELEGRAM_CHAT_ID')
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        try {
            await axios.post(url, {
                chat_id: chatId,
                text,
            });
        } catch (err) {
            console.error('❌ Не смог отправить сообщение в Telegram', err.message);
        }
    }
    async sendMessageUsers(text: string) {
        const botToken = this.configService.getOrThrow<string>('TELEGRAM_BOT_TOKEN')
        const chatId = this.configService.getOrThrow<string>('TELEGRAM_CHAT_ID')
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        try {
            await axios.post(url, {
                chat_id: chatId,
                text,
            });
        } catch (err) {
            console.error('❌ Не смог отправить сообщение в Telegram', err.message);
        }
    }
}