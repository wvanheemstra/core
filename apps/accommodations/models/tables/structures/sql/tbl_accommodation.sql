/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 14:35:46 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_accommodation`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_accommodation`;
CREATE TABLE `tbl_accommodation` (
  `__kp_AccommodationID` float NOT NULL,
  `AccommodationName` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `_kf_WhereaboutsID` float DEFAULT NULL,
  `_kf_KindOfAccommodationID` float DEFAULT NULL,
  PRIMARY KEY (`__kp_AccommodationID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
