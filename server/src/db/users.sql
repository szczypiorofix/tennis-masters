/**
-------------------------- USERS --------------------------
*/
CREATE TABLE IF NOT EXISTS  `users` (
    `id` INT NOT NULL AUTO_INCREMENT COMMENT 'User Id',
    `username` VARCHAR(60) COLLATE 'utf8mb4_unicode_ci' NOT NULL UNIQUE COMMENT 'User name',
    `password` TEXT COLLATE 'utf8mb4_unicode_ci' NOT NULL COMMENT 'User password',
    `createdAt` DATETIME NOT NULL COMMENT 'Created at',
    `authStrategy` VARCHAR(30) COLLATE 'utf8mb4_unicode_ci' COMMENT 'Authorization strategy',
    PRIMARY KEY(`id`)
)
COMMENT='Users table'
COLLATE='utf8mb4_unicode_ci'
ENGINE=InnoDB
;
