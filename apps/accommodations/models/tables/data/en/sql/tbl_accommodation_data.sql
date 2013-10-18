/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:30:01 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_accommodation_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_accommodation_data`;
CREATE TABLE `tbl_accommodation_data` (
  `kp_AccommodationID` int(11) NOT NULL AUTO_INCREMENT,
  `AccommodationName` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_WhereaboutsID` int(11) NOT NULL DEFAULT '0',
  `kf_KindOfAccommodationID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`kp_AccommodationID`),
  UNIQUE KEY `kp_AccommodationID` (`kp_AccommodationID`) USING BTREE,
  KEY `kf_WhereaboutsID` (`kf_WhereaboutsID`) USING BTREE,
  KEY `kf_KindOfAccommodationID` (`kf_KindOfAccommodationID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
