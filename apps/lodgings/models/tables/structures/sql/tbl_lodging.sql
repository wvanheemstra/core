/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 22:39:37 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_lodging`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_lodging`;
CREATE TABLE `tbl_lodging` (
  `__kp_LodgingID` int(11) NOT NULL AUTO_INCREMENT,
  `_kf_PersonID` int(11) NOT NULL,
  `_kf_AccommodationID` int(11) NOT NULL,
  `_kf_RoleID` int(11) NOT NULL,
  `_kf_ContactID` int(11) NOT NULL,
  `_kf_MultimediaID` int(11) NOT NULL,
  PRIMARY KEY (`__kp_LodgingID`),
  UNIQUE KEY `__kp_LodgingID` (`__kp_LodgingID`),
  KEY `_kf_PersonID` (`_kf_PersonID`),
  KEY `_kf_AccommodationID` (`_kf_AccommodationID`),
  KEY `_kf_RoleID` (`_kf_RoleID`),
  KEY `_kf_ContactID` (`_kf_ContactID`),
  KEY `_kf_MultimediaID` (`_kf_MultimediaID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
