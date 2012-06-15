/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/15/2012 11:10:01 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_skill`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_skill`;
CREATE TABLE `tbl_skill` (
  `__kp_SkillID` int(11) NOT NULL AUTO_INCREMENT,
  `SkillName` varchar(255) COLLATE utf8_bin NOT NULL,
  `_kf_LanguageID` int(11) NOT NULL,
  `_kf_SkillLevelID` int(11) NOT NULL,
  PRIMARY KEY (`__kp_SkillID`),
  KEY `_kf_LanguageID` (`_kf_LanguageID`),
  KEY `_kf_SkillLevelID` (`_kf_SkillLevelID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
