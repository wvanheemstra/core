/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 21:56:57 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_gender`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_gender`;
CREATE TABLE `tbl_gender` (
  `__kp_GenderID` int(11) NOT NULL AUTO_INCREMENT,
  `GenderName` varchar(255) COLLATE utf8_bin NOT NULL,
  `_kf_LanguageID` int(11) NOT NULL,
  PRIMARY KEY (`__kp_GenderID`),
  UNIQUE KEY `__kp_GenderID` (`__kp_GenderID`),
  KEY `_kf_LanguageID` (`_kf_LanguageID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
