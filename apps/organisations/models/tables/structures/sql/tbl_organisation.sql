/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 18:02:04 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_organisation`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_organisation`;
CREATE TABLE `tbl_organisation` (
  `kp_OrganisationID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_WhereaboutsID` int(11) NOT NULL,
  `OrganisationName` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`kp_OrganisationID`),
  UNIQUE KEY `kp_OrganisationID` (`kp_OrganisationID`) USING BTREE,
  KEY `kf_WhereaboutsID` (`kf_WhereaboutsID`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
