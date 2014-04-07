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
--  View structure for `story_name`
-- ----------------------------
DROP VIEW IF EXISTS `story_name`;
CREATE VIEW `story_name` AS 
  SELECT `kp_StoryNameID`,
    `kf_StoryID`,
	`kf_NameID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_story_name;

SET FOREIGN_KEY_CHECKS = 1;