import {MigrationInterface, QueryRunner} from "typeorm";

export class ShowCharacter1594016661507 implements MigrationInterface {
    name = 'ShowCharacter1594016661507'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "frame" ADD "showCharacter" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "frame" DROP COLUMN "showCharacter"`);
    }

}
