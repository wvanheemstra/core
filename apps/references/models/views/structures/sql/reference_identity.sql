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
--  View structure for `reference_identity`
-- ----------------------------
DROP VIEW IF EXISTS `reference_identity`;
CREATE VIEW `reference_identity` AS 
  SELECT `kf_ReferenceID`,
	`kf_IdentityID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_reference_identity;

SET FOREIGN_KEY_CHECKS = 1;