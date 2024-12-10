/**
-------------------------- USERS --------------------------
*/
CREATE TABLE IF NOT EXISTS  `users` (
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'User Id',
	`email` VARCHAR(60) NOT NULL COMMENT 'User email' COLLATE 'utf8mb4_unicode_ci',
	`password` TEXT NOT NULL COMMENT 'User password' COLLATE 'utf8mb4_unicode_ci',
	`firstname` VARCHAR(60) NOT NULL COMMENT 'User first name' COLLATE 'utf8mb4_unicode_ci',
	`lastname` VARCHAR(60) NOT NULL COMMENT 'User last name' COLLATE 'utf8mb4_unicode_ci',
	`active` TINYINT UNSIGNED NOT NULL DEFAULT '0' COMMENT 'Active user',
	`address` VARCHAR(60) NOT NULL COMMENT 'User address' COLLATE 'utf8mb4_unicode_ci',
	`city` VARCHAR(60) NOT NULL COMMENT 'User city' COLLATE 'utf8mb4_unicode_ci',
	`country` VARCHAR(60) NOT NULL COMMENT 'User country' COLLATE 'utf8mb4_unicode_ci',
	`register` DATETIME NOT NULL COMMENT 'Register date',
	`lastlogin` DATETIME NULL DEFAULT NULL COMMENT 'Last login date',
	`exp` INT UNSIGNED NOT NULL DEFAULT '0' COMMENT 'Experience points',
	`level` SMALLINT UNSIGNED NOT NULL DEFAULT '0' COMMENT 'User level',
	PRIMARY KEY (`id`) USING BTREE,
	UNIQUE INDEX `email` (`email`) USING BTREE
)
COMMENT='Users table'
COLLATE='utf8mb4_unicode_ci'
ENGINE=InnoDB
;
