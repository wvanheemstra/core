/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  View structure for `individual_name`
-- ----------------------------
DROP VIEW IF EXISTS `individual_name`;
CREATE VIEW `individual_name` AS 
  SELECT `kp_IndividualNameID`,
    `kf_IndividualID`,
	`kf_NameID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_individual_name;

SET FOREIGN_KEY_CHECKS = 1;