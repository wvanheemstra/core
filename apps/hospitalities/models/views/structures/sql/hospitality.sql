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
--  View structure for `hospitality`
-- ----------------------------
DROP VIEW IF EXISTS `hospitality`;
CREATE VIEW `hospitality` AS 
  SELECT `kp_HospitalityID`, 
	`kf_AccommodationID`, 
	`kf_OrganisationID`,
	`kf_RoleID`,
	`kf_ContactID`,
	`kf_MultimediaID`
FROM tbl_hospitality;

SET FOREIGN_KEY_CHECKS = 1;
