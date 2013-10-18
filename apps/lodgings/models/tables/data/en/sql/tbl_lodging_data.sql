/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:55:27 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_lodging_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_lodging_data`;
CREATE TABLE `tbl_lodging_data` (
  `kp_LodgingID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_PersonID` int(11) NOT NULL DEFAULT '0',
  `kf_AccommodationID` int(11) NOT NULL DEFAULT '0',
  `kf_RoleID` int(11) NOT NULL DEFAULT '0',
  `kf_ContactID` int(11) NOT NULL DEFAULT '0',
  `kf_MultimediaID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`kp_LodgingID`),
  UNIQUE KEY `kp_LodgingID` (`kp_LodgingID`) USING BTREE,
  KEY `kf_PersonID` (`kf_PersonID`) USING BTREE,
  KEY `kf_AccommodationID` (`kf_AccommodationID`) USING BTREE,
  KEY `kf_RoleID` (`kf_RoleID`) USING BTREE,
  KEY `kf_ContactID` (`kf_ContactID`) USING BTREE,
  KEY `kf_MultimediaID` (`kf_MultimediaID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_lodging_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_lodging_data` VALUES ('1', '25', '1', '0', '0', '0'), ('2', '25', '2', '0', '0', '0'), ('3', '25', '3', '0', '0', '0'), ('4', '25', '4', '0', '0', '0'), ('5', '25', '5', '0', '0', '0'), ('6', '25', '6', '0', '0', '0'), ('7', '25', '7', '0', '0', '0'), ('8', '25', '8', '0', '0', '0'), ('9', '25', '9', '0', '0', '0'), ('10', '25', '10', '0', '0', '0'), ('11', '25', '11', '0', '0', '0'), ('12', '25', '12', '0', '0', '0'), ('13', '28', '13', '0', '0', '0');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
