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
--  View structure for `kind_of_nationality`
-- ----------------------------
DROP VIEW IF EXISTS `kind_of_nationality`;
CREATE VIEW `kind_of_nationality` AS 
  SELECT `kp_KindOfNationalityID`,
	`KindOfNationalityKey`,
	`KindOfNationalityValue`,
	`kf_LanguageID`,
	`kf_ParentID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_kind_of_nationality;

SET FOREIGN_KEY_CHECKS = 1;