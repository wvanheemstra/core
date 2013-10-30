/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 07/03/2012 10:09:08 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_name`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_name`;
CREATE TABLE `tbl_name` (
  `kp_NameID` int(11) NOT NULL AUTO_INCREMENT,
  `NameName` varchar(255) COLLATE utf8_bin NOT NULL,
  `NameNameTranslation` text COLLATE utf8_bin NOT NULL,
  `kf_KindOfNameID` int(11) NOT NULL DEFAULT 0,  
  `kf_LanguageID` int(11) NOT NULL DEFAULT 0,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_NameID`),
  UNIQUE KEY `kp_NameID` (`kp_NameID`) USING BTREE,
  KEY `kf_KindOfNameID` (`kf_KindOfNameID`) USING BTREE,  
  KEY `kf_LanguageID` (`kf_LanguageID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Name.ts_Created` BEFORE INSERT ON `tbl_name` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
