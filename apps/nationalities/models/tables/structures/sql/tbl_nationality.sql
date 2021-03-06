/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 12:39:20 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_nationality`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_nationality`;
CREATE TABLE `tbl_nationality` (
  `kp_NationalityID` int(11) NOT NULL AUTO_INCREMENT,
  `NationalityKey` varchar(255) COLLATE utf8_bin NOT NULL,
  `NationalityValue` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_KindOfNationalityID` int(11) NOT NULL DEFAULT 0,
  `kf_LanguageID` int(11) NOT NULL DEFAULT 0,
  `kf_ParentID` int(11) NOT NULL DEFAULT 0,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_NationalityID`),
  KEY `kf_KindOfNationalityID` (`kf_KindOfNationalityID`) USING BTREE,
  KEY `kf_LanguageID` (`kf_LanguageID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Nationality.ts_Created` BEFORE INSERT ON `tbl_nationality` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
