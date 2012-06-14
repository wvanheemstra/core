/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 21:59:22 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_global`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_global`;
CREATE TABLE `tbl_global` (
  `__kp_GlobalID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfContactID_Telephone` varchar(255) COLLATE utf8_bin NOT NULL,
  `KindOfContactID_Fax` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`__kp_GlobalID`),
  UNIQUE KEY `__kp_GlobalID` (`__kp_GlobalID`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
