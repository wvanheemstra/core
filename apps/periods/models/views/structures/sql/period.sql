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
--  View structure for `period`
-- ----------------------------
DROP VIEW IF EXISTS `period`;
CREATE VIEW `period` AS 
  SELECT `kp_PeriodID`, 
	`kf_KindOfPeriodID`,
	`kf_DateID`,
	`PeriodName`
FROM tbl_period;

SET FOREIGN_KEY_CHECKS = 1;
