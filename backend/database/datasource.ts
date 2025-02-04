import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  schema: process.env.DATABASE_PG_SCHEMA,
  logging: 'all',
  entities: ['./src/**/*.entity.ts'],  // O la ruta correcta si es diferente
  migrations: ['./database/migrations/*-migration.ts'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error(
      `Error during Data Source initialization`,
      JSON.stringify(err),
    );
  })
  .finally(() => {
    console.log('finished');
  });