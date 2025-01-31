import { Module } from '@nestjs/common';
import { VentaService } from './venta.service';
import { VentaController } from './venta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentaEntity } from './venta.entity';
import { VentaDetalleModule } from 'src/venta-detalle/venta-detalle.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([VentaEntity]),
    VentaDetalleModule
  ],
  providers: [VentaService],
  controllers: [VentaController],
})
export class VentaModule {}
