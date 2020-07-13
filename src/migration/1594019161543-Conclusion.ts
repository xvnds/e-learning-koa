import {MigrationInterface, QueryRunner} from "typeorm";

export class Conclusion1594019161543 implements MigrationInterface {
    name = 'Conclusion1594019161543'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "conclusion" ("id" SERIAL NOT NULL, "text" text NOT NULL, "storyId" integer, CONSTRAINT "PK_7b3240c7efffcd60656c23550af" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "frame" ADD "conclusionId" integer`);
        await queryRunner.query(`ALTER TABLE "conclusion" ADD CONSTRAINT "FK_164602ed49e1ca5e3aa2a91809c" FOREIGN KEY ("storyId") REFERENCES "story"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "frame" ADD CONSTRAINT "FK_52fb3db02936ff92f79c39a8841" FOREIGN KEY ("conclusionId") REFERENCES "conclusion"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "frame" DROP CONSTRAINT "FK_52fb3db02936ff92f79c39a8841"`);
        await queryRunner.query(`ALTER TABLE "conclusion" DROP CONSTRAINT "FK_164602ed49e1ca5e3aa2a91809c"`);
        await queryRunner.query(`ALTER TABLE "frame" DROP COLUMN "conclusionId"`);
        await queryRunner.query(`DROP TABLE "conclusion"`);
    }

}
