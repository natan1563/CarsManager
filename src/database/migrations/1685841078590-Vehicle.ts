import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Vehicle1685841078590 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'vehicles',
            columns: [
              {
                name: 'id',
                type: 'bigint',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'
              },
              {
                name: 'placa',
                type: 'varchar',
                length: "8",
              },
              {
                name: 'chassi',
                type: 'varchar',
                length: "17",
              },
              {
                name: 'renavam',
                type: 'varchar',
                length: "11",
              },
              {
                name: 'modelo',
                type: 'varchar',
                length: "40",
              },
              {
                name: 'marca',
                type: 'varchar',
                length: "40",
              },
              {
                name: 'ano',
                type: 'varchar',
                length: "4",
              },
              {
                name: 'created_at',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP '
              },
              {
                name: 'updated_at',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP '
              }
            ]
          }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('vehicles')
    }

}
