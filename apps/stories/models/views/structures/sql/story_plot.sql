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
--  View structure for `story_plot`
-- ----------------------------
DROP VIEW IF EXISTS `story_plot`;
CREATE VIEW `story_plot` AS 
  SELECT `kp_StoryPlotID`,
    `kf_StoryID`,
	`kf_PlotID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_story_plot;

SET FOREIGN_KEY_CHECKS = 1;