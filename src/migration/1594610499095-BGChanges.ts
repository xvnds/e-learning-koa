import {MigrationInterface, QueryRunner} from "typeorm";

export class BGChanges1594610499095 implements MigrationInterface {
    name = 'BGChanges1594610499095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "frame_bg" ("id" SERIAL NOT NULL, "uri" character varying NOT NULL, "type" character varying NOT NULL, "frameId" integer, CONSTRAINT "PK_fbd45060d97bf1e45e1bd0669c5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "frame" DROP COLUMN "bgUri"`);
        await queryRunner.query(`ALTER TABLE "frame" DROP COLUMN "showCharacter"`);
        await queryRunner.query(`ALTER TABLE "frame_bg" ADD CONSTRAINT "FK_212547b0879d8435aec8b74c30a" FOREIGN KEY ("frameId") REFERENCES "frame"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "frame_bg" DROP CONSTRAINT "FK_212547b0879d8435aec8b74c30a"`);
        await queryRunner.query(`ALTER TABLE "frame" ADD "showCharacter" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "frame" ADD "bgUri" text`);
        await queryRunner.query(`DROP TABLE "frame_bg"`);
    }

}
