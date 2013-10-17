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
--  View structure for `schedule_activity`
-- ----------------------------
DROP VIEW IF EXISTS `schedule_activity`;
CREATE VIEW `schedule_activity` AS 
  SELECT `kp_ScheduleActivityID`,
    `kf_ScheduleID`,
	`kf_ActivityID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_schedule_activity;

SET FOREIGN_KEY_CHECKS = 1;