/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 12:32:33 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_kind_of_accommodation`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_kind_of_accommodation`;
CREATE TABLE `tbl_kind_of_accommodation` (
  `kp_KindOfAccommodationID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfAccommodationName` varchar(255) COLLATE utf8_bin NOT NULL,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_KindOfAccommodationID`),
  UNIQUE KEY `kp_KindOfAccommodation` (`kp_KindOfAccommodationID`) USING BTREE
) ENGINE=Innodb DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `KindOfAccommodation.ts_Created` BEFORE INSERT ON `tbl_kind_of_accommodation` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
