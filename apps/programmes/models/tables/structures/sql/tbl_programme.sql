/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 18:07:15 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_programme`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_programme`;
CREATE TABLE `tbl_programme` (
  `kp_ProgrammeID` int(11) NOT NULL AUTO_INCREMENT,
  `ProgrammeName` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_WhereaboutsID` int(11) NOT NULL,
  `kf_KindOfProgrammeID` int(11) NOT NULL,
  `kf_EventID` int(11) NOT NULL,
  PRIMARY KEY (`kp_ProgrammeID`),
  UNIQUE KEY `kp_ProgrammeID` (`kp_ProgrammeID`) USING BTREE,
  KEY `kf_WhereaboutsID` (`kf_WhereaboutsID`) USING BTREE,
  KEY `kf_KindOfProgrammeID` (`kf_KindOfProgrammeID`) USING BTREE,
  KEY `kf_EventID` (`kf_EventID`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;