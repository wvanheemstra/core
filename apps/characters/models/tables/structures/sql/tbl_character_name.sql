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
--  Table structure for `tbl_character_name`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_character_name`;
CREATE TABLE `tbl_character_name` (
  `kp_CharacterNameID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_CharacterID` int(11) NOT NULL DEFAULT 0,
  `kf_NameID` int(11) NOT NULL DEFAULT 0,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_CharacterNameID`),
  FOREIGN KEY (`kf_CharacterID`) REFERENCES `tbl_Character` (`kp_CharacterID`) ON DELETE CASCADE,
  FOREIGN KEY (`kf_NameID`) REFERENCES `tbl_name` (`kp_NameID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Character_Name.ts_Created` BEFORE INSERT ON `tbl_character_name` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
