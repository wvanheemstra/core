/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:38:55 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_global_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_global_data`;
CREATE TABLE `tbl_global_data` (
  `kp_GlobalID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfContactID_Telephone` varchar(255) COLLATE utf8_bin NOT NULL,
  `KindOfContactID_Fax` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`kp_GlobalID`),
  UNIQUE KEY `kp_GlobalID` (`kp_GlobalID`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
