/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 12:30:35 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_date`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_date`;
CREATE TABLE `tbl_date` (
  `kp_DateID` int(11) NOT NULL AUTO_INCREMENT,
  `DateStart` date DEFAULT NULL,
  `DateFinish` date DEFAULT NULL,
  `DurationInWeeks` float NOT NULL,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_DateID`),
  KEY `DateStart` (`DateStart`),
  KEY `DateFinish` (`DateFinish`),
  CONSTRAINT `tbl_date_ibfk_1` FOREIGN KEY (`kp_DateID`) REFERENCES `tbl_person` (`kf_DateID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Date.ts_Created` BEFORE INSERT ON `tbl_date` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
