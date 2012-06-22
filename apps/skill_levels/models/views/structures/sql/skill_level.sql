/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  View structure for `skill_level`
-- ----------------------------
DROP VIEW IF EXISTS `skill_level`;
CREATE VIEW `skill_level` AS 
  SELECT `kp_SkillLevelID`,
    `SkillLevelName`,
    `kf_LanguageID`
FROM tbl_skill_level;

SET FOREIGN_KEY_CHECKS = 1;
