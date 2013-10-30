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
--  View structure for `individual_nationality`
-- ----------------------------
DROP VIEW IF EXISTS `individual_nationality`;
CREATE VIEW `individual_nationality` AS 
  SELECT `kp_IndividualNationalityID`,
    `kf_IndividualID`,
	`kf_NationalityID`,
	`ts_Created`,
	`ts_Upnationalityd`
FROM tbl_individual_nationality;

SET FOREIGN_KEY_CHECKS = 1;