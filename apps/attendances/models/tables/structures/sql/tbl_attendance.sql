/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 12:29:05 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_attendance`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_attendance`;
CREATE TABLE `tbl_attendance` (
  `kp_AttendanceID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_ArrangementID` int(11) NOT NULL DEFAULT 0,
  `kf_EventID` int(11) NOT NULL DEFAULT 0,
  `kf_RoleID` int(11) NOT NULL DEFAULT 0,
  `kf_ContactID` int(11) NOT NULL DEFAULT 0,
  `kf_MultimediaID` int(11) NOT NULL DEFAULT 0,
  `kf_TransportationID` int(11) NOT NULL DEFAULT 0,
  `gKindOfEventID_stay` int(11) NOT NULL DEFAULT 0,
  `gKindOfEventID_study` int(11) NOT NULL DEFAULT 0,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_AttendanceID`),
  UNIQUE KEY `kp_AttendanceID` (`kp_AttendanceID`) USING BTREE,
  KEY `kf_ArrangementID` (`kf_ArrangementID`) USING BTREE,
  KEY `kf_EventID` (`kf_EventID`) USING BTREE,
  KEY `kf_RoleID` (`kf_RoleID`) USING BTREE,
  KEY `kf_ContactID` (`kf_ContactID`) USING BTREE,
  KEY `kf_MultimediaID` (`kf_MultimediaID`) USING BTREE,
  KEY `kf_TransportationID` (`kf_TransportationID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Attendance.ts_Created` BEFORE INSERT ON `tbl_attendance` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
