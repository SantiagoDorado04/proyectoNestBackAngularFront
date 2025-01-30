import { Injectable } from '@nestjs/common';
import { WebClient } from '@slack/web-api';
import { ConfigService } from '@nestjs/config';
import { CHANNEL_ID, SLACK_TOKEN } from '../config/constants';

@Injectable()
export class SlackService {
  private webClient: WebClient;

  constructor(private configService: ConfigService) {
    const token = this.configService.get<string>(SLACK_TOKEN);
    this.webClient = new WebClient(token);
  }

  async sendMessage(message: string): Promise<void> {
    try {
      const result = await this.webClient.chat.postMessage({
        text: message,
        channel: this.configService.get<string>(CHANNEL_ID, ''),
      });
      console.log('Mensaje enviado:', result);
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  }
}
