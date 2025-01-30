import { Module } from '@nestjs/common';
import { SlackService } from './slack.service';
import { ConfigModule } from '@nestjs/config';
import { SlackController } from './slack.controller';

@Module({
  imports: [ConfigModule],
  providers: [SlackService],
  exports: [SlackService],
  controllers: [SlackController],
})
export class SlackModule {}
