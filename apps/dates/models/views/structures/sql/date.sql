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
--  View structure for `date`
-- ----------------------------
DROP VIEW IF EXISTS `date`;
CREATE VIEW `date` AS 
  SELECT `kp_DateID`, 
	`DateStart`, 
	`DateFinish`,
	`DurationInWeeks`
FROM tbl_date;

SET FOREIGN_KEY_CHECKS = 1;
