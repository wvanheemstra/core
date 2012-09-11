/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 12:41:39 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_registry`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_registry`;
CREATE TABLE `tbl_registry` (
  `kp_RegistryID` int(11) NOT NULL AUTO_INCREMENT,
  `gKindOfPersonID_self` int(11) NOT NULL,
  `gKindOfPersonID_emergency` int(11) NOT NULL,
  `gPersonID_registrar` int(11) NOT NULL,
  `gKindOfPersonID_registrar` int(11) NOT NULL,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_RegistryID`)
) ENGINE=Innodb DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Registry.ts_Created` BEFORE INSERT ON `tbl_registry` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
