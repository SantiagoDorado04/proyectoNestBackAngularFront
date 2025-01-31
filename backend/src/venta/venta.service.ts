import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VentaEntity } from './venta.entity';
import { VentaRepository } from './venta.repository';
import { VentaDto } from './dto/venta.dto';
import { VentaDetalleService } from 'src/venta-detalle/venta-detalle.service';

@Injectable()
export class VentaService {
  constructor(
    @InjectRepository(VentaEntity) private ventaRepository: VentaRepository,
    private readonly ventaDetalleService: VentaDetalleService
  ) {}

  async getAll(page: number = 1, limit: number = 10): Promise<any> {
    const [ventas, total] = await this.ventaRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      ventas: ventas || [],
      total,
      page,
      lastPage: Math.ceil(total / limit) || 1,
    };
  }

  async findById(id: number): Promise<VentaEntity> {
    const venta = await this.ventaRepository.findOne({
      where: { id },
      relations: ['detalles'],
    });

    if (!venta) {
      throw new NotFoundException('Venta no encontrada');
    }

    return venta;
  }

  async create(dto: VentaDto): Promise<any> {
    const venta = this.ventaRepository.create(dto);

    // Calcular el total de la venta y agregarlo a la entidad
    const totalVenta = venta.calcularTotal();
    
    await this.ventaRepository.save(venta);

    return { message: `Venta creada correctamente con total: $${totalVenta}` };
  }
}
