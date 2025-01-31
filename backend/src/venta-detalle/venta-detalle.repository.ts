import { EntityRepository, Repository } from 'typeorm';
import { VentaDetalleEntity } from './venta-detalle.entity';

@EntityRepository(VentaDetalleEntity)
export class VentaDetalleRepository extends Repository<VentaDetalleEntity> {}
