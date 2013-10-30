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
--  View structure for `individual_gender`
-- ----------------------------
DROP VIEW IF EXISTS `individual_gender`;
CREATE VIEW `individual_gender` AS 
  SELECT `kp_IndividualGenderID`,
    `kf_IndividualID`,
	`kf_GenderID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_individual_gender;

SET FOREIGN_KEY_CHECKS = 1;