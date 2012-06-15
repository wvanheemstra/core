/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/15/2012 11:06:35 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_salutation`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_salutation`;
CREATE TABLE `tbl_salutation` (
  `__kp_SalutationID` int(11) NOT NULL AUTO_INCREMENT,
  `SalutationAbbreviation` varchar(255) COLLATE utf8_bin NOT NULL,
  `_kf_LanguageID` int(11) NOT NULL,
  PRIMARY KEY (`__kp_SalutationID`),
  KEY `_kf_LanguageID` (`_kf_LanguageID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
