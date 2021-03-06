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
--  View structure for `registry`
-- ----------------------------
DROP VIEW IF EXISTS `registry`;
CREATE VIEW `registry` AS 
  SELECT `kp_RegistryID`,
	`ProgrammeName`,
	`gKindOfPersonID_self`,
	`gKindOfPersonID_emergency`,
	`gKindOfPersonID_registrar`,
	`gPersonID_registrar`,
	`kf_EventID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_registry;

SET FOREIGN_KEY_CHECKS = 1;