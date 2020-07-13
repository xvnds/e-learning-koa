import {MigrationInterface, QueryRunner} from "typeorm";

export class CascadeUserResponse1594090113858 implements MigrationInterface {
    name = 'CascadeUserResponse1594090113858'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_response" DROP CONSTRAINT "FK_285c16e9a00e07b9cc713804b49"`);
        await queryRunner.query(`ALTER TABLE "user_response" DROP CONSTRAINT "FK_78079f033abf642d3ec06abe590"`);
        await queryRunner.query(`ALTER TABLE "user_response" DROP CONSTRAINT "FK_b243ab7d65d895eda08cd126b2c"`);
        await queryRunner.query(`ALTER TABLE "user_response" DROP CONSTRAINT "FK_d797e3f1d75a319a11c9f0cda39"`);
        await queryRunner.query(`ALTER TABLE "user_response" ADD CONSTRAINT "FK_285c16e9a00e07b9cc713804b49" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_response" ADD CONSTRAINT "FK_78079f033abf642d3ec06abe590" FOREIGN KEY ("storyId") REFERENCES "story"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_response" ADD CONSTRAINT "FK_b243ab7d65d895eda08cd126b2c" FOREIGN KEY ("frameId") REFERENCES "frame"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_response" ADD CONSTRAINT "FK_d797e3f1d75a319a11c9f0cda39" FOREIGN KEY ("buttonId") REFERENCES "button"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_response" DROP CONSTRAINT "FK_d797e3f1d75a319a11c9f0cda39"`);
        await queryRunner.query(`ALTER TABLE "user_response" DROP CONSTRAINT "FK_b243ab7d65d895eda08cd126b2c"`);
        await queryRunner.query(`ALTER TABLE "user_response" DROP CONSTRAINT "FK_78079f033abf642d3ec06abe590"`);
        await queryRunner.query(`ALTER TABLE "user_response" DROP CONSTRAINT "FK_285c16e9a00e07b9cc713804b49"`);
        await queryRunner.query(`ALTER TABLE "user_response" ADD CONSTRAINT "FK_d797e3f1d75a319a11c9f0cda39" FOREIGN KEY ("buttonId") REFERENCES "button"("id") ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE "user_response" ADD CONSTRAINT "FK_b243ab7d65d895eda08cd126b2c" FOREIGN KEY ("frameId") REFERENCES "frame"("id") ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE "user_response" ADD CONSTRAINT "FK_78079f033abf642d3ec06abe590" FOREIGN KEY ("storyId") REFERENCES "story"("id") ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE "user_response" ADD CONSTRAINT "FK_285c16e9a00e07b9cc713804b49" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE RESTRICT`);
    }

}
