/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 22:10:23 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_kind_of_accommodation`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_kind_of_accommodation`;
CREATE TABLE `tbl_kind_of_accommodation` (
  `__kp_KindOfAccommodationID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfAccommodationName` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`__kp_KindOfAccommodationID`),
  UNIQUE KEY `_kp_KindOfAccommodation` (`__kp_KindOfAccommodationID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
