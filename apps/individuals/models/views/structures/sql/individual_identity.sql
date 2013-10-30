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
--  View structure for `individual_identity`
-- ----------------------------
DROP VIEW IF EXISTS `individual_identity`;
CREATE VIEW `individual_identity` AS 
  SELECT `kp_IndividualIdentityID`,
    `kf_IndividualID`,
	`kf_IdentityID`,
	`ts_Created`,
	`ts_Upidentityd`
FROM tbl_individual_identity;

SET FOREIGN_KEY_CHECKS = 1;