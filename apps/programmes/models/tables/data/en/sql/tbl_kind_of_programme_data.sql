/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:48:35 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_kind_of_programme_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_kind_of_programme_data`;
CREATE TABLE `tbl_kind_of_programme_data` (
  `kp_KindOfProgrammeID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfProgrammeName` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`kp_KindOfProgrammeID`),
  UNIQUE KEY `kp_KindOfProgrammeID` (`kp_KindOfProgrammeID`) USING BTREE
) ENGINE=Innodb AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_kind_of_programme_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_kind_of_programme_data` VALUES ('1', 'English for Today (EFT) morning programme'), ('2', 'Business English for Today (BET)'), ('3', 'Tutorial 1:1');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
