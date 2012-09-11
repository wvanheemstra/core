/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 18:14:06 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_skill_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_skill_data`;
CREATE TABLE `tbl_skill_data` (
  `kp_SkillID` int(11) NOT NULL AUTO_INCREMENT,
  `SkillName` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_LanguageID` int(11) NOT NULL,
  `kf_SkillLevelID` int(11) NOT NULL,
  PRIMARY KEY (`kp_SkillID`),
  KEY `kf_LanguageID` (`kf_LanguageID`) USING BTREE,
  KEY `kf_SkillLevelID` (`kf_SkillLevelID`) USING BTREE
) ENGINE=Innodb AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_skill_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_skill_data` VALUES ('1', 'English', '0', '1'), ('2', '', '0', '4');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
