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
--  Table structure for `tbl_plan_event`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_plan_event`;
CREATE TABLE `tbl_plan_event` (
  `kp_PlanEventID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_PlanID` int(11) NOT NULL DEFAULT 0,
  `kf_EventID` int(11) NOT NULL DEFAULT 0,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_PlanEventID`),
  FOREIGN KEY (`kf_PlanID`) REFERENCES `tbl_plan` (`kp_PlanID`) ON DELETE CASCADE,
  FOREIGN KEY (`kf_EventID`) REFERENCES `tbl_event` (`kp_EventID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Plan_Event.ts_Created` BEFORE INSERT ON `tbl_plan_event` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;