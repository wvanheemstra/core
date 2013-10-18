/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 12:37:40 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_location`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_location`;
CREATE TABLE `tbl_location` (
  `kp_LocationID` int(11) NOT NULL AUTO_INCREMENT,
  `LocationAddress` varchar(255) COLLATE utf8_bin NOT NULL,
  `LocationPlace` varchar(255) COLLATE utf8_bin NOT NULL,
  `LocationPostalCode` varchar(255) COLLATE utf8_bin NOT NULL,
  `LocationRegion` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_CountryID` int(11) NOT NULL DEFAULT 0,
  `kf_KindOfLocationID` int(11) NOT NULL DEFAULT 0,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_LocationID`),
  UNIQUE KEY `kp_LocationID` (`kp_LocationID`) USING BTREE,
  KEY `kf_CountryID` (`kf_CountryID`) USING BTREE,
  KEY `kf_KindOfLocationID` (`kf_KindOfLocationID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Location.ts_Created` BEFORE INSERT ON `tbl_location` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
