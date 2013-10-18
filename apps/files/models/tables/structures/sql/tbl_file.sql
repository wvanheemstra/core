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
--  Table structure for `tbl_file`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_file`;
CREATE TABLE `tbl_file` (
  `kp_FileID` int(11) NOT NULL AUTO_INCREMENT,
  `FileName` varchar(255) COLLATE utf8_bin NOT NULL,
  `FileDescription` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_KindOfFileID` int(11) NOT NULL DEFAULT '0',
  `kf_DateID` int(11) NOT NULL DEFAULT '0',
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_FileID`),
  KEY `kf_DateID` (`kf_DateID`) USING BTREE,
  KEY `kf_KindOfFileID` (`kf_KindOfFileID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `File.ts_Created` BEFORE INSERT ON `tbl_file` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
