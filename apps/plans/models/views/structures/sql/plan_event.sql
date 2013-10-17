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
--  View structure for `plan_event`
-- ----------------------------
DROP VIEW IF EXISTS `plan_event`;
CREATE VIEW `plan_event` AS 
  SELECT `kp_PlanEventID`,
    `kf_PlanID`,
	`kf_EventID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_plan_event;

SET FOREIGN_KEY_CHECKS = 1;