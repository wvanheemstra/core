/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 22:48:25 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_management`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_management`;
CREATE TABLE `tbl_management` (
  `__kp_ManagementID` int(11) NOT NULL AUTO_INCREMENT,
  `_kf_EventID` int(11) NOT NULL,
  `_kf_OrganisationID` int(11) NOT NULL,
  `_kf_RoleID` int(11) NOT NULL,
  `_kf_ContactID` int(11) NOT NULL,
  `_kf_MultimediaID` int(11) NOT NULL,
  PRIMARY KEY (`__kp_ManagementID`),
  UNIQUE KEY `__kp_ManagementID` (`__kp_ManagementID`),
  KEY `_kf_EventID` (`_kf_EventID`),
  KEY `_kf_OrganisationID` (`_kf_OrganisationID`),
  KEY `_kf_RoleID` (`_kf_RoleID`),
  KEY `_kf_ContactID` (`_kf_ContactID`),
  KEY `_kf_MultimediaID` (`_kf_MultimediaID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
