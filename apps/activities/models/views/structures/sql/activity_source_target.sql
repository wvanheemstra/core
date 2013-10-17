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
--  View structure for `activity_source_target`
-- ----------------------------
DROP VIEW IF EXISTS `activity_source_target`;
CREATE VIEW `activity_source_target` AS 
  SELECT `kp_ActivitySourceTargetID`,
    `kf_ActivityID`,  
    `kf_SourceID`,
	`kf_TargetID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_activity_source_target;

SET FOREIGN_KEY_CHECKS = 1;