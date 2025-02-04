import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USER, DB_PORT} from './config/constants';
import { ProductoModule } from './producto/producto.module';
import { ProductoEntity } from './producto/producto.entity';
import { SlackModule } from './slack/slack.module';
import { EstablecimientoEntity } from './establecimiento/establecimiento.entity';
import { UsersModule } from './users/users.module';
import { DataSourceConfig } from './data-source';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal:true
    }),
    TypeOrmModule.forRootAsync({
      ...DataSourceConfig,
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const dbPort = configService.get<number>(DB_PORT);

        if (!dbPort) {
          throw new Error('El puerto de la base de datos no se encuentra o no esta definido');
        }

        return {
          type: 'postgres',
          host: configService.get<string>(DB_HOST),
          port: dbPort, 
          username: configService.get<string>(DB_USER),
          password: configService.get<string>(DB_PASSWORD),
          database: configService.get<string>(DB_DATABASE),
          entities: [ProductoEntity, EstablecimientoEntity],
          migrations: ['dist/migrations/*.js'], // Asegúrate que coincida con la carpeta de compilación
          synchronize: false,
          logging: false};
      },
      inject: [ConfigService],
    }),
    ProductoModule,
    SlackModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
