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
--  View structure for `file_tag_data`
-- ----------------------------
DROP VIEW IF EXISTS `file_tag_data`;
CREATE VIEW `file_tag_data` AS 
  SELECT `kf_FileID`,
	`kf_TagID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_file_tag_data;

SET FOREIGN_KEY_CHECKS = 1;