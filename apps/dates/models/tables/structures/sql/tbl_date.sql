/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:34:08 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_date`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_date`;
CREATE TABLE `tbl_date` (
  `kp_DateID` int(11) NOT NULL AUTO_INCREMENT,
  `DateStart` date NOT NULL,
  `DateFinish` date NOT NULL,
  `DurationInWeeks` float NOT NULL,
  PRIMARY KEY (`kp_DateID`),
  UNIQUE KEY `kp_DateID` (`kp_DateID`) USING BTREE,
  KEY `DateStart` (`DateStart`),
  KEY `DateFinish` (`DateFinish`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
