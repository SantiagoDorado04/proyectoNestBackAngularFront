import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class VentaDetalleDto {
  @IsNotEmpty()
  productoId: number;

  @IsNumber()
  @Min(1)
  cantidad: number;

  @IsNumber()
  @Min(100)
  valorUnitario: number;
}
