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
--  View structure for `programme`
-- ----------------------------
DROP VIEW IF EXISTS `programme`;
CREATE VIEW `programme` AS 
  SELECT `kp_ProgrammeID`,
    `ProgrammeName`,
    `kf_WhereaboutsID`,
    `kf_KindOfProgrammeID`,
    `kf_EventID`
FROM tbl_programme;

SET FOREIGN_KEY_CHECKS = 1;
