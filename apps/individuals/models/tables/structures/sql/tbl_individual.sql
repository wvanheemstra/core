/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 07/05/2012 14:19:56 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_individual`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_individual`;
CREATE TABLE `tbl_individual` (
  `kp_IndividualID` int(11) NOT NULL AUTO_INCREMENT,
  `IndividualKey` varchar(255) COLLATE utf8_bin NOT NULL,
  `IndividualValue` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_KindOfIndividualID` int(11) NOT NULL DEFAULT 0,
  `kf_LanguageID` int(11) NOT NULL DEFAULT 0,
  `kf_ParentID` int(11) NOT NULL DEFAULT 0,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_IndividualID`),
  FOREIGN KEY (`kf_KindOfIndividualID`) REFERENCES `tbl_kind_of_individual` (`kp_KindOfIndividualID`),
  FOREIGN KEY (`kf_LanguageID`) REFERENCES `tbl_language` (`kp_LanguageID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Individual.ts_Created` BEFORE INSERT ON `tbl_individual` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
