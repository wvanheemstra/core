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
--  View structure for `tag_data`
-- ----------------------------
DROP VIEW IF EXISTS `tag_data`;
CREATE VIEW `tag_data` AS 
  SELECT `kp_TagID`,
	`TagName`,
	`TagDescription`,
	`TagKey`,
	`TagValue`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_tag_data;

SET FOREIGN_KEY_CHECKS = 1;