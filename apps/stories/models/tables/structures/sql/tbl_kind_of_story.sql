/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 12:35:57 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_kind_of_story`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_kind_of_story`;
CREATE TABLE `tbl_kind_of_story` (
  `kp_KindOfStoryID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfStoryKey` varchar(255) COLLATE utf8_bin NOT NULL,
  `KindOfStoryValue` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_LanguageID` int(11) NOT NULL DEFAULT 0,
  `kf_ParentID` int(11) NOT NULL DEFAULT 0,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_KindOfStoryID`),
  FOREIGN KEY (`kf_LanguageID`) REFERENCES `tbl_language` (`kp_LanguageID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `KindOfStory.ts_Created` BEFORE INSERT ON `tbl_kind_of_story` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
