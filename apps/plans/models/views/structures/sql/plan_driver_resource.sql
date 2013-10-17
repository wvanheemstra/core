/*
 Navicat MySQL Data Transfer

 Driver Server         : wvanheem_core_local
 Driver Server Version : 50509
 Driver Host           : 127.0.0.1
 Driver Database       : core

 Resource Server Version : 50509
 File Encoding         : utf-8
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  View structure for `plan_driver_resource`
-- ----------------------------
DROP VIEW IF EXISTS `plan_driver_resource`;
CREATE VIEW `plan_driver_resource` AS 
  SELECT `kp_PlanDriverResourceID`,
    `kf_PlanID`,  
    `kf_DriverID`,
	`kf_ResourceID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_plan_driver_resource;

SET FOREIGN_KEY_CHECKS = 1;