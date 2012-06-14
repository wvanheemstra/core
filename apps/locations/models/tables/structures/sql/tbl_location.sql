/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 22:27:32 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_location`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_location`;
CREATE TABLE `tbl_location` (
  `__kp_LocationID` int(11) NOT NULL AUTO_INCREMENT,
  `LocationAddress` varchar(255) COLLATE utf8_bin NOT NULL,
  `LocationPlace` varchar(255) COLLATE utf8_bin NOT NULL,
  `LocationPostalCode` varchar(255) COLLATE utf8_bin NOT NULL,
  `LocationRegion` varchar(255) COLLATE utf8_bin NOT NULL,
  `_kf_CountryID` int(11) NOT NULL,
  `_kf_KindOfLocationID` int(11) NOT NULL,
  PRIMARY KEY (`__kp_LocationID`),
  UNIQUE KEY `__kp_LocationID` (`__kp_LocationID`),
  KEY `_kf_CountryID` (`_kf_CountryID`),
  KEY `_kf_KindOfLocationID` (`_kf_KindOfLocationID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
