/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 18:15:13 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_skill_level_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_skill_level_data`;
CREATE TABLE `tbl_skill_level_data` (
  `kp_SkillLevelID` int(11) NOT NULL AUTO_INCREMENT,
  `SkillLevelName` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_LanguageID` int(11) NOT NULL,
  PRIMARY KEY (`kp_SkillLevelID`),
  KEY `kf_LanguageID` (`kf_LanguageID`) USING BTREE
) ENGINE=Innodb AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_skill_level_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_skill_level_data` VALUES ('1', 'Lower Intermediate', '0'), ('2', 'Intermediate', '0'), ('3', 'Upper Intermediate', '0'), ('4', 'Advanced', '0');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
