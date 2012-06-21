/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 18:14:42 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_skill_level`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_skill_level`;
CREATE TABLE `tbl_skill_level` (
  `kp_SkillLevelID` int(11) NOT NULL AUTO_INCREMENT,
  `SkillLevelName` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_LanguageID` int(11) NOT NULL,
  PRIMARY KEY (`kp_SkillLevelID`),
  KEY `kf_LanguageID` (`kf_LanguageID`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
