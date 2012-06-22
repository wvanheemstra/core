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
--  View structure for `kind_of_role`
-- ----------------------------
DROP VIEW IF EXISTS `kind_of_role`;
CREATE VIEW `kind_of_role` AS 
  SELECT `kp_KindOfRoleID`, 
	`KindOfRoleName`
FROM tbl_kind_of_role;

SET FOREIGN_KEY_CHECKS = 1;
