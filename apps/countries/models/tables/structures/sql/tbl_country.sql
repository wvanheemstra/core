/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 21:41:04 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_country`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_country`;
CREATE TABLE `tbl_country` (
  `__kp_CountryID` int(11) NOT NULL AUTO_INCREMENT,
  `CountryCode` varchar(255) COLLATE utf8_bin NOT NULL,
  `CountryName` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`__kp_CountryID`),
  UNIQUE KEY `__kp_CountryID` (`__kp_CountryID`),
  KEY `CountryCode` (`CountryCode`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
