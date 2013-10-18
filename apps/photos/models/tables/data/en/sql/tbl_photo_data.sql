/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 18:06:16 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_photo_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_photo_data`;
CREATE TABLE `tbl_photo_data` (
  `kp_PhotoID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_MultimediaID` int(11) NOT NULL DEFAULT 0,
  `PhotoFile` blob NOT NULL,
  PRIMARY KEY (`kp_PhotoID`),
  UNIQUE KEY `kp_PhotoID` (`kp_PhotoID`) USING BTREE,
  KEY `kf_MultimediaID` (`kf_MultimediaID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
