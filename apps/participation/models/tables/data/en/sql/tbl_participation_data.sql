/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:31:19 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_participation_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_participation_data`;
CREATE TABLE `tbl_participation_data` (
  `kp_ParticipationID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_ArrangementID` int(11) NOT NULL,
  `kf_EventID` int(11) NOT NULL,
  `kf_RoleID` int(11) NOT NULL,
  `kf_ContactID` int(11) NOT NULL,
  `kf_MultimediaID` int(11) NOT NULL,
  `kf_TransportationID` int(11) NOT NULL,
  `gKindOfEventID_stay` int(11) NOT NULL,
  `gKindOfEventID_study` int(11) NOT NULL,
  PRIMARY KEY (`kp_ParticipationID`),
  UNIQUE KEY `kp_ParticipationID` (`kp_ParticipationID`) USING BTREE,
  KEY `kf_ArrangementID` (`kf_ArrangementID`) USING BTREE,
  KEY `kf_EventID` (`kf_EventID`) USING BTREE,
  KEY `kf_RoleID` (`kf_RoleID`) USING BTREE,
  KEY `kf_ContactID` (`kf_ContactID`) USING BTREE,
  KEY `kf_MultimediaID` (`kf_MultimediaID`) USING BTREE,
  KEY `kf_TransportationID` (`kf_TransportationID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
