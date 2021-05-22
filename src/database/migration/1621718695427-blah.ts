import {MigrationInterface, QueryRunner} from "typeorm";

export class blah1621718695427 implements MigrationInterface {
    name = 'blah1621718695427'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `article` ADD `title2` varchar(643) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `firstName`");
        await queryRunner.query("ALTER TABLE `user` ADD `firstName` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `firstName`");
        await queryRunner.query("ALTER TABLE `user` ADD `firstName` varchar(64) NOT NULL");
        await queryRunner.query("ALTER TABLE `article` DROP COLUMN `title2`");
    }

}
