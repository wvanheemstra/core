/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 23:29:34 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_photo`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_photo`;
CREATE TABLE `tbl_photo` (
  `__kp_PhotoID` int(11) NOT NULL AUTO_INCREMENT,
  `_kf_MultimediaID` int(11) NOT NULL,
  `PhotoFile` blob NOT NULL,
  PRIMARY KEY (`__kp_PhotoID`),
  UNIQUE KEY `__kp_PhotoID` (`__kp_PhotoID`),
  KEY `_kf_MultimediaID` (`_kf_MultimediaID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
