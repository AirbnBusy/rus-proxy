-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'photos'
-- 
-- ---

DROP DATABASE IF EXISTS hero_module;
CREATE DATABASE hero_module;
USE hero_module;

CREATE TABLE `photos` (
  `uri` VARCHAR(75) NOT NULL,
  `listing_id` INTEGER NOT NULL,
  `description` VARCHAR(60) NULL DEFAULT NULL,
  PRIMARY KEY (`uri`)
);

-- ---
-- Foreign Keys 
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `photos` (`uri`,`listing_id`,`description`) VALUES
-- ('','','');
