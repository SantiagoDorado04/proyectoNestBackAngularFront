import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'productos'})
export class ProductoEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 10, nullable: false, unique:true})
    nombre: string;
    @Column({type: 'varchar', nullable: false})
    precio: number;
}