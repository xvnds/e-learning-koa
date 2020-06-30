import {MigrationInterface, QueryRunner} from "typeorm";

export class AddFrameURL1593486352952 implements MigrationInterface {
    name = 'AddFrameURL1593486352952'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "frame" ADD "url" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "frame" DROP COLUMN "url"`);
    }

}
