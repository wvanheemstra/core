/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:52:54 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_location`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_location`;
CREATE TABLE `tbl_location` (
  `kp_LocationID` int(11) NOT NULL AUTO_INCREMENT,
  `LocationAddress` varchar(255) COLLATE utf8_bin NOT NULL,
  `LocationPlace` varchar(255) COLLATE utf8_bin NOT NULL,
  `LocationPostalCode` varchar(255) COLLATE utf8_bin NOT NULL,
  `LocationRegion` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_CountryID` int(11) NOT NULL,
  `kf_KindOfLocationID` int(11) NOT NULL,
  PRIMARY KEY (`kp_LocationID`),
  UNIQUE KEY `kp_LocationID` (`kp_LocationID`) USING BTREE,
  KEY `kf_CountryID` (`kf_CountryID`) USING BTREE,
  KEY `kf_KindOfLocationID` (`kf_KindOfLocationID`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
