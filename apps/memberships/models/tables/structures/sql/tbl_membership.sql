/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 23:04:05 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_membership`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_membership`;
CREATE TABLE `tbl_membership` (
  `__kp_MembershipID` int(11) NOT NULL AUTO_INCREMENT,
  `_kf_PersonID` int(11) NOT NULL,
  `_kf_OrganisationID` int(11) NOT NULL,
  `_kf_MultimediaID` int(11) NOT NULL,
  `gKindOfContactID_Telephone` int(11) NOT NULL,
  `gKindOfContactID_Fax` int(11) NOT NULL,
  `gKindOfContactID_Email` int(11) NOT NULL,
  `gKindOfContactID_Mobile` int(11) NOT NULL,
  `gKindOfRoleID_Occupation` int(11) NOT NULL,
  PRIMARY KEY (`__kp_MembershipID`),
  UNIQUE KEY `__kp_MembershipID` (`__kp_MembershipID`),
  KEY `_kf_PersonID` (`_kf_PersonID`),
  KEY `_kf_OrganisationID` (`_kf_OrganisationID`),
  KEY `_kf_MultimediaID` (`_kf_MultimediaID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
