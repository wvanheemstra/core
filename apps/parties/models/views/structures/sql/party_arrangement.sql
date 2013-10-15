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
--  View structure for `party_arrangement`
-- ----------------------------
DROP VIEW IF EXISTS `party_arrangement`;
CREATE VIEW `party_arrangement` AS 
  SELECT `kp_PartyArrangementID`,
    `kf_PartyID`,
	`kf_ArrangementID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_party_arrangement;

SET FOREIGN_KEY_CHECKS = 1;