/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 23:26:34 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_person`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_person`;
CREATE TABLE `tbl_person` (
  `__kp_PersonID` int(11) NOT NULL AUTO_INCREMENT,
  `_kf_SalutationID` int(11) NOT NULL,
  `_kf_GenderID` int(11) NOT NULL,
  `PersonFirstName` varchar(255) COLLATE utf8_bin NOT NULL,
  `PersonLastName` varchar(255) COLLATE utf8_bin NOT NULL,
  `_kf_NationalityID` int(11) NOT NULL,
  `_kf_DateID` int(11) NOT NULL,
  `_kf_KindOfPersonID` int(11) NOT NULL,
  `_kf_RegistryID` int(11) NOT NULL,
  `RelationshipWithSelf` varchar(255) COLLATE utf8_bin NOT NULL,
  `_kf_RequirementID` int(11) NOT NULL,
  `_kf_SkillID` int(11) NOT NULL,
  PRIMARY KEY (`__kp_PersonID`),
  UNIQUE KEY `__kp_PersonID` (`__kp_PersonID`),
  KEY `_kf_SalutationID` (`_kf_SalutationID`),
  KEY `_kf_GenderID` (`_kf_GenderID`),
  KEY `_kf_NationalityID` (`_kf_NationalityID`),
  KEY `_kf_DateID` (`_kf_DateID`),
  KEY `_kf_KindOfPersonID` (`_kf_KindOfPersonID`),
  KEY `_kf_RegistryID` (`_kf_RegistryID`),
  KEY `_kf_RequirementID` (`_kf_RequirementID`),
  KEY `_kf_SkillID` (`_kf_SkillID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
