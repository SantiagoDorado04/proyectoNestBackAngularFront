import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductoEntity } from '../producto/producto.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class ProductosSeeder {
  constructor(
    @InjectRepository(ProductoEntity)
    private readonly productoRepository: Repository<ProductoEntity>,
  ) {}

  async seed(): Promise<any> {
    const nombresProductoSet = new Set<string>();
    const productos: ProductoEntity[] = [];
    for (let i = 0; i < 100; i++) {
      let nombre = faker.commerce.productName();
      while (nombresProductoSet.has(nombre) || await this.productoRepository.findOne({ where: { nombre } })) {
        nombre = faker.commerce.productName();
      }
      nombresProductoSet.add(nombre);
      const producto = this.productoRepository.create({
        nombre: nombre,
        precio: parseFloat(faker.commerce.price()),
      });
      productos.push(producto);
    }
    await this.productoRepository.save(productos);
  }


 

  async drop(): Promise<any> {
    return this.productoRepository.delete({});
  }
}