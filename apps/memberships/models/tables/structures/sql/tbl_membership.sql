/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 12:38:37 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_membership`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_membership`;
CREATE TABLE `tbl_membership` (
  `kp_MembershipID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_PersonID` int(11) NOT NULL,
  `kf_OrganisationID` int(11) NOT NULL,
  `kf_MultimediaID` int(11) NOT NULL,
  `gKindOfContactID_telephone` int(11) NOT NULL,
  `gKindOfContactID_fax` int(11) NOT NULL,
  `gKindOfContactID_email` int(11) NOT NULL,
  `gKindOfContactID_mobile` int(11) NOT NULL,
  `gKindOfRoleID_occupation` int(11) NOT NULL,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_MembershipID`),
  UNIQUE KEY `kp_MembershipID` (`kp_MembershipID`) USING BTREE,
  KEY `kf_PersonID` (`kf_PersonID`) USING BTREE,
  KEY `kf_OrganisationID` (`kf_OrganisationID`) USING BTREE,
  KEY `kf_MultimediaID` (`kf_MultimediaID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Membership.ts_Created` BEFORE INSERT ON `tbl_membership` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
