/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 18:08:48 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_registry`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_registry`;
CREATE TABLE `tbl_registry` (
  `kp_RegistryID` int(11) NOT NULL AUTO_INCREMENT,
  `gKindOfPersonID_self` int(11) NOT NULL,
  `gKindOfPersonID_emergency` int(11) NOT NULL,
  `gPersonID_registrar` int(11) NOT NULL,
  `gKindOfPersonID_registrar` int(11) NOT NULL,
  PRIMARY KEY (`kp_RegistryID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
