/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 07/05/2012 14:19:56 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_creature`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_creature`;
CREATE TABLE `tbl_creature` (
  `kp_CreatureID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_SalutationID` int(11) NOT NULL DEFAULT 0,
  `kf_GenderID` int(11) NOT NULL DEFAULT 0,
  `CreatureFirstName` varchar(255) COLLATE utf8_bin NOT NULL,
  `CreatureLastName` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_NationalityID` int(11) NOT NULL DEFAULT 0,
  `kf_DateID` int(11) NOT NULL DEFAULT 0,
  `kf_KindOfCreatureID` int(11) NOT NULL DEFAULT 0,
  `kf_RegistryID` int(11) NOT NULL DEFAULT 0,
  `RelationshipWithSelf` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_RequirementID` int(11) NOT NULL DEFAULT 0,
  `kf_SkillID` int(11) NOT NULL DEFAULT 0,
  `kf_PartyID` int(11) NOT NULL DEFAULT 0,
  `kf_IdentityID` int(11) NOT NULL DEFAULT 0,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_CreatureID`),
  KEY `kf_SalutationID` (`kf_SalutationID`) USING BTREE,
  KEY `kf_GenderID` (`kf_GenderID`) USING BTREE,
  KEY `kf_NationalityID` (`kf_NationalityID`) USING BTREE,
  KEY `kf_DateID` (`kf_DateID`) USING BTREE,
  KEY `kf_KindOfCreatureID` (`kf_KindOfCreatureID`) USING BTREE,
  KEY `kf_RegistryID` (`kf_RegistryID`) USING BTREE,
  KEY `kf_RequirementID` (`kf_RequirementID`) USING BTREE,
  KEY `kf_SkillID` (`kf_SkillID`) USING BTREE,
  KEY `kf_PartyID` (`kf_PartyID`) USING BTREE,
  KEY `kf_IdentityID` (`kf_IdentityID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Creature.ts_Created` BEFORE INSERT ON `tbl_creature` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
