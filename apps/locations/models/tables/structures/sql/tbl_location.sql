/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 14:47:25 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_location`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_location`;
CREATE TABLE `tbl_location` (
  `__kp_LocationID` float NOT NULL,
  `LocationAddress` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `LocationPlace` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `LocationPostalCode` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `LocationRegion` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `_kf_CountryID` float DEFAULT NULL,
  `_kf_KindOfLocationID` float DEFAULT NULL,
  PRIMARY KEY (`__kp_LocationID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
