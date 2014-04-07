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
--  View structure for `plot_name`
-- ----------------------------
DROP VIEW IF EXISTS `plot_name`;
CREATE VIEW `plot_name` AS 
  SELECT `kp_PlotNameID`,
    `kf_PlotID`,
	`kf_NameID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_plot_name;

SET FOREIGN_KEY_CHECKS = 1;