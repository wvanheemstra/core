/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:44:51 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_kind_of_location`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_kind_of_location`;
CREATE TABLE `tbl_kind_of_location` (
  `kp_KindOfLocationID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfLocationName` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`kp_KindOfLocationID`),
  UNIQUE KEY `kp_KindOfLocationID` (`kp_KindOfLocationID`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
