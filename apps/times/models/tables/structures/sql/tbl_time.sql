/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 18:15:55 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_time`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_time`;
CREATE TABLE `tbl_time` (
  `kp_TimeID` int(11) NOT NULL AUTO_INCREMENT,
  `TimeStart` time NOT NULL,
  `TimeFinish` time NOT NULL,
  PRIMARY KEY (`kp_TimeID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;