/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 23:10:05 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_multimedia`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_multimedia`;
CREATE TABLE `tbl_multimedia` (
  `__kp_MultimediaID` int(11) NOT NULL AUTO_INCREMENT,
  `_kf_KindOfMultimediaID` int(11) NOT NULL,
  PRIMARY KEY (`__kp_MultimediaID`),
  UNIQUE KEY `__kp_MultimediaID` (`__kp_MultimediaID`),
  KEY `_kf_KindOfMultimediaID` (`_kf_KindOfMultimediaID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
