/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/15/2012 10:59:15 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_requirement`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_requirement`;
CREATE TABLE `tbl_requirement` (
  `__kp_RequirementID` int(11) NOT NULL AUTO_INCREMENT,
  `RequirementName` varchar(255) COLLATE utf8_bin NOT NULL,
  `_kf_LanguageID` int(11) NOT NULL,
  PRIMARY KEY (`__kp_RequirementID`),
  KEY `_kf_LanguageID` (`_kf_LanguageID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
