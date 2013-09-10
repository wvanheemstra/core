/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 12:28:45 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_output`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_output`;
CREATE TABLE `tbl_output` (
  `kp_OutputID` int(11) NOT NULL AUTO_INCREMENT,
  `OutputName` varchar(255) COLLATE utf8_bin NOT NULL,
  `OutputDescription` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_KindOfOutputID` int(11) NOT NULL,  
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_OutputID`),
  KEY `kf_KindOfOutputID` (`kf_KindOfOutputID`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Output.ts_Created` BEFORE INSERT ON `tbl_output` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
