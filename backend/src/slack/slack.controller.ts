import { Controller, Post, Body } from '@nestjs/common';
import { SlackService } from './slack.service';
import { ApiBody, ApiOperation, ApiResponse} from '@nestjs/swagger';

@Controller('slack')
export class SlackController {
  constructor(private readonly slackService: SlackService) {}

  @Post('send-message')
  @ApiOperation({ summary: 'Enviar un mensaje a Slack' }) 
  @ApiBody({ description: 'Mensaje que será enviado a Slack', type : String })
  @ApiResponse({ status: 200, description: 'Mensaje enviado correctamente' })
  @ApiResponse({ status: 500, description: 'Error al enviar el mensaje' })
  async sendMessage(@Body() body: { message: string }): Promise<string> {
    try {
      await this.slackService.sendMessage(body.message);
      return 'Mensaje enviado correctamente';
    } catch (error) {
      return 'Error al enviar el mensaje';
    }
  }
}
