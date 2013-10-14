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
--  View structure for `organisation_party`
-- ----------------------------
DROP VIEW IF EXISTS `organisation_party`;
CREATE VIEW `organisation_party` AS 
  SELECT `kf_OrganisationID`,
	`kf_PartyID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_organisation_party;

SET FOREIGN_KEY_CHECKS = 1;