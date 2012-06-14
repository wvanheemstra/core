/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 14:48:58 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_membership`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_membership`;
CREATE TABLE `tbl_membership` (
  `__kp_MembershipID` float NOT NULL,
  `_kf_PersonID` float DEFAULT NULL,
  `_kf_OrganisationID` float DEFAULT NULL,
  `_kf_MultimediaID` float DEFAULT NULL,
  `gKindOfContactID_Telephone` float DEFAULT NULL,
  `gKindOfContactID_Fax` float DEFAULT NULL,
  `gKindOfContactID_Email` float DEFAULT NULL,
  `gKindOfContactID_Mobile` float DEFAULT NULL,
  `gKindOfRoleID_Occupation` float DEFAULT NULL,
  PRIMARY KEY (`__kp_MembershipID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
