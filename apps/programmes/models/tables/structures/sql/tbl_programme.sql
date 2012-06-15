/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/15/2012 10:48:44 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_programme`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_programme`;
CREATE TABLE `tbl_programme` (
  `__kp_ProgrammeID` int(11) NOT NULL AUTO_INCREMENT,
  `ProgrammeName` varchar(255) COLLATE utf8_bin NOT NULL,
  `_kf_WhereaboutsID` int(11) NOT NULL,
  `_kf_KindOfProgrammeID` int(11) NOT NULL,
  `_kf_EventID` int(11) NOT NULL,
  PRIMARY KEY (`__kp_ProgrammeID`),
  UNIQUE KEY `__kp_ProgrammeID` (`__kp_ProgrammeID`),
  KEY `_kf_WhereaboutsID` (`_kf_WhereaboutsID`),
  KEY `_kf_KindOfProgrammeID` (`_kf_KindOfProgrammeID`),
  KEY `_kf_EventID` (`_kf_EventID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
