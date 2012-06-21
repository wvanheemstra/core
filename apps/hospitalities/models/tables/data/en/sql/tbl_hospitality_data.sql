/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:41:11 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_hospitality_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_hospitality_data`;
CREATE TABLE `tbl_hospitality_data` (
  `kp_HospitalityID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_AccommodationID` int(11) NOT NULL,
  `kf_OrganisationID` int(11) NOT NULL,
  `kf_RoleID` int(11) NOT NULL,
  `kf_ContactID` int(11) NOT NULL,
  `kf_MultimediaID` int(11) NOT NULL,
  PRIMARY KEY (`kp_HospitalityID`),
  UNIQUE KEY `kp_HospitalityID` (`kp_HospitalityID`) USING BTREE,
  KEY `kf_AccommodationID` (`kf_AccommodationID`) USING BTREE,
  KEY `kf_OrganisationID` (`kf_OrganisationID`) USING BTREE,
  KEY `kf_RoleID` (`kf_RoleID`) USING BTREE,
  KEY `kf_ContactID` (`kf_ContactID`) USING BTREE,
  KEY `kf_MultimediaID` (`kf_MultimediaID`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
