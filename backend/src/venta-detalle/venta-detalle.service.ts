import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VentaDetalleEntity } from './venta-detalle.entity';
import { VentaDetalleRepository } from 'src/venta-detalle/venta-detalle.repository';
import { VentaDetalleDto } from './dto/venta-detalle.dto';

@Injectable()
export class VentaDetalleService {
  constructor(
    @InjectRepository(VentaDetalleEntity)
    private ventaDetalleRepository: VentaDetalleRepository
  ) {}

  async create(dto: VentaDetalleDto): Promise<VentaDetalleEntity> {
    const detalle = this.ventaDetalleRepository.create(dto);
    return this.ventaDetalleRepository.save(detalle);
  }
}
