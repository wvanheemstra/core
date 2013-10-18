/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 07/03/2012 11:15:50 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_salutation`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_salutation`;
CREATE TABLE `tbl_salutation` (
  `kp_SalutationID` int(11) NOT NULL AUTO_INCREMENT,
  `SalutationAbbreviation` varchar(255) COLLATE utf8_bin NOT NULL,
  `SalutationAbbreviationTranslation` text COLLATE utf8_bin NOT NULL,
  `kf_LanguageID` int(11) NOT NULL DEFAULT 0,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_SalutationID`),
  KEY `kf_LanguageID` (`kf_LanguageID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Salutation.ts_Created` BEFORE INSERT ON `tbl_salutation` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
