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
--  View structure for `realisation`
-- ----------------------------
DROP VIEW IF EXISTS `realisation`;
CREATE VIEW `realisation` AS 
  SELECT `kp_RealisationID`,
	`RealisationName`,
	`RealisationDescription`,
	`kf_KindOfRealisationID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_realisation;

SET FOREIGN_KEY_CHECKS = 1;