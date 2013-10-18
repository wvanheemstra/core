/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:35:49 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_metric_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_metric_data`;
CREATE TABLE `tbl_metric_data` (
  `kp_MetricID` int(11) NOT NULL AUTO_INCREMENT,
  `MetricName` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_WhereaboutsID` int(11) NOT NULL DEFAULT '0',
  `kf_KindOfMetricID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`kp_MetricID`),
  UNIQUE KEY `kp_MetricID` (`kp_MetricID`) USING BTREE,
  KEY `kf_WhereaboutsID` (`kf_WhereaboutsID`) USING BTREE,
  KEY `kf_KindOfMetricID` (`kf_KindOfMetricID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
