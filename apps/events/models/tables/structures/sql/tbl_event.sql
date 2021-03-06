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
--  Table structure for `tbl_event`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_event`;
CREATE TABLE `tbl_event` (
  `kp_EventID` int(11) NOT NULL AUTO_INCREMENT,
  `EventName` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_WhereaboutsID` int(11) NOT NULL DEFAULT 0,
  `kf_KindOfEventID` int(11) NOT NULL DEFAULT 0,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_EventID`),
  UNIQUE KEY `kp_EventID` (`kp_EventID`) USING BTREE,
  KEY `kf_WhereaboutsID` (`kf_WhereaboutsID`) USING BTREE,
  KEY `kf_KindOfEventID` (`kf_KindOfEventID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Event.ts_Created` BEFORE INSERT ON `tbl_event` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
