/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/15/2012 11:02:51 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_role`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_role`;
CREATE TABLE `tbl_role` (
  `__kp_RoleID` int(11) NOT NULL AUTO_INCREMENT,
  `RoleName` varchar(255) COLLATE utf8_bin NOT NULL,
  `_kf_KindOfRoleID` int(11) NOT NULL,
  `_kf_MembershipID` int(11) NOT NULL,
  PRIMARY KEY (`__kp_RoleID`),
  KEY `_kf_KindOfRoleID` (`_kf_KindOfRoleID`),
  KEY `_kf_MembershipID` (`_kf_MembershipID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
