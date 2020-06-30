import {MigrationInterface, QueryRunner} from "typeorm";

export class Password1590548965822 implements MigrationInterface {
    name = 'Password1590548965822'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" text NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`, undefined);
    }

}
