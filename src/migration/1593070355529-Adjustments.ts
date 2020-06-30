import {MigrationInterface, QueryRunner} from "typeorm";

export class Adjustments1593070355529 implements MigrationInterface {
    name = 'Adjustments1593070355529'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "story" ADD "published" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "story" ADD "private" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "story" DROP COLUMN "private"`);
        await queryRunner.query(`ALTER TABLE "story" DROP COLUMN "published"`);
    }

}
