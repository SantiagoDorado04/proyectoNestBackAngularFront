// src/config/data-source.ts

import { DataSource } from 'typeorm';
import { ProductoEntity } from './producto/producto.entity';
import { EstablecimientoEntity } from './establecimiento/establecimiento.entity'; // Asegúrate de importar la entidad Establecimiento

const dbPort = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432; // Usar un valor predeterminado de 5432 si no se define

export const AppDataSource = new DataSource({
    type: 'postgres', // Usando PostgreSQL como base de datos
    host: process.env.DB_HOST,
    port: dbPort, // Usando la variable con la comprobación
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [ProductoEntity, EstablecimientoEntity],
    synchronize: false,
    logging: true,
  });

  AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });