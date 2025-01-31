import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { VentaService } from './venta.service';
import { VentaDto } from './dto/venta.dto';

@Controller('ventas')
export class VentaController {
  constructor(private readonly ventaService: VentaService) {}

  @Get()
  async getAll() {
    return this.ventaService.getAll();
  }

  @Post()
  async create(@Body() dto: VentaDto) {
    return this.ventaService.create(dto);
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return this.ventaService.findById(id);
  }
}
