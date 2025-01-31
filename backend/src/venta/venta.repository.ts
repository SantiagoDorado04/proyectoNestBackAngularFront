import { EntityRepository, Repository } from 'typeorm';
import { VentaEntity } from './venta.entity';

@EntityRepository(VentaEntity)
export class VentaRepository extends Repository<VentaEntity> {}
