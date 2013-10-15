/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  View structure for `metric`
-- ----------------------------
DROP VIEW IF EXISTS `metric`;
CREATE VIEW `metric` AS 
  SELECT `kp_MetricID`,
	`kf_WhereaboutsID`,
	`kf_KindOfMetricID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_metric;

SET FOREIGN_KEY_CHECKS = 1;