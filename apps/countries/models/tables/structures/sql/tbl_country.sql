/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:32:50 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_country`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_country`;
CREATE TABLE `tbl_country` (
  `kp_CountryID` int(11) NOT NULL AUTO_INCREMENT,
  `CountryCode` varchar(255) COLLATE utf8_bin NOT NULL,
  `CountryName` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`kp_CountryID`),
  UNIQUE KEY `kp_CountryID` (`kp_CountryID`) USING BTREE,
  KEY `CountryCode` (`CountryCode`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
