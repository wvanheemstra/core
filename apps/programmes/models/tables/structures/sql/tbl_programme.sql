/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 14:52:48 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_programme`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_programme`;
CREATE TABLE `tbl_programme` (
  `__kp_ProgrammeID` float NOT NULL,
  `ProgrammeName` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `_kf_WhereaboutsID` float DEFAULT NULL,
  `_kf_KindOfProgrammeID` float DEFAULT NULL,
  `_kf_EventID` float DEFAULT NULL,
  PRIMARY KEY (`__kp_ProgrammeID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
