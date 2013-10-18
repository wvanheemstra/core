/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 12:30:53 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_amount`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_amount`;
CREATE TABLE `tbl_amount` (
  `kp_AmountID` int(11) NOT NULL AUTO_INCREMENT,
  `AmountName` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_WhereaboutsID` int(11) NOT NULL DEFAULT '0',
  `kf_KindOfAmountID` int(11) NOT NULL DEFAULT '0',
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_AmountID`),
  UNIQUE KEY `kp_AmountID` (`kp_AmountID`) USING BTREE,
  KEY `kf_WhereaboutsID` (`kf_WhereaboutsID`) USING BTREE,
  KEY `kf_KindOfAmountID` (`kf_KindOfAmountID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Amount.ts_Created` BEFORE INSERT ON `tbl_amount` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
