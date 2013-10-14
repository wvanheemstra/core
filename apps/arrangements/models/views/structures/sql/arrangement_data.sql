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
--  View structure for `arrangement_data`
-- ----------------------------
DROP VIEW IF EXISTS `arrangement_data`;
CREATE VIEW `arrangement_data` AS 
  SELECT `kp_ArrangementID`,
	`ArrangementName`,
	`kf_KindOfArrangementID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_arrangement_data;

SET FOREIGN_KEY_CHECKS = 1;