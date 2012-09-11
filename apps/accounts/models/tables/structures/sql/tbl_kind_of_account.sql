/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 12:32:56 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_kind_of_account`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_kind_of_account`;
CREATE TABLE `tbl_kind_of_account` (
  `kp_KindOfAccountID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfAccountName` varchar(255) CHARACTER SET utf8 NOT NULL,
  `KindOfAccountCode` varchar(255) COLLATE utf8_bin NOT NULL,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_KindOfAccountID`)
) ENGINE=Innodb DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `KindOfAccount.ts_Created` BEFORE INSERT ON `tbl_kind_of_account` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
