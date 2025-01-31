import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { VentaEntity } from '../venta/venta.entity';
import { ProductoEntity } from 'src/producto/producto.entity';

@Entity({ name: 'venta_detalle' })
export class VentaDetalleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => VentaEntity, (venta) => venta.detalles)
  venta: VentaEntity;

  @ManyToOne(() => ProductoEntity)
  producto: ProductoEntity;

  @Column({ type: 'int', nullable: false })
  cantidad: number;

  @Column({ type: 'decimal', nullable: false })
  valorUnitario: number;
}
