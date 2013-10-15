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
--  View structure for `participation`
-- ----------------------------
DROP VIEW IF EXISTS `participation`;
CREATE VIEW `participation` AS 
  SELECT `kp_ParticipationID`,
	`kf_ArrangementID`,
	`kf_ActivityID`,
	`kf_RoleID`,
	`kf_ContactID`,
	`kf_MultimediaID`,
	`kf_TransportationID`,
	`gKindOfEventID_stay`,
	`gKindOfEventID_study`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_participation;

SET FOREIGN_KEY_CHECKS = 1;