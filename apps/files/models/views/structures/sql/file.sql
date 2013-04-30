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
--  View structure for `file`
-- ----------------------------
DROP VIEW IF EXISTS `file`;
CREATE VIEW `file` AS 
  SELECT `kp_FileID`,
	`FileName`,
	`FileDescription`,
	`kf_KindOfFileID`,
	`kf_DateID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_file;

SET FOREIGN_KEY_CHECKS = 1;