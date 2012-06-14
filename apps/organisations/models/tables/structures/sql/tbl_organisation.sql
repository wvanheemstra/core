/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 23:16:41 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_organisation`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_organisation`;
CREATE TABLE `tbl_organisation` (
  `__kp_OrganisationID` int(11) NOT NULL AUTO_INCREMENT,
  `_kf_WhereaboutsID` int(11) NOT NULL,
  `OrganisationName` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`__kp_OrganisationID`),
  UNIQUE KEY `__kp_OrganisationID` (`__kp_OrganisationID`),
  KEY `_kf_WhereaboutsID` (`_kf_WhereaboutsID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
