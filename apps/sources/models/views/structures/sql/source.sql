/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Source Server Version : 50509
 File Encoding         : utf-8
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  View structure for `source`
-- ----------------------------
DROP VIEW IF EXISTS `source`;
CREATE VIEW `source` AS 
  SELECT `kp_SourceID`,
	`kf_KindOfSourceID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_source;

SET FOREIGN_KEY_CHECKS = 1;