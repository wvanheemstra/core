/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 12:40:04 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_card`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_card`;
CREATE TABLE `tbl_card` (
  `kp_CardID` int(11) NOT NULL AUTO_INCREMENT,
  `CardName` varchar(255) COLLATE utf8_bin NOT NULL,
  `CardDescription` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_KindOfCardID` int(11) NOT NULL,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_CardID`),
  KEY `kf_KindOfCardID` (`kf_KindOfCardID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Card.ts_Created` BEFORE INSERT ON `tbl_card` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;