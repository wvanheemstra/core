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
--  View structure for `file_tag`
-- ----------------------------
DROP VIEW IF EXISTS `file_tag`;
CREATE VIEW `file_tag` AS 
  SELECT `kf_FileID`,
	`kf_TagID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_file_tag;

SET FOREIGN_KEY_CHECKS = 1;