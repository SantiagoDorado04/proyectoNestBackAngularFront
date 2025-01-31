import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class EstablecimientoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255 })
  nombre: string;

  @Column({ type: "varchar", length: 255 })
  direccion: string;

  @Column({ type: "varchar", length: 255 })
  horario: string;
}
