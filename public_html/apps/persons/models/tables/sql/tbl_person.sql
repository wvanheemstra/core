/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 13:34:23 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_person`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_person`;
CREATE TABLE `tbl_person` (
  `__kp_PersonID` float NOT NULL,
  `_kf_SalutationID` float DEFAULT NULL,
  `_kf_GenderID` float DEFAULT NULL,
  `PersonFirstName` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `PersonLastName` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `_kf_NationalityID` float DEFAULT NULL,
  `_kf_DateID` float DEFAULT NULL,
  `_kf_KindOfPersonID` float DEFAULT NULL,
  `_kf_RegistryID` float DEFAULT NULL,
  `RelationshipWithSelf` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `_kf_RequirementID` float DEFAULT NULL,
  `_kf_SkillID` float DEFAULT NULL,
  PRIMARY KEY (`__kp_PersonID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_person`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_person` VALUES ('25', '1', '1', 'Willem', 'van Heemstra', '26', '6', '1', '4', null, '196', '1'), ('26', '1', '1', 'Gijs', 'van Heemstra', null, null, '2', '4', 'Brother', null, null), ('27', '2', '2', 'Valerie', 'Reynolds', '27', null, '3', null, null, '194', null), ('28', '1', '1', 'Peter', 'Jones', '171', '10', '1', '6', null, '195', '2'), ('29', '1', null, 'fdfd', 'Nielsen', '75', '11', '1', '7', null, null, null), ('30', null, null, 'fdsf', 'hfghfghf', null, null, '2', '7', 'fdsfds', null, null);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
