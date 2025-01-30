import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductoEntity } from './producto.entity';
import { ProductoRepository } from './producto.repository';
import { ProductoDto } from './dto/producto.dto';
import { MessageDto } from 'src/common/message.dto';
import { Not } from 'typeorm';

@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(ProductoEntity) private productoRepository: ProductoRepository
    ) { }

    async getAll(): Promise<ProductoEntity[]> {
        const list = await this.productoRepository.find()
        if (!list.length) {
            throw new NotFoundException(new MessageDto (`la lista esta vacia`))
        }

        return list;
    }

    async findById(id: number): Promise<ProductoEntity> {
        const producto = await this.productoRepository.findOne({
            where: { id },
        });
        if (!producto) {
            throw new NotFoundException(new MessageDto (`producto no encontrado`))
        }

        return producto;
    }

    async findByName(nombre: string): Promise<ProductoEntity | null> {
        const producto = await this.productoRepository.findOne({
            where: { nombre },
        });

        return producto ? producto : null;
    }

    async create(dto: ProductoDto): Promise<any> {
        if (!dto.nombre) throw new BadRequestException(new MessageDto (`el nombre es obligatorio`));

        const producto = this.productoRepository.create(dto);
        const exists = await this.findByName(dto.nombre);

        if (exists) throw new BadRequestException(new MessageDto (`ese nombre ya existe`));

        await this.productoRepository.save(producto);
        return new MessageDto (`Producto ${producto.nombre} creado correctamente` );
    }


    async update(id: number, dto: ProductoDto): Promise<any> {
        if (!dto.nombre) throw new BadRequestException(new MessageDto (`el nombre es obligatorio`));

        const producto = await this.findById(id);
        const exists = await this.productoRepository.findOne({
            where: {
                nombre: dto.nombre,
                id: Not(id)
            }
        });

        if (exists) throw new BadRequestException(new MessageDto (`ese nombre ya existe`));

        if (!producto) throw new BadRequestException(new MessageDto (`producto inexistente`));

        if (dto.nombre) producto.nombre = dto.nombre;

        if (dto.precio) producto.precio = dto.precio;

        await this.productoRepository.save(producto);
        return new MessageDto (`producto ${producto.nombre} actualizado correctamente`);
    }

    async delete(id: number): Promise<any> {
        const producto = await this.findById(id);
        await this.productoRepository.delete(producto);
        return new MessageDto (`producto ${producto.nombre} eliminado correctamente`);
    }
}
