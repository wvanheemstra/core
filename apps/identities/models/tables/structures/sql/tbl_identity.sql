/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 07/05/2012 16:31:05 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_identity`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_identity`;
CREATE TABLE `tbl_identity` (
  `kp_IdentityID` int(11) NOT NULL AUTO_INCREMENT,
  `IdentityName` varchar(255) COLLATE utf8_bin NOT NULL,
  `IdentityPassword` varchar(255) COLLATE utf8_bin NOT NULL,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_IdentityID`),
  UNIQUE KEY `IdentityName` (`IdentityName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Identity.ts_Created` BEFORE INSERT ON `tbl_identity` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
