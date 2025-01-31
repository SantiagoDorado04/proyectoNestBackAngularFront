import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoEntity } from './producto.entity';
import { ProductosSeeder } from 'src/seeders/productos.seeder';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductoEntity])
  ],
  providers: [ProductoService, ProductosSeeder],
  controllers: [ProductoController],
  exports: [ProductosSeeder]
})
export class ProductoModule {}
