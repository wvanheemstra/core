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
--  View structure for `event`
-- ----------------------------
DROP VIEW IF EXISTS `event`;
CREATE VIEW `event` AS 
  SELECT `kp_EventID`, 
	`EventName`, 
	`kf_WhereaboutsID`,
	`kf_KindOfEventID`
FROM tbl_event;

SET FOREIGN_KEY_CHECKS = 1;
