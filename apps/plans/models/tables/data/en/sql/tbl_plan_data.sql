/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/22/2012 13:19:40 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_plan_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_plan_data`;
CREATE TABLE `tbl_plan_data` (
  `kp_PlanID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_KindOfPlanID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`kp_PlanID`),
  KEY `kf_KindOfPlanID` (`kf_KindOfPlanID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
