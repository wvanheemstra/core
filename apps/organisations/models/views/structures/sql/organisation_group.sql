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
--  View structure for `organisation_group`
-- ----------------------------
DROP VIEW IF EXISTS `organisation_group`;
CREATE VIEW `organisation_group` AS 
  SELECT `kp_OrganisationGroupID`,
    `kf_OrganisationID`,
	`kf_GroupID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_organisation_group;

SET FOREIGN_KEY_CHECKS = 1;