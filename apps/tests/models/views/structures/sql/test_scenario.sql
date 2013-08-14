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
--  View structure for `test_scenario`
-- ----------------------------
DROP VIEW IF EXISTS `test_scenario`;
CREATE VIEW `test_scenario` AS 
  SELECT `kf_TestID`,
	`kf_ScenarioID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_test_scenario;

SET FOREIGN_KEY_CHECKS = 1;