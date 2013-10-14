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
--  View structure for `kind_of_arrangement`
-- ----------------------------
DROP VIEW IF EXISTS `kind_of_arrangement`;
CREATE VIEW `kind_of_arrangement` AS 
  SELECT `kp_KindOfArrangementID`,
	`KindOfArrangementName`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_kind_of_arrangement;

SET FOREIGN_KEY_CHECKS = 1;