/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 18:11:39 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_role_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_role_data`;
CREATE TABLE `tbl_role_data` (
  `kp_RoleID` int(11) NOT NULL AUTO_INCREMENT,
  `RoleName` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_KindOfRoleID` int(11) NOT NULL,
  `kf_MembershipID` int(11) NOT NULL,
  PRIMARY KEY (`kp_RoleID`),
  KEY `kf_KindOfRoleID` (`kf_KindOfRoleID`) USING BTREE,
  KEY `kf_MembershipID` (`kf_MembershipID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_role_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_role_data` VALUES ('8', 'Baker', '1', '26'), ('9', 'Smith', '1', '29'), ('10', 'hhhk', '1', '30');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
