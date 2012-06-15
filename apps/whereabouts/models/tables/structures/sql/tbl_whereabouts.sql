/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/15/2012 11:26:04 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_whereabouts`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_whereabouts`;
CREATE TABLE `tbl_whereabouts` (
  `__kp_WhereaboutsID` int(11) NOT NULL AUTO_INCREMENT,
  `_kf_TimeID` int(11) NOT NULL,
  `_kf_LocationID` int(11) NOT NULL,
  `_kf_DateID` int(11) NOT NULL,
  PRIMARY KEY (`__kp_WhereaboutsID`),
  KEY `_kf_TimeID` (`_kf_TimeID`),
  KEY `_kf_LocationID` (`_kf_LocationID`),
  KEY `_kf_DateID` (`_kf_DateID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
