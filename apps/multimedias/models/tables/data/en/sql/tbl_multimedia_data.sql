/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 18:00:09 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_multimedia_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_multimedia_data`;
CREATE TABLE `tbl_multimedia_data` (
  `kp_MultimediaID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_KindOfMultimediaID` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`kp_MultimediaID`),
  UNIQUE KEY `kp_MultimediaID` (`kp_MultimediaID`) USING BTREE,
  KEY `kf_KindOfMultimediaID` (`kf_KindOfMultimediaID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
