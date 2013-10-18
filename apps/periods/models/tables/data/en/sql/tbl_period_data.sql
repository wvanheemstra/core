/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/23/2012 10:45:18 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_period_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_period_data`;
CREATE TABLE `tbl_period_data` (
  `kp_PeriodID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_DateID` int(11) NOT NULL DEFAULT 0,
  `kf_KindOfPeriodID` int(11) NOT NULL DEFAULT 0,
  `PeriodName` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`kp_PeriodID`),
  KEY `kf_DateID` (`kf_DateID`),
  KEY `kf_KindOfPeriodID` (`kf_KindOfPeriodID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
