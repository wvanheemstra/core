/*
 Navicat MySQL Data Transfer

 Amount Server         : wvanheem_core_local
 Amount Server Version : 50509
 Amount Host           : 127.0.0.1
 Amount Database       : core

 Metric Server Version : 50509
 File Encoding         : utf-8
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  View structure for `resource_amount_metric`
-- ----------------------------
DROP VIEW IF EXISTS `resource_amount_metric`;
CREATE VIEW `resource_amount_metric` AS 
  SELECT `kp_ResourceAmountMetricID`,
    `kf_ResourceID`,  
    `kf_AmountID`,
	`kf_MetricID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_resource_amount_metric;

SET FOREIGN_KEY_CHECKS = 1;