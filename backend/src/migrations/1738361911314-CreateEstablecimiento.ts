import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEstablecimiento1738361911314 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(
            `CREATE TABLE "establecimiento" (
              "id" SERIAL NOT NULL PRIMARY KEY,
              "nombre" varchar(255) NOT NULL,
              "direccion" varchar(255) NOT NULL,
              "horario" varchar(255) NOT NULL
            )`
          );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('establecimiento');

    }

}
