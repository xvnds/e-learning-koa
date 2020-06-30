import {MigrationInterface, QueryRunner} from "typeorm";

export class Changes1591697116648 implements MigrationInterface {
    name = 'Changes1591697116648'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "frame" ALTER COLUMN "text" DROP NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "frame" ALTER COLUMN "text" SET NOT NULL`, undefined);
    }

}
