import { Module } from '@nestjs/common';
import { VentaDetalleService } from './venta-detalle.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentaDetalleEntity } from './venta-detalle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VentaDetalleEntity])],
  providers: [VentaDetalleService],
  exports: [VentaDetalleService]
})
export class VentaDetalleModule {}
