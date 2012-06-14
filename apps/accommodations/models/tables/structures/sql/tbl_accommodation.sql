/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 20:50:58 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_accommodation`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_accommodation`;
CREATE TABLE `tbl_accommodation` (
  `__kp_AccommodationID` int(11) NOT NULL AUTO_INCREMENT,
  `AccommodationName` varchar(255) COLLATE utf8_bin NOT NULL,
  `_kf_WhereaboutsID` int(11) NOT NULL,
  `_kf_KindOfAccommodationID` int(11) NOT NULL,
  PRIMARY KEY (`__kp_AccommodationID`),
  UNIQUE KEY `__kp_AccommodationID` (`__kp_AccommodationID`),
  KEY `_kf_WhereaboutsID` (`_kf_WhereaboutsID`),
  KEY `_kf_KindOfAccommodationID` (`_kf_KindOfAccommodationID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
