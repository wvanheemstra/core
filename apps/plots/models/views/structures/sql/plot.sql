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
--  View structure for `plot`
-- ----------------------------
DROP VIEW IF EXISTS `plot`;
CREATE VIEW `plot` AS 
  SELECT `kp_PlotID`,
	`PlotKey`,
	`PlotValue`,
	`kf_KindOfPlotID`,
	`kf_LanguageID`,
	`kf_ParentID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_plot;

SET FOREIGN_KEY_CHECKS = 1;