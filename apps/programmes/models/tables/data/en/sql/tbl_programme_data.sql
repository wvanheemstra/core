/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 18:08:03 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_programme_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_programme_data`;
CREATE TABLE `tbl_programme_data` (
  `kp_ProgrammeID` int(11) NOT NULL AUTO_INCREMENT,
  `ProgrammeName` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_WhereaboutsID` int(11) NOT NULL DEFAULT 0,
  `kf_KindOfProgrammeID` int(11) NOT NULL DEFAULT 0,
  `kf_EventID` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`kp_ProgrammeID`),
  KEY `kf_WhereaboutsID` (`kf_WhereaboutsID`) USING BTREE,
  KEY `kf_KindOfProgrammeID` (`kf_KindOfProgrammeID`) USING BTREE,
  KEY `kf_EventID` (`kf_EventID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_programme_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_programme_data` VALUES ('1', '', '0', '13', '2'), ('2', '', '0', '3', '3');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
