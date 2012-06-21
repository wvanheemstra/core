/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 18:05:11 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_person_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_person_data`;
CREATE TABLE `tbl_person_data` (
  `kp_PersonID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_SalutationID` int(11) NOT NULL,
  `kf_GenderID` int(11) NOT NULL,
  `PersonFirstName` varchar(255) COLLATE utf8_bin NOT NULL,
  `PersonLastName` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_NationalityID` int(11) NOT NULL,
  `kf_DateID` int(11) NOT NULL,
  `kf_KindOfPersonID` int(11) NOT NULL,
  `kf_RegistryID` int(11) NOT NULL,
  `RelationshipWithSelf` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_RequirementID` int(11) NOT NULL,
  `kf_SkillID` int(11) NOT NULL,
  PRIMARY KEY (`kp_PersonID`),
  UNIQUE KEY `kp_PersonID` (`kp_PersonID`) USING BTREE,
  KEY `kf_SalutationID` (`kf_SalutationID`) USING BTREE,
  KEY `kf_GenderID` (`kf_GenderID`) USING BTREE,
  KEY `kf_NationalityID` (`kf_NationalityID`) USING BTREE,
  KEY `kf_DateID` (`kf_DateID`) USING BTREE,
  KEY `kf_KindOfPersonID` (`kf_KindOfPersonID`) USING BTREE,
  KEY `kf_RegistryID` (`kf_RegistryID`) USING BTREE,
  KEY `kf_RequirementID` (`kf_RequirementID`) USING BTREE,
  KEY `kf_SkillID` (`kf_SkillID`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
