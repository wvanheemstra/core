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
--  Table structure for `tbl_gender`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_gender`;
CREATE TABLE `tbl_gender` (
  `kp_GenderID` int(11) NOT NULL AUTO_INCREMENT,
  `GenderKey` varchar(255) COLLATE utf8_bin NOT NULL,
  `GenderValue` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_KindOfGenderID` int(11) NOT NULL DEFAULT 0,
  `kf_LanguageID` int(11) NOT NULL DEFAULT 0,
  `kf_ParentID` int(11) NOT NULL DEFAULT 0,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_GenderID`),
  FOREIGN KEY (`kf_KindOfGenderID`) REFERENCES `tbl_kind_of_gender` (`kp_KindOfGenderID`),
  FOREIGN KEY (`kf_LanguageID`) REFERENCES `tbl_language` (`kp_LanguageID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Gender.ts_Created` BEFORE INSERT ON `tbl_gender` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
