/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Source Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 12:40:04 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_source`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_source`;
CREATE TABLE `tbl_source` (
  `kp_SourceID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_KindOfSourceID` int(11) NOT NULL,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_SourceID`),
  KEY `kf_KindOfSourceID` (`kf_KindOfSourceID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Source.ts_Created` BEFORE INSERT ON `tbl_source` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
