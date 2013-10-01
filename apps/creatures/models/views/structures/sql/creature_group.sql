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
--  View structure for `creature_group`
-- ----------------------------
DROP VIEW IF EXISTS `creature_group`;
CREATE VIEW `creature_group` AS 
  SELECT `kf_CreatureID`,
	`kf_GroupID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_creature_group;

SET FOREIGN_KEY_CHECKS = 1;