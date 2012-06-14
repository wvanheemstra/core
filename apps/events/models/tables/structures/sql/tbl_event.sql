/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 21:52:54 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_event`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_event`;
CREATE TABLE `tbl_event` (
  `__kp_EventID` int(11) NOT NULL AUTO_INCREMENT,
  `EventName` varchar(255) COLLATE utf8_bin NOT NULL,
  `_kf_WhereaboutsID` int(11) NOT NULL,
  `_kf_KindOfEventID` int(11) NOT NULL,
  PRIMARY KEY (`__kp_EventID`),
  UNIQUE KEY `__kp_EventID` (`__kp_EventID`),
  KEY `_kf_WhereaboutsID` (`_kf_WhereaboutsID`),
  KEY `_kf_KindOfEventID` (`_kf_KindOfEventID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
