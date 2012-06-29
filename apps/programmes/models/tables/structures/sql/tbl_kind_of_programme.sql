/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 12:36:18 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_kind_of_programme`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_kind_of_programme`;
CREATE TABLE `tbl_kind_of_programme` (
  `kp_KindOfProgrammeID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfProgrammeName` varchar(255) COLLATE utf8_bin NOT NULL,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_KindOfProgrammeID`),
  UNIQUE KEY `kp_KindOfProgrammeID` (`kp_KindOfProgrammeID`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `KindOfProgramme.ts_Created` BEFORE INSERT ON `tbl_kind_of_programme` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
