import {MigrationInterface, QueryRunner} from "typeorm";

export class AddConclusionPerfectScore1595314510474 implements MigrationInterface {
    name = 'AddConclusionPerfectScore1595314510474'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "conclusion" ADD "perfectScore" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "conclusion" DROP COLUMN "perfectScore"`);
    }

}
