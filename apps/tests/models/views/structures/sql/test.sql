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
--  View structure for `test`
-- ----------------------------
DROP VIEW IF EXISTS `test`;
CREATE VIEW `test` AS 
  SELECT `kp_TestID`,
	`TestName`,
	`TestDescription`,
	`kf_KindOfTestID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_test;

SET FOREIGN_KEY_CHECKS = 1;