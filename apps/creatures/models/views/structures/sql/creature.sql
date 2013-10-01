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
--  View structure for `creature`
-- ----------------------------
DROP VIEW IF EXISTS `creature`;
CREATE VIEW `creature` AS 
  SELECT `kp_CreatureID`,
	`CreatureFirstName`,
	`CreatureLastName`,
	`RelationshipWithSelf`,
	`kf_KindOfCreatureID`,
	`kf_SalutationID`,
	`kf_NationalityID`,
	`kf_GenderID`,
	`kf_DateID`,
	`kf_RegistryID`,
	`kf_RequirementID`,
	`kf_SkillID`,
	`kf_PartyID`,
	`kf_IdentityID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_creature;

SET FOREIGN_KEY_CHECKS = 1;