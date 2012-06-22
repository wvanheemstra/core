/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/22/2012 17:54:34 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_membership_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_membership_data`;
CREATE TABLE `tbl_membership_data` (
  `kp_MembershipID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_PersonID` int(11) NOT NULL,
  `kf_OrganisationID` int(11) NOT NULL,
  `kf_MultimediaID` int(11) NOT NULL,
  `gKindOfContactID_telephone` int(11) NOT NULL,
  `gKindOfContactID_fax` int(11) NOT NULL,
  `gKindOfContactID_email` int(11) NOT NULL,
  `gKindOfContactID_mobile` int(11) NOT NULL,
  `gKindOfRoleID_occupation` int(11) NOT NULL,
  PRIMARY KEY (`kp_MembershipID`),
  UNIQUE KEY `kp_MembershipID` (`kp_MembershipID`) USING BTREE,
  KEY `kf_PersonID` (`kf_PersonID`) USING BTREE,
  KEY `kf_OrganisationID` (`kf_OrganisationID`) USING BTREE,
  KEY `kf_MultimediaID` (`kf_MultimediaID`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_membership_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_membership_data` VALUES ('26', '25', '8', '0', '1', '4', '3', '2', '1'), ('27', '27', '9', '0', '1', '4', '3', '2', '1'), ('28', '26', '10', '0', '1', '4', '3', '2', '1'), ('29', '28', '0', '0', '1', '4', '3', '2', '1'), ('30', '29', '11', '0', '1', '4', '3', '2', '1');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
