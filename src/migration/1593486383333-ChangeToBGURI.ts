import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeToBGURI1593486383333 implements MigrationInterface {
    name = 'ChangeToBGURI1593486383333'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "frame" ADD "bgUri" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "frame" DROP COLUMN "bgUri"`);
    }

}
