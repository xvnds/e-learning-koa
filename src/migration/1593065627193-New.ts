import {MigrationInterface, QueryRunner} from "typeorm";

export class New1593065627193 implements MigrationInterface {
    name = 'New1593065627193'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "story_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_a8cb3bb78ec046b0a8260626f38" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "personality_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "storyId" integer, CONSTRAINT "PK_c248ffd5636e91f1a9af2e4291d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "story" ADD "storyTypeId" integer`);
        await queryRunner.query(`ALTER TABLE "button" ADD "personalityTypeId" integer`);
        await queryRunner.query(`ALTER TABLE "personality_type" ADD CONSTRAINT "FK_92101ac5456954766e7060044be" FOREIGN KEY ("storyId") REFERENCES "story"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "story" ADD CONSTRAINT "FK_7c4a470e24a711f71e7309620ee" FOREIGN KEY ("storyTypeId") REFERENCES "story_type"("id") ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE "button" ADD CONSTRAINT "FK_94fecec33928c108fa30a142057" FOREIGN KEY ("personalityTypeId") REFERENCES "personality_type"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "button" DROP CONSTRAINT "FK_94fecec33928c108fa30a142057"`);
        await queryRunner.query(`ALTER TABLE "story" DROP CONSTRAINT "FK_7c4a470e24a711f71e7309620ee"`);
        await queryRunner.query(`ALTER TABLE "personality_type" DROP CONSTRAINT "FK_92101ac5456954766e7060044be"`);
        await queryRunner.query(`ALTER TABLE "button" DROP COLUMN "personalityTypeId"`);
        await queryRunner.query(`ALTER TABLE "story" DROP COLUMN "storyTypeId"`);
        await queryRunner.query(`DROP TABLE "personality_type"`);
        await queryRunner.query(`DROP TABLE "story_type"`);
    }

}
