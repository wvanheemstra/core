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
--  View structure for `individual_group`
-- ----------------------------
DROP VIEW IF EXISTS `individual_group`;
CREATE VIEW `individual_group` AS 
  SELECT `kp_IndividualGroupID`,
    `kf_IndividualID`,
	`kf_GroupID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_individual_group;

SET FOREIGN_KEY_CHECKS = 1;