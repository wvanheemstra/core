/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:42:19 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_kind_of_accommodation_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_kind_of_accommodation_data`;
CREATE TABLE `tbl_kind_of_accommodation_data` (
  `kp_KindOfAccommodationID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfAccommodationName` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`kp_KindOfAccommodationID`),
  UNIQUE KEY `kp_KindOfAccommodationID` (`kp_KindOfAccommodationID`) USING BTREE
) ENGINE=Innodb AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_kind_of_accommodation_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_kind_of_accommodation_data` VALUES ('1', 'B&B'), ('2', 'Half Board'), ('3', 'Residency'), ('4', 'None');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
