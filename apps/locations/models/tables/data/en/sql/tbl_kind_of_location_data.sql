/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:45:16 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_kind_of_location_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_kind_of_location_data`;
CREATE TABLE `tbl_kind_of_location_data` (
  `kp_KindOfLocationID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfLocationName` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`kp_KindOfLocationID`),
  UNIQUE KEY `kp_KindOfLocationID` (`kp_KindOfLocationID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_kind_of_location_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_kind_of_location_data` VALUES ('1', 'Primary Address'), ('2', 'Emergency Address');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
