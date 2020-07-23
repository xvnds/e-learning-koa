import {MigrationInterface, QueryRunner} from "typeorm";

export class ConclusionIdonButton1595475719527 implements MigrationInterface {
    name = 'ConclusionIdonButton1595475719527'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "button" ADD "conclusionId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "button" ADD CONSTRAINT "FK_a7ea698eae416c3d940894354cf" FOREIGN KEY ("conclusionId") REFERENCES "conclusion"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "button" DROP CONSTRAINT "FK_a7ea698eae416c3d940894354cf"`, undefined);
        await queryRunner.query(`ALTER TABLE "button" DROP COLUMN "conclusionId"`, undefined);
    }

}
