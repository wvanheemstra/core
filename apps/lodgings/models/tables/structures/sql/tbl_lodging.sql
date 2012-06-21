/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:54:32 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_lodging`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_lodging`;
CREATE TABLE `tbl_lodging` (
  `kp_LodgingID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_PersonID` int(11) NOT NULL,
  `kf_AccommodationID` int(11) NOT NULL,
  `kf_RoleID` int(11) NOT NULL,
  `kf_ContactID` int(11) NOT NULL,
  `kf_MultimediaID` int(11) NOT NULL,
  PRIMARY KEY (`kp_LodgingID`),
  UNIQUE KEY `kp_LodgingID` (`kp_LodgingID`) USING BTREE,
  KEY `kf_PersonID` (`kf_PersonID`) USING BTREE,
  KEY `kf_AccommodationID` (`kf_AccommodationID`) USING BTREE,
  KEY `kf_RoleID` (`kf_RoleID`) USING BTREE,
  KEY `kf_ContactID` (`kf_ContactID`) USING BTREE,
  KEY `kf_MultimediaID` (`kf_MultimediaID`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
