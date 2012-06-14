/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 14:54:20 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_registry`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_registry`;
CREATE TABLE `tbl_registry` (
  `__kp_RegistryID` float NOT NULL,
  `gKindOfPersonID_self` float DEFAULT NULL,
  `gKindOfPersonID_emergency` float DEFAULT NULL,
  `gPersonID_registrar` float DEFAULT NULL,
  `gKindOfPersonID_registrar` float DEFAULT NULL,
  PRIMARY KEY (`__kp_RegistryID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
