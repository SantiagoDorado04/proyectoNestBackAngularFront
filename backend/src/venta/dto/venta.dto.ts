import { IsDateString, IsArray, IsNotEmpty } from 'class-validator';
import { VentaDetalleDto } from 'src/venta-detalle/dto/venta-detalle.dto';

export class VentaDto {
  @IsDateString()
  @IsNotEmpty()
  fecha: string;

  @IsArray()
  @IsNotEmpty()
  detalles: VentaDetalleDto[];
}
