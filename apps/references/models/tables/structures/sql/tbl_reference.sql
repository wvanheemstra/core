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
--  Table structure for `tbl_reference`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_reference`;
CREATE TABLE `tbl_reference` (
  `kp_ReferenceID` int(11) NOT NULL AUTO_INCREMENT,
  `ReferenceValue` varchar(255) COLLATE utf8_bin NOT NULL,
  `ReferenceDescription` varchar(255) COLLATE utf8_bin NOT NULL,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_ReferenceID`),
  UNIQUE KEY `ReferenceValue` (`ReferenceValue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Reference.ts_Created` BEFORE INSERT ON `tbl_reference` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
