/*
 Navicat MySQL Data Transfer

 Driver Server         : wvanheem_core_local
 Driver Server Version : 50509
 Driver Host           : 127.0.0.1
 Driver Database       : core

 Driver Server Version : 50509
 File Encoding         : utf-8
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  View structure for `driver`
-- ----------------------------
DROP VIEW IF EXISTS `driver`;
CREATE VIEW `driver` AS 
  SELECT `kp_DriverID`,
	`kf_KindOfDriverID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_driver;

SET FOREIGN_KEY_CHECKS = 1;