/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:49:26 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_kind_of_role`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_kind_of_role`;
CREATE TABLE `tbl_kind_of_role` (
  `kp_KindOfRoleID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfRoleName` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`kp_KindOfRoleID`),
  UNIQUE KEY `kp_KindOfRoleID` (`kp_KindOfRoleID`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
