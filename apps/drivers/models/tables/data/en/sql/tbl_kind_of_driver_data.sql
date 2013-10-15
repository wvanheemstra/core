/*
 Navicat MySQL Data Transfer

 Driver Server         : wvanheem_core_local
 Driver Server Version : 50509
 Driver Host           : 127.0.0.1
 Driver Database       : core

 Driver Server Version : 50509
 File Encoding         : utf-8

 Date: 06/22/2012 13:20:13 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_kind_of_driver_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_kind_of_driver_data`;
CREATE TABLE `tbl_kind_of_driver_data` (
  `kp_KindOfDriverID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfDriverName` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`kp_KindOfDriverID`),
  UNIQUE KEY `kp_KindOfDriverID` (`kp_KindOfDriverID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
