/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 14:59:09 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_whereabouts`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_whereabouts`;
CREATE TABLE `tbl_whereabouts` (
  `__kp_WhereaboutsID` float NOT NULL,
  `_kf_TimeID` float DEFAULT NULL,
  `_kf_LocationID` float DEFAULT NULL,
  `_kf_DateID` float DEFAULT NULL,
  PRIMARY KEY (`__kp_WhereaboutsID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
