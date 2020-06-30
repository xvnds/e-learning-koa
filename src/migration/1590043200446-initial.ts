import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1590043200446 implements MigrationInterface {
    name = 'initial1590043200446'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "button_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_a2f71b52c73609c921234ca7db9" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_1f9c6d05869e094dee8fa7d392a" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user_story" ("id" SERIAL NOT NULL, "userId" integer, "storyId" integer, CONSTRAINT "PK_cd6f5a48fae7109fbc55f19720e" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "story" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" text, "userId" integer, CONSTRAINT "PK_28fce6873d61e2cace70a0f3361" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user_response" ("id" SERIAL NOT NULL, "userId" integer, "storyId" integer, "frameId" integer, "buttonId" integer, CONSTRAINT "PK_d0b43c100886629ee9cc360f056" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "username" character varying NOT NULL, "email" text, "phoneNumber" text, "createdDateTime" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "userTypeId" integer, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "frame_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_a167e239d0ff4a0abdd7df9fd79" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "frame" ("id" SERIAL NOT NULL, "title" text, "text" text NOT NULL, "userId" integer, "frameTypeId" integer, "storyId" integer, CONSTRAINT "PK_3a501084ff25e9fda79c588a4ad" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "button" ("id" SERIAL NOT NULL, "text" text NOT NULL, "score" numeric NOT NULL, "destinationId" integer, "frameId" integer, "buttonTypeId" integer, CONSTRAINT "PK_a4df4e4f7a5882bc94442d3f209" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "user_story" ADD CONSTRAINT "FK_978f5f6c2c5917c80889afc3818" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE RESTRICT`, undefined);
        await queryRunner.query(`ALTER TABLE "user_story" ADD CONSTRAINT "FK_e4e2b39002b9b4edd88b3b8497e" FOREIGN KEY ("storyId") REFERENCES "story"("id") ON DELETE RESTRICT ON UPDATE RESTRICT`, undefined);
        await queryRunner.query(`ALTER TABLE "story" ADD CONSTRAINT "FK_2f8345c3a6d1057ccf612e65a09" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE RESTRICT`, undefined);
        await queryRunner.query(`ALTER TABLE "user_response" ADD CONSTRAINT "FK_285c16e9a00e07b9cc713804b49" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE RESTRICT`, undefined);
        await queryRunner.query(`ALTER TABLE "user_response" ADD CONSTRAINT "FK_78079f033abf642d3ec06abe590" FOREIGN KEY ("storyId") REFERENCES "story"("id") ON DELETE RESTRICT ON UPDATE RESTRICT`, undefined);
        await queryRunner.query(`ALTER TABLE "user_response" ADD CONSTRAINT "FK_b243ab7d65d895eda08cd126b2c" FOREIGN KEY ("frameId") REFERENCES "frame"("id") ON DELETE RESTRICT ON UPDATE RESTRICT`, undefined);
        await queryRunner.query(`ALTER TABLE "user_response" ADD CONSTRAINT "FK_d797e3f1d75a319a11c9f0cda39" FOREIGN KEY ("buttonId") REFERENCES "button"("id") ON DELETE RESTRICT ON UPDATE RESTRICT`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_29f29dffce2845a1abc901d4e85" FOREIGN KEY ("userTypeId") REFERENCES "user_type"("id") ON DELETE RESTRICT ON UPDATE RESTRICT`, undefined);
        await queryRunner.query(`ALTER TABLE "frame" ADD CONSTRAINT "FK_83cc94339098ca3b4fd0cb386f5" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "frame" ADD CONSTRAINT "FK_a6f4e7400604c267adf9f2c367f" FOREIGN KEY ("frameTypeId") REFERENCES "frame_type"("id") ON DELETE RESTRICT ON UPDATE RESTRICT`, undefined);
        await queryRunner.query(`ALTER TABLE "frame" ADD CONSTRAINT "FK_e54b85e6a4a881272d190e9a932" FOREIGN KEY ("storyId") REFERENCES "story"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "button" ADD CONSTRAINT "FK_8eea277e0d0f8ef6a3a01b52deb" FOREIGN KEY ("destinationId") REFERENCES "frame"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "button" ADD CONSTRAINT "FK_6b25e96339ecee73c551d57b2ff" FOREIGN KEY ("frameId") REFERENCES "frame"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "button" ADD CONSTRAINT "FK_877b993f6a3b8294f551947010a" FOREIGN KEY ("buttonTypeId") REFERENCES "button_type"("id") ON DELETE RESTRICT ON UPDATE RESTRICT`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "button" DROP CONSTRAINT "FK_877b993f6a3b8294f551947010a"`, undefined);
        await queryRunner.query(`ALTER TABLE "button" DROP CONSTRAINT "FK_6b25e96339ecee73c551d57b2ff"`, undefined);
        await queryRunner.query(`ALTER TABLE "button" DROP CONSTRAINT "FK_8eea277e0d0f8ef6a3a01b52deb"`, undefined);
        await queryRunner.query(`ALTER TABLE "frame" DROP CONSTRAINT "FK_e54b85e6a4a881272d190e9a932"`, undefined);
        await queryRunner.query(`ALTER TABLE "frame" DROP CONSTRAINT "FK_a6f4e7400604c267adf9f2c367f"`, undefined);
        await queryRunner.query(`ALTER TABLE "frame" DROP CONSTRAINT "FK_83cc94339098ca3b4fd0cb386f5"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_29f29dffce2845a1abc901d4e85"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_response" DROP CONSTRAINT "FK_d797e3f1d75a319a11c9f0cda39"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_response" DROP CONSTRAINT "FK_b243ab7d65d895eda08cd126b2c"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_response" DROP CONSTRAINT "FK_78079f033abf642d3ec06abe590"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_response" DROP CONSTRAINT "FK_285c16e9a00e07b9cc713804b49"`, undefined);
        await queryRunner.query(`ALTER TABLE "story" DROP CONSTRAINT "FK_2f8345c3a6d1057ccf612e65a09"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_story" DROP CONSTRAINT "FK_e4e2b39002b9b4edd88b3b8497e"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_story" DROP CONSTRAINT "FK_978f5f6c2c5917c80889afc3818"`, undefined);
        await queryRunner.query(`DROP TABLE "button"`, undefined);
        await queryRunner.query(`DROP TABLE "frame"`, undefined);
        await queryRunner.query(`DROP TABLE "frame_type"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
        await queryRunner.query(`DROP TABLE "user_response"`, undefined);
        await queryRunner.query(`DROP TABLE "story"`, undefined);
        await queryRunner.query(`DROP TABLE "user_story"`, undefined);
        await queryRunner.query(`DROP TABLE "user_type"`, undefined);
        await queryRunner.query(`DROP TABLE "button_type"`, undefined);
    }

}
