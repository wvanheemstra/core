/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 12:31:33 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_global`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_global`;
CREATE TABLE `tbl_global` (
  `kp_GlobalID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfContactID_telephone` int(11) NOT NULL DEFAULT 0,
  `KindOfContactID_fax` int(11) NOT NULL DEFAULT 0,
  `KindOfContactID_email` int(11) NOT NULL DEFAULT 0,
  `KindOfContactID_mobile` int(11) NOT NULL DEFAULT 0,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_GlobalID`),
  UNIQUE KEY `kp_GlobalID` (`kp_GlobalID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Global.ts_Created` BEFORE INSERT ON `tbl_global` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
