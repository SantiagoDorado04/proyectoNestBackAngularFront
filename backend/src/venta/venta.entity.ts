import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { VentaDetalleEntity } from '../venta-detalle/venta-detalle.entity';

@Entity({ name: 'ventas' })
export class VentaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date', nullable: false })
  fecha: string;

  @OneToMany(() => VentaDetalleEntity, (ventaDetalle) => ventaDetalle.venta)
  detalles: VentaDetalleEntity[];

  // Método para calcular el total de la venta sumando el valor de los detalles
  calcularTotal(): number {
    return this.detalles.reduce((total, detalle) => total + (detalle.cantidad * detalle.valorUnitario), 0);
  }
}
