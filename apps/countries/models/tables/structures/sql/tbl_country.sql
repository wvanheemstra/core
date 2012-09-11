/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 07/03/2012 09:32:23 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_country`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_country`;
CREATE TABLE `tbl_country` (
  `kp_CountryID` int(11) NOT NULL AUTO_INCREMENT,
  `CountryCode` varchar(255) COLLATE utf8_bin NOT NULL,
  `CountryName` varchar(255) COLLATE utf8_bin NOT NULL,
  `CountryNameTranslation` text COLLATE utf8_bin NOT NULL,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_CountryID`),
  UNIQUE KEY `kp_CountryID` (`kp_CountryID`) USING BTREE,
  KEY `CountryCode` (`CountryCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Country.ts_Created` BEFORE INSERT ON `tbl_country` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
