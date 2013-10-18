/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 12:40:04 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_plan`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_plan`;
CREATE TABLE `tbl_plan` (
  `kp_PlanID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_KindOfPlanID` int(11) NOT NULL DEFAULT '0',
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_PlanID`),
  KEY `kf_KindOfPlanID` (`kf_KindOfPlanID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Plan.ts_Created` BEFORE INSERT ON `tbl_plan` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
