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
--  Table structure for `tbl_schedule_activity`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_schedule_activity`;
CREATE TABLE `tbl_schedule_activity` (
  `kp_ScheduleActivityID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_ScheduleID` int(11) NOT NULL,
  `kf_ActivityID` int(11) NOT NULL,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_ScheduleActivityID`),
  FOREIGN KEY (`kf_ScheduleID`) REFERENCES `tbl_schedule` (`kp_ScheduleID`) ON DELETE CASCADE,
  FOREIGN KEY (`kf_ActivityID`) REFERENCES `tbl_activity` (`kp_ActivityID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Schedule_Activity.ts_Created` BEFORE INSERT ON `tbl_schedule_activity` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
