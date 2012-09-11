/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 12:40:22 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_period`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_period`;
CREATE TABLE `tbl_period` (
  `kp_PeriodID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_DateID` int(11) NOT NULL,
  `kf_KindOfPeriodID` int(11) NOT NULL,
  `PeriodName` varchar(255) COLLATE utf8_bin NOT NULL,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_PeriodID`),
  KEY `kf_DateID` (`kf_DateID`),
  KEY `kf_KindOfPeriodID` (`kf_KindOfPeriodID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Period.ts_Created` BEFORE INSERT ON `tbl_period` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
