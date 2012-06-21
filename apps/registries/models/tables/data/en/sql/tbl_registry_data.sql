/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 18:09:18 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_registry_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_registry_data`;
CREATE TABLE `tbl_registry_data` (
  `kp_RegistryID` int(11) NOT NULL AUTO_INCREMENT,
  `gKindOfPersonID_self` int(11) DEFAULT NULL,
  `gKindOfPersonID_emergency` int(11) DEFAULT NULL,
  `gPersonID_registrar` int(11) DEFAULT NULL,
  `gKindOfPersonID_registrar` int(11) DEFAULT NULL,
  PRIMARY KEY (`kp_RegistryID`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_registry_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_registry_data` VALUES ('4', '1', '2', '27', '3'), ('6', '1', '2', '27', '3'), ('7', '1', '2', '27', '3');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
