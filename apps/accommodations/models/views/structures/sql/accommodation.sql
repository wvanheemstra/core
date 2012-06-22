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
--  View structure for `accommodation`
-- ----------------------------
DROP VIEW IF EXISTS `accommodation`;
CREATE VIEW `accommodation` AS 
  SELECT `kp_AccommodationID`, 
	`AccommodationName`, 
	`kf_WhereaboutsID`, 
	`kf_KindOfAccommodationID`
FROM tbl_accommodation;

SET FOREIGN_KEY_CHECKS = 1;
