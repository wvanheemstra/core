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
--  View structure for `whereabouts`
-- ----------------------------
DROP VIEW IF EXISTS `whereabouts`;
CREATE VIEW `whereabouts` AS 
  SELECT `kp_WhereaboutsID`,
    `kf_TimeID`,
    `kf_LocationID`,
    `kf_DateID`
FROM tbl_whereabouts;

SET FOREIGN_KEY_CHECKS = 1;
