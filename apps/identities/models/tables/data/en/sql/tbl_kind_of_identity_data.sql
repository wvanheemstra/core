/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:43:21 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_kind_of_identity_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_kind_of_identity_data`;
CREATE TABLE `tbl_kind_of_identity_data` (
  `kp_KindOfIdentityID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfIdentityName` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`kp_KindOfIdentityID`),
  UNIQUE KEY `kp_KindOfIdentityID` (`kp_KindOfIdentityID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_kind_of_identity_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_kind_of_identity_data` VALUES ('1', 'UserName'), ('2', 'Password');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
