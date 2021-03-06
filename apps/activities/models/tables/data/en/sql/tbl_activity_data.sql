/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/22/2012 13:19:40 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_activity_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_activity_data`;
CREATE TABLE `tbl_activity_data` (
  `kp_ActivityID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_KindOfActivityID` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`kp_ActivityID`),
  KEY `kf_KindOfActivityID` (`kf_KindOfActivityID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
