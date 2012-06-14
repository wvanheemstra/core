/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 22:19:27 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_kind_of_programme`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_kind_of_programme`;
CREATE TABLE `tbl_kind_of_programme` (
  `__kp_KindOfProgrammeID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfProgrammeName` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`__kp_KindOfProgrammeID`),
  UNIQUE KEY `__kp_KindOfProgrammeID` (`__kp_KindOfProgrammeID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
