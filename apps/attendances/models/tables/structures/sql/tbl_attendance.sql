/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 21:41:49 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_attendance`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_attendance`;
CREATE TABLE `tbl_attendance` (
  `__kp_AttendanceID` int(11) NOT NULL AUTO_INCREMENT,
  `_kf_PersonID` int(11) NOT NULL,
  `_kf_EventID` int(11) NOT NULL,
  `_kf_RoleID` int(11) NOT NULL,
  `_kf_ContactID` int(11) NOT NULL,
  `_kf_MultimediaID` int(11) NOT NULL,
  `_kf_TransportationID` int(11) NOT NULL,
  `gKindOfEventID_stay` int(11) NOT NULL,
  `gKindOfEventID_study` int(11) NOT NULL,
  PRIMARY KEY (`__kp_AttendanceID`),
  UNIQUE KEY `__kp_AttendanceID` (`__kp_AttendanceID`),
  KEY `_kf_PersonID` (`_kf_PersonID`),
  KEY `_kf_EventID` (`_kf_EventID`),
  KEY `_kf_RoleID` (`_kf_RoleID`),
  KEY `_kf_ContactID` (`_kf_ContactID`),
  KEY `_kf_MultimediaID` (`_kf_MultimediaID`),
  KEY `_kf_TransportationID` (`_kf_TransportationID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
