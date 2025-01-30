import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'ventas'})
export class ProductoEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', nullable: false})
    cantidad : string;
    @Column({type: 'varchar', nullable: false})
    valor_unitario: number;
    @Column({type: 'varchar', nullable: false})
    id_producto: number;
}