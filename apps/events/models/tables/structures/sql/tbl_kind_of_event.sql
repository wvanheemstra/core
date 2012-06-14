/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 22:12:59 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_kind_of_event`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_kind_of_event`;
CREATE TABLE `tbl_kind_of_event` (
  `__kp_KindOfEventID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfEventName` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`__kp_KindOfEventID`),
  UNIQUE KEY `__kp_KindOfEventID` (`__kp_KindOfEventID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
