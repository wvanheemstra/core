/*
 Navicat MySQL Data Transfer

 Driver Server         : wvanheem_core_local
 Driver Server Version : 50509
 Driver Host           : 127.0.0.1
 Driver Database       : core

 Driver Server Version : 50509
 File Encoding         : utf-8

 Date: 06/22/2012 13:19:40 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_driver_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_driver_data`;
CREATE TABLE `tbl_driver_data` (
  `kp_DriverID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_KindOfDriverID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`kp_DriverID`),
  KEY `kf_KindOfDriverID` (`kf_KindOfDriverID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
