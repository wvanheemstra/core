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
--  View structure for `kind_of_person`
-- ----------------------------
DROP VIEW IF EXISTS `kind_of_person`;
CREATE VIEW `kind_of_person` AS 
  SELECT `kp_KindOfPersonID`, 
	`KindOfPersonName`
FROM tbl_kind_of_person;

SET FOREIGN_KEY_CHECKS = 1;
