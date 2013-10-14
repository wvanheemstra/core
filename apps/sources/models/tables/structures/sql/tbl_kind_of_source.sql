/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Source Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 12:35:15 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_kind_of_source`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_kind_of_source`;
CREATE TABLE `tbl_kind_of_source` (
  `kp_KindOfSourceID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfSourceName` varchar(255) COLLATE utf8_bin NOT NULL,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_KindOfSourceID`),
  UNIQUE KEY `kp_KindOfSourceID` (`kp_KindOfSourceID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `KindOfSource.ts_Created` BEFORE INSERT ON `tbl_kind_of_source` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
