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
--  View structure for `organisation`
-- ----------------------------
DROP VIEW IF EXISTS `organisation`;
CREATE VIEW `organisation` AS 
  SELECT `kp_OrganisationID`,
    `kf_WhereaboutsID`,
	`OrganisationName`,
	`kf_PartyID`
FROM tbl_organisation;

SET FOREIGN_KEY_CHECKS = 1;
