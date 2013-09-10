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
--  View structure for `case_step`
-- ----------------------------
DROP VIEW IF EXISTS `case_step`;
CREATE VIEW `case_step` AS 
  SELECT `kf_CaseID`,
	`kf_StepID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_case_step;

SET FOREIGN_KEY_CHECKS = 1;